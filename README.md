# Daily Multi-Currency USD Exchange Rate Tracker

[![GitHub Workflow Status](https://github.com/yourusername/daily-usd-to-bdt-tracker/actions/workflows/update-rate.yml/badge.svg)](https://github.com/yourusername/daily-usd-to-bdt-tracker/actions)

Automatically tracks daily USD exchange rates to **BDT, INR, CNY, EUR, CAD, AUD** using a free public API and GitHub Actions. Historical data per currency + beautiful dashboards.

## Features

- **Daily Automated Updates**: Runs every day at 06:00 UTC via GitHub Actions
- **Free API**: Uses open.er-api.com (no API key required)
- **Data Persistence**: Stores historical rates in `data/history.json` and `data/history.csv`
- **Duplicate Prevention**: Updates existing day's entry if rerun
- **Statistics**: Calculates highest, lowest, average rates, and more
- **README Updates**: Dynamically updates project dashboard + 30-day SVG trend chart
- **GitHub Pages Dashboard**: Live interactive historical rate dashboard at `https://yourusername.github.io/daily-usd-to-bdt-tracker/`
- **Manual Trigger**: Can be run manually from GitHub UI
- **Error Handling & Logging**: Robust script with detailed console output
- **Skip Empty Commits**: Only commits when there are changes

<!-- EXCHANGE-RATE-START -->
## 💱 Multi-Currency USD Exchange Rates

**Last Updated:** 2026-06-14  

### Current Rates
- **1 USD = 122.9387 BDT** (Bangladesh Taka)
- **1 USD = 95.2997 INR** (Indian Rupee)
- **1 USD = 6.7817 CNY** (Chinese Yuan)
- **1 USD = 0.8645 EUR** (Euro)
- **1 USD = 1.3982 CAD** (Canadian Dollar)
- **1 USD = 1.4203 AUD** (Australian Dollar)


### 30-Day Trend Charts

#### Bangladesh Taka (BDT)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">122.94</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">122.74</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">122.54</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">122.34</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">122.14</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">121.94</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to BDT - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>

#### Indian Rupee (INR)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">95.30</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">95.10</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">94.90</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">94.70</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">94.50</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">94.30</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to INR - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>

#### Chinese Yuan (CNY)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">6.78</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">6.58</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">6.38</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">6.18</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">5.98</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">5.78</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to CNY - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>

#### Euro (EUR)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">0.86</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">0.66</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">0.46</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">0.26</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">0.06</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">-0.14</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to EUR - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>

#### Canadian Dollar (CAD)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">1.40</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">1.20</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">1.00</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">0.80</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">0.60</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">0.40</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to CAD - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>

#### Australian Dollar (AUD)
<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa; border:1px solid #ddd; border-radius:8px;">
  <defs>
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
  </defs>
  
  <!-- Grid lines -->
  <line x1="50" y1="50" x2="750" y2="50" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#e5e7eb" stroke-width="1"/>
<text x="40" y="54" text-anchor="end" font-size="12" fill="#666">1.42</text>
<text x="40" y="94" text-anchor="end" font-size="12" fill="#666">1.22</text>
<text x="40" y="134" text-anchor="end" font-size="12" fill="#666">1.02</text>
<text x="40" y="174" text-anchor="end" font-size="12" fill="#666">0.82</text>
<text x="40" y="214" text-anchor="end" font-size="12" fill="#666">0.62</text>
<text x="40" y="254" text-anchor="end" font-size="12" fill="#666">0.42</text>
<circle cx="50" cy="50" r="3" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<polyline points="50,50" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">USD to AUD - Last 30 Days Trend</text>
  <text x="400" y="285" text-anchor="middle" font-size="12" fill="#666">Date →</text>
</svg>


### Summary Statistics
| Currency | Latest Rate | Highest | Lowest | Average | Records |
|----------|-------------|---------|--------|---------|---------|
| BDT | 122.9387 | 122.9387 | 122.9387 | 122.9387 | 1 |
| INR | 95.2997 | 95.2997 | 95.2997 | 95.2997 | 1 |
| CNY | 6.7817 | 6.7817 | 6.7817 | 6.7817 | 1 |
| EUR | 0.8645 | 0.8645 | 0.8645 | 0.8645 | 1 |
| CAD | 1.3982 | 1.3982 | 1.3982 | 1.3982 | 1 |
| AUD | 1.4203 | 1.4203 | 1.4203 | 1.4203 | 1 |


**Project Status:** Active ✅

*Data automatically updated daily via GitHub Actions. Supports BDT, INR, CNY, EUR, CAD, AUD.*
<!-- EXCHANGE-RATE-END -->

## Project Structure

```
daily-usd-to-bdt-tracker/
├── README.md                 # Project documentation & live dashboard
├── package.json              # Node.js dependencies and scripts
├── .gitignore                # Git ignore rules
├── update-rate.js            # Main automation script
├── index.html                # GitHub Pages dashboard
├── data/
│   ├── history-bdt.json
│   ├── history-inr.json
│   ├── history-cny.json
│   ├── history-eur.json
│   ├── history-cad.json
│   ├── history-aud.json
│   └── ... (corresponding .csv files)
└── .github/
    └── workflows/
        └── update-rate.yml   # GitHub Actions workflow
```

## Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/daily-usd-to-bdt-tracker.git
   cd daily-usd-to-bdt-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm run update
   ```

## GitHub Actions Setup

The workflow is already configured in `.github/workflows/update-rate.yml`. 

- **Schedule**: Daily at 06:00 UTC (12:00 PM Bangladesh Time)
- **Manual Trigger**: Available via "Run workflow" button
- **Permissions**: `contents: write` for auto-commits

No additional setup required after pushing to GitHub.

## GitHub Pages Setup (Live Dashboard)

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/(root)** folder
4. Click **Save**

Your live dashboard will be available at:  
`https://yourusername.github.io/daily-usd-to-bdt-tracker/`

The `index.html` is automatically generated and updated daily with the latest chart and data.

## Workflow Explanation

1. Checkout repository
2. Setup Node.js 22
3. Install dependencies
4. Execute `update-rate.js`
5. Commit changes (if any) with message "chore: update daily exchange rate"
6. Push to main branch

## Troubleshooting

- **API Issues**: The script has retry logic implicitly via GitHub Actions. Check workflow logs.
- **No Changes**: Commit is skipped if no data changes.
- **Rate Limits**: Free API has generous limits suitable for daily runs.
- **Node Version**: Requires Node.js 22+ (ES Modules support).

## Data Sources

- Exchange Rate API: [open.er-api.com](https://open.er-api.com/v6/latest/USD)
- Updates: Daily

## License

MIT License - Feel free to fork and adapt for your needs!

---

*Built with ❤️ using Node.js and GitHub Actions*