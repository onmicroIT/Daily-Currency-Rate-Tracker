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

**Last Updated:** 2026-06-17

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.7987** | 122.9387 | 122.7811 | 122.8387 |
| Indian Rupee | INR | **94.6177** | 95.2997 | 94.6177 | 94.9494 |
| Chinese Yuan | CNY | **6.7698** | 6.7817 | 6.7691 | 6.7731 |
| Euro | EUR | **0.8613** | 0.8645 | 0.8613 | 0.8628 |
| Canadian Dollar | CAD | **1.3991** | 1.3991 | 1.3982 | 1.3984 |
| Australian Dollar | AUD | **1.4146** | 1.4203 | 1.414 | 1.4161 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.7987** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="180.2030456852715" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="227.66497461928762" r="4" fill="#3b82f6"/><polyline points="50,50 283.3333333333333,180.2030456852715 516.6666666666666,250 750,227.66497461928762" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.6177** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="86.12903225806355" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="224.75073313782946" r="4" fill="#3b82f6"/><circle cx="750" cy="250" r="4" fill="#3b82f6"/><polyline points="50,50 283.3333333333333,86.12903225806355 516.6666666666666,224.75073313782946 750,250" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7698** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="205.55555555556026" r="4" fill="#3b82f6"/><circle cx="750" cy="238.88888888888653" r="4" fill="#3b82f6"/><polyline points="50,50 283.3333333333333,250 516.6666666666666,205.55555555556026 750,238.88888888888653" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8613** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="131.25000000000261" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="187.50000000000173" r="4" fill="#3b82f6"/><circle cx="750" cy="250" r="4" fill="#3b82f6"/><polyline points="50,50 283.3333333333333,131.25000000000261 516.6666666666666,187.50000000000173 750,250" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.3991** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="227.77777777777777" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,250 283.3333333333333,227.77777777777777 516.6666666666666,250 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4146** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="202.38095238095036" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="230.9523809523759" r="4" fill="#3b82f6"/><polyline points="50,50 283.3333333333333,202.38095238095036 516.6666666666666,250 750,230.9523809523759" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

**Project Status:** Active ✅

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