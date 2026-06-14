import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = 'https://open.er-api.com/v6/latest/USD';
const DATA_DIR = path.join(__dirname, 'data');
const README_FILE = path.join(__dirname, 'README.md');
const INDEX_HTML = path.join(__dirname, 'index.html');

// Multi-currency configuration
const CURRENCIES = [
  { code: 'BDT', name: 'Bangladesh Taka', symbol: '৳' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
];

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function fetchAllRates() {
  console.log('Fetching latest USD exchange rates for multiple currencies...');
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  if (data.result !== 'success') {
    throw new Error('API returned error: ' + JSON.stringify(data));
  }

  const rates = {};
  CURRENCIES.forEach(curr => {
    const rate = data.rates[curr.code];
    if (rate) {
      rates[curr.code] = parseFloat(rate.toFixed(4));
      console.log(`Fetched rate: 1 USD = ${rates[curr.code]} ${curr.code}`);
    } else {
      console.warn(`Rate for ${curr.code} not found`);
    }
  });

  return rates;
}

async function loadHistory(currency) {
  const jsonFile = path.join(DATA_DIR, `history-${currency.toLowerCase()}.json`);
  try {
    const jsonData = await fs.readFile(jsonFile, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function saveHistory(currency, history) {
  const jsonFile = path.join(DATA_DIR, `history-${currency.toLowerCase()}.json`);
  const csvFile = path.join(DATA_DIR, `history-${currency.toLowerCase()}.csv`);
  
  // Sort by date
  history.sort((a, b) => a.date.localeCompare(b.date));
  
  // Save JSON
  await fs.writeFile(jsonFile, JSON.stringify(history, null, 2));
  
  // Save CSV
  let csvContent = 'date,usd_to_' + currency.toLowerCase() + '\n';
  history.forEach(entry => {
    csvContent += `${entry.date},${entry.rate}\n`;
  });
  await fs.writeFile(csvFile, csvContent);
  
  console.log(`Saved ${history.length} records for ${currency}`);
}

function getTodayDate() {
  const now = new Date();
  return now.toISOString().split('T')[0]; // YYYY-MM-DD
}

async function updateHistory(history, today, rate, currency) {
  const existingIndex = history.findIndex(entry => entry.date === today);
  
  if (existingIndex !== -1) {
    history[existingIndex].rate = rate;
    console.log(`Updated existing entry for ${today} (${currency})`);
  } else {
    history.push({ date: today, rate: rate });
    console.log(`Added new entry for ${today} (${currency})`);
  }
  
  return history;
}

function calculateStats(history) {
  if (history.length === 0) {
    return {
      totalRecords: 0,
      latestRate: null,
      highestRate: null,
      lowestRate: null,
      averageRate: null
    };
  }
  
  const rates = history.map(h => h.rate);
  const latest = history[history.length - 1];
  
  return {
    totalRecords: history.length,
    latestRate: latest.rate,
    highestRate: Math.max(...rates),
    lowestRate: Math.min(...rates),
    averageRate: parseFloat((rates.reduce((sum, r) => sum + r, 0) / rates.length).toFixed(4))
  };
}

function generateTrendSVG(history, currencyCode, currencyName) {
  if (history.length === 0) {
    return `<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg"><text x="400" y="150" text-anchor="middle" fill="#666">No data available for ${currencyCode} yet</text></svg>`;
  }

  // Get last 30 days
  const last30 = history.slice(-30);
  if (last30.length === 0) last30 = history;

  const rates = last30.map(h => h.rate);
  const minRate = Math.min(...rates);
  const maxRate = Math.max(...rates);
  const range = maxRate - minRate || 1;

  const width = 800;
  const height = 300;
  const padding = 50;

  let svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#e5e7eb" stroke-width="1"/>
`;

  // Y-axis labels
  const yLabels = 5;
  for (let i = 0; i <= yLabels; i++) {
    const y = padding + (height - 2 * padding) * (i / yLabels);
    const val = (maxRate - (range * i / yLabels)).toFixed(2);
    svg += `<text x="${padding - 10}" y="${y + 4}" text-anchor="end" font-size="12" fill="#666">${val}</text>\n`;
  }

  // X-axis (dates)
  const points = [];
  for (let i = 0; i < last30.length; i++) {
    const x = padding + (width - 2 * padding) * (i / Math.max(1, last30.length - 1));
    const normalizedY = (maxRate - last30[i].rate) / range;
    const y = padding + (height - 2 * padding) * normalizedY;
    
    points.push(`${x},${y}`);
    
    // Data points
    svg += `<circle cx="${x}" cy="${y}" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>\n`;
  }

  // Line
  svg += `<polyline points="${points.join(' ')}" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n`;

  // Title and labels
  svg += `
  <text x="${width/2}" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to ${currencyCode} - Last 30 Days Trend</text>
  <text x="${width/2}" y="${height - 15}" text-anchor="middle" font-size="12" fill="#666">Date →</text>
`;

  svg += '</svg>';
  return svg.trim();
}

async function updateReadme(allStats, today) {
  let readmeContent;
  try {
    readmeContent = await fs.readFile(README_FILE, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      readmeContent = '# Daily Multi-Currency USD Exchange Rate Tracker\n\n';
    } else {
      throw error;
    }
  }
  
  const startMarker = '<!-- EXCHANGE-RATE-START -->';
  const endMarker = '<!-- EXCHANGE-RATE-END -->';
  
  let section = `
## 💱 Multi-Currency USD Exchange Rates

**Last Updated:** ${today}  

### Current Rates
`;

  for (const [code, data] of Object.entries(allStats)) {
    const curr = data.currency;
    section += `- **1 USD = ${data.rate} ${code}** (${curr.name})\n`;
  }

  section += `

### 30-Day Trend Charts
`;

  for (const [code, data] of Object.entries(allStats)) {
    const curr = data.currency;
    const svgChart = generateTrendSVG(data.history, code, curr.name);
    section += `
#### ${curr.name} (${code})
${svgChart}
`;
  }

  section += `

### Summary Statistics
| Currency | Latest Rate | Highest | Lowest | Average | Records |
|----------|-------------|---------|--------|---------|---------|
`;

  for (const [code, data] of Object.entries(allStats)) {
    const s = data.stats;
    section += `| ${code} | ${s.latestRate} | ${s.highestRate} | ${s.lowestRate} | ${s.averageRate} | ${s.totalRecords} |\n`;
  }

  section += `

**Project Status:** Active ✅

*Data automatically updated daily via GitHub Actions. Supports BDT, INR, CNY, EUR, CAD, AUD.*
`;

  // Replace or insert the section
  const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
  
  if (readmeContent.includes(startMarker) && readmeContent.includes(endMarker)) {
    readmeContent = readmeContent.replace(regex, `${startMarker}${section}${endMarker}`);
  } else {
    readmeContent += `\n${startMarker}${section}${endMarker}\n`;
  }
  
  await fs.writeFile(README_FILE, readmeContent.trim());
  console.log('Updated README.md with multi-currency statistics and charts');
}

async function generateDashboard(allStats, today) {
  let cardsHTML = '';

  for (const [code, data] of Object.entries(allStats)) {
    const curr = data.currency;
    const stats = data.stats;
    const history = data.history;
    const last30 = history.slice(-30);
    const svgChart = generateTrendSVG(history, code, curr.name);

    cardsHTML += `
    <div class="card">
        <h2>${curr.name} (${code})</h2>
        <div class="rate">1 USD = ${data.rate} ${code}</div>
        <p class="last-updated">Last Updated: ${today}</p>
        
        <h3>30-Day Trend</h3>
        ${svgChart}
        
        <h3>Key Statistics</h3>
        <ul>
            <li><strong>Total Records:</strong> ${stats.totalRecords}</li>
            <li><strong>Highest:</strong> ${stats.highestRate} ${code}</li>
            <li><strong>Lowest:</strong> ${stats.lowestRate} ${code}</li>
            <li><strong>Average:</strong> ${stats.averageRate} ${code}</li>
        </ul>
        
        <h3>Recent History (Last 10 Days)</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Rate (${code})</th>
                </tr>
            </thead>
            <tbody>
                ${last30.slice(-10).reverse().map(entry => `
                    <tr>
                        <td>${entry.date}</td>
                        <td><strong>${entry.rate}</strong></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>`;
  }

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-Currency USD Exchange Rate Dashboard</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f8fafc;
            color: #1e2937;
        }
        h1 { color: #1e40af; text-align: center; }
        .card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .rate {
            font-size: 2.2rem;
            font-weight: bold;
            color: #3b82f6;
        }
        svg { width: 100%; max-width: 800px; margin: 15px auto; display: block; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }
        th { background: #f1f5f9; }
        .last-updated { text-align: center; color: #64748b; font-style: italic; }
    </style>
</head>
<body>
    <h1>💱 Multi-Currency USD Exchange Rate Dashboard</h1>
    <p style="text-align:center; color:#64748b;">Last Updated: ${today}</p>
    
    ${cardsHTML}

    <footer style="text-align:center; margin-top:60px; color:#64748b; font-size:0.9rem;">
        <p>Automated with ❤️ using GitHub Actions • Powered by open.er-api.com</p>
        <p><a href="https://github.com/yourusername/daily-usd-to-bdt-tracker" style="color:#3b82f6;">View Source on GitHub</a></p>
    </footer>
</body>
</html>`;

  await fs.writeFile(INDEX_HTML, htmlContent);
  console.log('Generated GitHub Pages multi-currency dashboard: index.html');
}

async function main() {
  try {
    console.log('🚀 Starting Multi-Currency USD Exchange Rate Tracker');
    
    await ensureDataDir();
    
    const today = getTodayDate();
    const rates = await fetchAllRates();
    
    let allStats = {};
    
    for (const curr of CURRENCIES) {
      const code = curr.code;
      const rate = rates[code];
      if (!rate) continue;
      
      let history = await loadHistory(code);
      history = await updateHistory(history, today, rate, code);
      await saveHistory(code, history);
      
      const stats = calculateStats(history);
      allStats[code] = { stats, history, rate, currency: curr };
      
      console.log(`✅ Processed ${code}: ${rate} | Records: ${stats.totalRecords}`);
    }
    
    await updateReadme(allStats, today);
    await generateDashboard(allStats, today);
    
    console.log('✅ Successfully updated all currencies, README, and GitHub Pages dashboard');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
