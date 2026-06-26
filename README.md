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

**Last Updated:** 2026-06-26

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.019** | 123.019 | 122.4409 | 122.7438 |
| Indian Rupee | INR | **94.4628** | 95.2997 | 94.4113 | 94.6749 |
| Chinese Yuan | CNY | **6.8086** | 6.8177 | 6.7691 | 6.7866 |
| Euro | EUR | **0.8801** | 0.8808 | 0.8613 | 0.8706 |
| Canadian Dollar | CAD | **1.4207** | 1.4231 | 1.3982 | 1.4104 |
| Australian Dollar | AUD | **1.4488** | 1.4499 | 1.414 | 1.4276 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.019** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="77.78066078533381" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="113.276249783775" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="132.30409963674379" r="4" fill="#3b82f6"/><circle cx="225" cy="126.21518768379396" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="127.73741567202772" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="120.05708354955834" r="4" fill="#3b82f6"/><circle cx="400" cy="250" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="575" cy="191.25583809029814" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="188.31517038574458" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="63.49247535028578" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,77.78066078533381 108.33333333333333,113.276249783775 166.66666666666666,132.30409963674379 225,126.21518768379396 283.3333333333333,127.73741567202772 341.6666666666667,120.05708354955834 400,250 458.33333333333337,223.7415672029049 516.6666666666666,223.7415672029049 575,191.25583809029814 633.3333333333334,188.31517038574458 691.6666666666666,63.49247535028578 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4628** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="225" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="400" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="250" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="575" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="750" cy="238.40612336785142" r="4" fill="#3b82f6"/><polyline points="50,50 108.33333333333333,77.73525438991366 166.66666666666666,184.15128320576258 225,203.53444394416903 283.3333333333333,190.99504727600123 341.6666666666667,249.18955425483887 400,245.52003601980937 458.33333333333337,250 516.6666666666666,250 575,184.08374606033357 633.3333333333334,159.41017559657854 691.6666666666666,195.63259792886066 750,238.40612336785142" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8086** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="225" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="400" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="575" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="87.448559670782" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 108.33333333333333,250 166.66666666666666,238.4773662551454 225,247.11934156378544 283.3333333333333,229.01234567901028 341.6666666666667,190.32921810699656 400,187.03703703703812 458.33333333333337,168.10699588477516 516.6666666666666,168.10699588477516 575,176.7489711934152 633.3333333333334,121.19341563786168 691.6666666666666,50 750,87.448559670782" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8801** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="225" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="400" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="575" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="57.1794871794875" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 108.33333333333333,230.51282051282044 166.66666666666666,239.74358974358978 225,250 283.3333333333333,205.89743589743523 341.6666666666667,142.30769230769204 400,141.28205128205113 458.33333333333337,140.25641025641022 516.6666666666666,140.25641025641022 575,115.64102564102615 633.3333333333334,78.71794871794887 691.6666666666666,50 750,57.1794871794875" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4207** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="225" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="400" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="575" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="69.27710843373467" r="4" fill="#3b82f6"/><polyline points="50,250 108.33333333333333,249.19678714859447 166.66666666666666,250 225,242.77108433735017 283.3333333333333,194.57831325301262 341.6666666666667,135.94377510040133 400,114.25702811245006 458.33333333333337,115.86345381526112 516.6666666666666,115.86345381526112 575,107.02811244980023 633.3333333333334,77.30923694779182 691.6666666666666,50 750,69.27710843373467" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4488** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="214.9025069637885" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="241.6434540389969" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="225" cy="246.657381615598" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="219.35933147632284" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="184.26183844011132" r="4" fill="#3b82f6"/><circle cx="400" cy="184.8189415041781" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="575" cy="168.66295264623872" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="81.19777158774397" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="56.128133704734694" r="4" fill="#3b82f6"/><polyline points="50,214.9025069637885 108.33333333333333,241.6434540389969 166.66666666666666,250 225,246.657381615598 283.3333333333333,219.35933147632284 341.6666666666667,184.26183844011132 400,184.8189415041781 458.33333333333337,185.3760445682449 516.6666666666666,185.3760445682449 575,168.66295264623872 633.3333333333334,81.19777158774397 691.6666666666666,50 750,56.128133704734694" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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