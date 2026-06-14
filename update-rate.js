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
  console.log('Fetching latest USD exchange rates...');
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
      console.log(`Fetched: 1 USD = ${rates[curr.code]} ${curr.code}`);
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
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function saveHistory(currency, history) {
  const jsonFile = path.join(DATA_DIR, `history-${currency.toLowerCase()}.json`);
  const csvFile = path.join(DATA_DIR, `history-${currency.toLowerCase()}.csv`);
  
  history.sort((a, b) => a.date.localeCompare(b.date));
  
  await fs.writeFile(jsonFile, JSON.stringify(history, null, 2));
  
  let csvContent = 'date,usd_to_' + currency.toLowerCase() + '\n';
  history.forEach(entry => {
    csvContent += `${entry.date},${entry.rate}\n`;
  });
  await fs.writeFile(csvFile, csvContent);
  
  console.log(`Saved ${history.length} records for ${currency}`);
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

async function updateHistory(history, today, rate, currency) {
  const existingIndex = history.findIndex(entry => entry.date === today);
  if (existingIndex !== -1) {
    history[existingIndex].rate = rate;
  } else {
    history.push({ date: today, rate });
  }
  return history;
}

function calculateStats(history) {
  if (history.length === 0) return { totalRecords: 0, latestRate: 0, highestRate: 0, lowestRate: 0, averageRate: 0 };
  
  const rates = history.map(h => h.rate);
  return {
    totalRecords: history.length,
    latestRate: rates[rates.length - 1],
    highestRate: Math.max(...rates),
    lowestRate: Math.min(...rates),
    averageRate: parseFloat((rates.reduce((a, b) => a + b, 0) / rates.length).toFixed(4))
  };
}

function generateTrendSVG(history, currencyCode) {
  if (history.length === 0) {
    return `<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg"><text x="400" y="150" text-anchor="middle" fill="#666">No data yet for ${currencyCode}</text></svg>`;
  }

  const last30 = history.slice(-30);
  const rates = last30.map(h => h.rate);
  const minRate = Math.min(...rates);
  const maxRate = Math.max(...rates);
  const range = maxRate - minRate || 1;

  const width = 800, height = 300, padding = 50;
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;">`;

  // Line
  let points = [];
  for (let i = 0; i < last30.length; i++) {
    const x = padding + (width - 2 * padding) * (i / Math.max(1, last30.length - 1));
    const y = padding + (height - 2 * padding) * ((maxRate - last30[i].rate) / range);
    points.push(`${x},${y}`);
    svg += `<circle cx="${x}" cy="${y}" r="4" fill="#3b82f6"/>`;
  }
  svg += `<polyline points="${points.join(' ')}" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>`;

  svg += `<text x="${width/2}" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to ${currencyCode} - 30 Days Trend</text>`;
  svg += '</svg>';
  return svg;
}

async function updateReadme(allStats, today) {
  let content = await fs.readFile(README_FILE, 'utf8').catch(() => '# Daily Multi-Currency USD Tracker\n');
  
  const start = '<!-- EXCHANGE-RATE-START -->';
  const end = '<!-- EXCHANGE-RATE-END -->';
  
  let section = `\n## 💱 Multi-Currency USD Exchange Rates\n\n**Last Updated:** ${today}\n\n`;
  
  for (const [code, data] of Object.entries(allStats)) {
    section += `### ${data.currency.name} (${code})\n**1 USD = ${data.rate} ${code}**\n\n`;
    section += generateTrendSVG(data.history, code) + '\n\n';
  }
  
  section += `**Project Status:** Active ✅\n\n`;
  
  const regex = new RegExp(`${start}[\\s\\S]*?${end}`, 'g');
  if (content.includes(start)) {
    content = content.replace(regex, `${start}${section}${end}`);
  } else {
    content += `${start}${section}${end}`;
  }
  
  await fs.writeFile(README_FILE, content.trim());
  console.log('✅ README.md updated');
}

async function generateDashboard(allStats, today) {
  let cards = '';
  for (const [code, data] of Object.entries(allStats)) {
    const stats = data.stats;
    cards += `
    <div class="card">
      <h2>${data.currency.name} (${code})</h2>
      <div class="rate">1 USD = ${data.rate} ${code}</div>
      <p class="last-updated">Last Updated: ${today}</p>
      ${generateTrendSVG(data.history, code)}
      <h3>Statistics</h3>
      <ul>
        <li>Total Records: ${stats.totalRecords}</li>
        <li>Highest: ${stats.highestRate}</li>
        <li>Lowest: ${stats.lowestRate}</li>
        <li>Average: ${stats.averageRate}</li>
      </ul>
    </div>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Currency USD Dashboard</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; background: #f8fafc; }
    .card { background: white; border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .rate { font-size: 2.5rem; font-weight: bold; color: #2563eb; }
    svg { max-width: 100%; height: auto; }
  </style>
</head>
<body>
  <h1>💱 Multi-Currency USD Exchange Rate Dashboard</h1>
  <p style="text-align:center;color:#666;">Last Updated: ${today}</p>
  ${cards}
</body>
</html>`;

  await fs.writeFile(INDEX_HTML, html);
  console.log('✅ index.html (GitHub Pages dashboard) generated');
}

async function main() {
  try {
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
    }
    
    await updateReadme(allStats, today);
    await generateDashboard(allStats, today);
    
    console.log('🎉 All updates completed successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();