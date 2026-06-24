# Daily Multi-Currency USD Exchange Rate Tracker

[![GitHub Workflow Status](https://github.com/onmicroIT/Daily-Currency-Rate-Tracker/actions/workflows/update-rate.yml/badge.svg)](https://github.com/onmicroIT/Daily-Currency-Rate-Tracker/actions)

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

**Last Updated:** 2026-06-24

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.6192** | 122.9387 | 122.4409 | 122.6973 |
| Indian Rupee | INR | **94.8137** | 95.2997 | 94.4113 | 94.6961 |
| Chinese Yuan | CNY | **6.8004** | 6.8004 | 6.7691 | 6.7818 |
| Euro | EUR | **0.878** | 0.878 | 0.8613 | 0.8688 |
| Canadian Dollar | CAD | **1.4197** | 1.4197 | 1.3982 | 1.4084 |
| Australian Dollar | AUD | **1.4443** | 1.4443 | 1.414 | 1.4236 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.6192** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="120" cy="91.22137404579982" r="4" fill="#3b82f6"/><circle cx="190" cy="113.31860184813291" r="4" fill="#3b82f6"/><circle cx="260" cy="106.24748895138654" r="4" fill="#3b82f6"/><circle cx="330" cy="108.01526717556887" r="4" fill="#3b82f6"/><circle cx="400" cy="99.09602249899268" r="4" fill="#3b82f6"/><circle cx="470" cy="250" r="4" fill="#3b82f6"/><circle cx="540" cy="219.5058256327824" r="4" fill="#3b82f6"/><circle cx="610" cy="219.5058256327824" r="4" fill="#3b82f6"/><circle cx="680" cy="181.77983125753485" r="4" fill="#3b82f6"/><circle cx="750" cy="178.36480514262436" r="4" fill="#3b82f6"/><polyline points="50,50 120,91.22137404579982 190,113.31860184813291 260,106.24748895138654 330,108.01526717556887 400,99.09602249899268 470,250 540,219.5058256327824 610,219.5058256327824 680,181.77983125753485 750,178.36480514262436" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.8137** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="120" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="190" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="260" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="330" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="400" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="470" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="540" cy="250" r="4" fill="#3b82f6"/><circle cx="610" cy="250" r="4" fill="#3b82f6"/><circle cx="680" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="750" cy="159.41017559657854" r="4" fill="#3b82f6"/><polyline points="50,50 120,77.73525438991366 190,184.15128320576258 260,203.53444394416903 330,190.99504727600123 400,249.18955425483887 470,245.52003601980937 540,250 610,250 680,184.08374606033357 750,159.41017559657854" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8004** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="169.48881789137386" r="4" fill="#3b82f6"/><circle cx="120" cy="250" r="4" fill="#3b82f6"/><circle cx="190" cy="232.10862619808498" r="4" fill="#3b82f6"/><circle cx="260" cy="245.52715654951982" r="4" fill="#3b82f6"/><circle cx="330" cy="217.41214057507625" r="4" fill="#3b82f6"/><circle cx="400" cy="157.3482428115015" r="4" fill="#3b82f6"/><circle cx="470" cy="152.23642172524006" r="4" fill="#3b82f6"/><circle cx="540" cy="122.84345047923398" r="4" fill="#3b82f6"/><circle cx="610" cy="122.84345047923398" r="4" fill="#3b82f6"/><circle cx="680" cy="136.26198083066885" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,169.48881789137386 120,250 190,232.10862619808498 260,245.52715654951982 330,217.41214057507625 400,157.3482428115015 470,152.23642172524006 540,122.84345047923398 610,122.84345047923398 680,136.26198083066885 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.878** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="211.67664670658584" r="4" fill="#3b82f6"/><circle cx="120" cy="227.24550898203583" r="4" fill="#3b82f6"/><circle cx="190" cy="238.0239520958084" r="4" fill="#3b82f6"/><circle cx="260" cy="250" r="4" fill="#3b82f6"/><circle cx="330" cy="198.50299401197523" r="4" fill="#3b82f6"/><circle cx="400" cy="124.25149700598762" r="4" fill="#3b82f6"/><circle cx="470" cy="123.05389221556858" r="4" fill="#3b82f6"/><circle cx="540" cy="121.85628742514956" r="4" fill="#3b82f6"/><circle cx="610" cy="121.85628742514956" r="4" fill="#3b82f6"/><circle cx="680" cy="93.11377245509027" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,211.67664670658584 120,227.24550898203583 190,238.0239520958084 260,250 330,198.50299401197523 400,124.25149700598762 470,123.05389221556858 540,121.85628742514956 610,121.85628742514956 680,93.11377245509027 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4197** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="120" cy="249.06976744186056" r="4" fill="#3b82f6"/><circle cx="190" cy="250" r="4" fill="#3b82f6"/><circle cx="260" cy="241.62790697674507" r="4" fill="#3b82f6"/><circle cx="330" cy="185.81395348837253" r="4" fill="#3b82f6"/><circle cx="400" cy="117.90697674418523" r="4" fill="#3b82f6"/><circle cx="470" cy="92.79069767441831" r="4" fill="#3b82f6"/><circle cx="540" cy="94.6511627906972" r="4" fill="#3b82f6"/><circle cx="610" cy="94.6511627906972" r="4" fill="#3b82f6"/><circle cx="680" cy="84.41860465116336" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,250 120,249.06976744186056 190,250 260,241.62790697674507 330,185.81395348837253 400,117.90697674418523 470,92.79069767441831 540,94.6511627906972 610,94.6511627906972 680,84.41860465116336 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4443** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="208.4158415841586" r="4" fill="#3b82f6"/><circle cx="120" cy="240.0990099009897" r="4" fill="#3b82f6"/><circle cx="190" cy="250" r="4" fill="#3b82f6"/><circle cx="260" cy="246.03960396039503" r="4" fill="#3b82f6"/><circle cx="330" cy="213.69636963696328" r="4" fill="#3b82f6"/><circle cx="400" cy="172.11221122112187" r="4" fill="#3b82f6"/><circle cx="470" cy="172.77227722772244" r="4" fill="#3b82f6"/><circle cx="540" cy="173.43234323432307" r="4" fill="#3b82f6"/><circle cx="610" cy="173.43234323432307" r="4" fill="#3b82f6"/><circle cx="680" cy="153.63036303630253" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,208.4158415841586 120,240.0990099009897 190,250 260,246.03960396039503 330,213.69636963696328 400,172.11221122112187 470,172.77227722772244 540,173.43234323432307 610,173.43234323432307 680,153.63036303630253 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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