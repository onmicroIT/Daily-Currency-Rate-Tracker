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

**Last Updated:** 2026-06-20

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.4409** | 122.9387 | 122.4409 | 122.7723 |
| Indian Rupee | INR | **94.4312** | 95.2997 | 94.4149 | 94.7596 |
| Chinese Yuan | CNY | **6.7844** | 6.7844 | 6.7691 | 6.7764 |
| Euro | EUR | **0.8719** | 0.8719 | 0.8613 | 0.8658 |
| Canadian Dollar | CAD | **1.4151** | 1.4151 | 1.3982 | 1.4038 |
| Australian Dollar | AUD | **1.4257** | 1.4258 | 1.414 | 1.4193 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.4409** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="91.22137404579982" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="113.31860184813291" r="4" fill="#3b82f6"/><circle cx="400" cy="106.24748895138654" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="108.01526717556887" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="99.09602249899268" r="4" fill="#3b82f6"/><circle cx="750" cy="250" r="4" fill="#3b82f6"/><polyline points="50,50 166.66666666666666,91.22137404579982 283.3333333333333,113.31860184813291 400,106.24748895138654 516.6666666666666,108.01526717556887 633.3333333333334,99.09602249899268 750,250" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4312** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="77.84810126582218" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="184.69710669077787" r="4" fill="#3b82f6"/><circle cx="400" cy="204.15913200723404" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="191.5687160940329" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="246.31555153707026" r="4" fill="#3b82f6"/><polyline points="50,50 166.66666666666666,77.84810126582218 283.3333333333333,184.69710669077787 400,204.15913200723404 516.6666666666666,191.5687160940329 633.3333333333334,250 750,246.31555153707026" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7844** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="85.29411764705814" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="213.39869281046126" r="4" fill="#3b82f6"/><circle cx="400" cy="240.84967320261242" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="183.3333333333256" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="60.45751633986822" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,85.29411764705814 166.66666666666666,250 283.3333333333333,213.39869281046126 400,240.84967320261242 516.6666666666666,183.3333333333256 633.3333333333334,60.45751633986822 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8719** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="189.62264150943253" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="214.15094339622635" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="231.1320754716982" r="4" fill="#3b82f6"/><circle cx="400" cy="250" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="168.86792452830076" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="51.88679245282997" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,189.62264150943253 166.66666666666666,214.15094339622635 283.3333333333333,231.1320754716982 400,250 516.6666666666666,168.86792452830076 633.3333333333334,51.88679245282997 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4151** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="248.8165680473374" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="400" cy="239.3491124260366" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="168.3431952662729" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="81.95266272189276" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,250 166.66666666666666,248.8165680473374 283.3333333333333,250 400,239.3491124260366 516.6666666666666,168.3431952662729 633.3333333333334,81.95266272189276 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4257** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="143.2203389830516" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="224.57627118643978" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="400" cy="239.83050847457366" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="156.77966101694838" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="51.694915254237095" r="4" fill="#3b82f6"/><polyline points="50,143.2203389830516 166.66666666666666,224.57627118643978 283.3333333333333,250 400,239.83050847457366 516.6666666666666,156.77966101694838 633.3333333333334,50 750,51.694915254237095" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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