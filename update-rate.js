import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = 'https://open.er-api.com/v6/latest/USD';
const DATA_DIR = path.join(__dirname, 'data');
const JSON_FILE = path.join(DATA_DIR, 'history.json');
const CSV_FILE = path.join(DATA_DIR, 'history.csv');
const README_FILE = path.join(__dirname, 'README.md');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function fetchExchangeRate() {
  console.log('Fetching latest USD to BDT rate...');
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  if (data.result !== 'success') {
    throw new Error('API returned error: ' + JSON.stringify(data));
  }
  
  const rate = data.rates.BDT;
  if (!rate) {
    throw new Error('BDT rate not found in API response');
  }
  
  console.log(`Fetched rate: 1 USD = ${rate} BDT`);
  return parseFloat(rate.toFixed(4)); // Round to 4 decimals for precision
}

async function loadHistory() {
  try {
    const jsonData = await fs.readFile(JSON_FILE, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function saveHistory(history) {
  // Sort by date
  history.sort((a, b) => a.date.localeCompare(b.date));
  
  // Save JSON
  await fs.writeFile(JSON_FILE, JSON.stringify(history, null, 2));
  console.log(`Saved ${history.length} records to history.json`);
  
  // Save CSV
  let csvContent = 'date,usd_bdt\n';
  history.forEach(entry => {
    csvContent += `${entry.date},${entry.usd_bdt}\n`;
  });
  await fs.writeFile(CSV_FILE, csvContent);
  console.log(`Saved ${history.length} records to history.csv`);
}

function getTodayDate() {
  const now = new Date();
  return now.toISOString().split('T')[0]; // YYYY-MM-DD
}

async function updateHistory(history, today, rate) {
  const existingIndex = history.findIndex(entry => entry.date === today);
  
  if (existingIndex !== -1) {
    // Update existing
    history[existingIndex].usd_bdt = rate;
    console.log(`Updated existing entry for ${today}`);
  } else {
    // Append new
    history.push({ date: today, usd_bdt: rate });
    console.log(`Added new entry for ${today}`);
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
  
  const rates = history.map(h => h.usd_bdt);
  const latest = history[history.length - 1];
  
  return {
    totalRecords: history.length,
    latestRate: latest.usd_bdt,
    highestRate: Math.max(...rates),
    lowestRate: Math.min(...rates),
    averageRate: parseFloat((rates.reduce((sum, r) => sum + r, 0) / rates.length).toFixed(4))
  };
}

async function updateReadme(stats, today, rate) {
  let readmeContent;
  try {
    readmeContent = await fs.readFile(README_FILE, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      readmeContent = '# Daily USD to BDT Exchange Rate Tracker\n\n';
    } else {
      throw error;
    }
  }
  
  const startMarker = '<!-- EXCHANGE-RATE-START -->';
  const endMarker = '<!-- EXCHANGE-RATE-END -->';
  
  const newSection = `
## USD → BDT Daily Tracker

**Last Updated:** ${today}  
**Current Rate:** 1 USD = ${rate} BDT  

### Statistics
- **Total Historical Records:** ${stats.totalRecords}
- **Highest Rate:** ${stats.highestRate} BDT
- **Lowest Rate:** ${stats.lowestRate} BDT
- **Average Rate:** ${stats.averageRate} BDT
- **Latest Rate:** ${stats.latestRate} BDT

**Project Status:** Active ✅

*Data automatically updated daily via GitHub Actions.*
`;

  // Replace or insert the section
  const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
  
  if (readmeContent.includes(startMarker) && readmeContent.includes(endMarker)) {
    readmeContent = readmeContent.replace(regex, `${startMarker}${newSection}${endMarker}`);
  } else {
    // Append if markers not found
    readmeContent += `\n${startMarker}${newSection}${endMarker}\n`;
  }
  
  await fs.writeFile(README_FILE, readmeContent.trim());
  console.log('Updated README.md with latest statistics');
}

async function main() {
  try {
    console.log('🚀 Starting Daily USD to BDT Exchange Rate Tracker');
    
    await ensureDataDir();
    
    const today = getTodayDate();
    const rate = await fetchExchangeRate();
    
    let history = await loadHistory();
    history = await updateHistory(history, today, rate);
    
    await saveHistory(history);
    
    const stats = calculateStats(history);
    await updateReadme(stats, today, rate);
    
    console.log('✅ Successfully updated exchange rate data and README');
    console.log(`Total records: ${stats.totalRecords}`);
    console.log(`Current rate: ${rate} BDT`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
