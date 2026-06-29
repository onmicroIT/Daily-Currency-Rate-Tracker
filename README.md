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

**Last Updated:** 2026-06-29

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.9918** | 123.019 | 122.4409 | 122.7886 |
| Indian Rupee | INR | **94.4902** | 95.2997 | 94.4113 | 94.6347 |
| Chinese Yuan | CNY | **6.8037** | 6.8177 | 6.7691 | 6.7905 |
| Euro | EUR | **0.8782** | 0.8808 | 0.8613 | 0.872 |
| Canadian Dollar | CAD | **1.4189** | 1.4231 | 1.3982 | 1.412 |
| Australian Dollar | AUD | **1.45** | 1.45 | 1.414 | 1.4317 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.9918** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="77.78066078533381" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="113.276249783775" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="132.30409963674379" r="4" fill="#3b82f6"/><circle cx="190" cy="126.21518768379396" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="127.73741567202772" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="120.05708354955834" r="4" fill="#3b82f6"/><circle cx="330" cy="250" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="470" cy="191.25583809029814" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="188.31517038574458" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="63.49247535028578" r="4" fill="#3b82f6"/><circle cx="610" cy="50" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="65.9833938764914" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="62.21241999654252" r="4" fill="#3b82f6"/><circle cx="750" cy="59.41013665456059" r="4" fill="#3b82f6"/><polyline points="50,77.78066078533381 96.66666666666666,113.276249783775 143.33333333333331,132.30409963674379 190,126.21518768379396 236.66666666666666,127.73741567202772 283.3333333333333,120.05708354955834 330,250 376.6666666666667,223.7415672029049 423.3333333333333,223.7415672029049 470,191.25583809029814 516.6666666666666,188.31517038574458 563.3333333333333,63.49247535028578 610,50 656.6666666666667,65.9833938764914 703.3333333333334,62.21241999654252 750,59.41013665456059" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4902** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="190" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="330" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="250" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="470" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="610" cy="238.40612336785142" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="240.36470058532205" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="244.07924358396983" r="4" fill="#3b82f6"/><circle cx="750" cy="232.23773075191266" r="4" fill="#3b82f6"/><polyline points="50,50 96.66666666666666,77.73525438991366 143.33333333333331,184.15128320576258 190,203.53444394416903 236.66666666666666,190.99504727600123 283.3333333333333,249.18955425483887 330,245.52003601980937 376.6666666666667,250 423.3333333333333,250 470,184.08374606033357 516.6666666666666,159.41017559657854 563.3333333333333,195.63259792886066 610,238.40612336785142 656.6666666666667,240.36470058532205 703.3333333333334,244.07924358396983 750,232.23773075191266" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8037** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="190" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="330" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="470" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="610" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="750" cy="107.61316872428031" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 96.66666666666666,250 143.33333333333331,238.4773662551454 190,247.11934156378544 236.66666666666666,229.01234567901028 283.3333333333333,190.32921810699656 330,187.03703703703812 376.6666666666667,168.10699588477516 423.3333333333333,168.10699588477516 470,176.7489711934152 516.6666666666666,121.19341563786168 563.3333333333333,50 610,87.448559670782 656.6666666666667,91.56378600823192 703.3333333333334,76.7489711934152 750,107.61316872428031" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8782** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="190" cy="250" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="330" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="470" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="610" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="750" cy="76.66666666666704" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 96.66666666666666,230.51282051282044 143.33333333333331,239.74358974358978 190,250 236.66666666666666,205.89743589743523 283.3333333333333,142.30769230769204 330,141.28205128205113 376.6666666666667,140.25641025641022 423.3333333333333,140.25641025641022 470,115.64102564102615 516.6666666666666,78.71794871794887 563.3333333333333,50 610,57.1794871794875 656.6666666666667,80.76923076923069 703.3333333333334,78.71794871794887 750,76.66666666666704" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4189** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="250" r="4" fill="#3b82f6"/><circle cx="190" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="330" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="470" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="610" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="750" cy="83.73493975903611" r="4" fill="#3b82f6"/><polyline points="50,250 96.66666666666666,249.19678714859447 143.33333333333331,250 190,242.77108433735017 236.66666666666666,194.57831325301262 283.3333333333333,135.94377510040133 330,114.25702811245006 376.6666666666667,115.86345381526112 423.3333333333333,115.86345381526112 470,107.02811244980023 516.6666666666666,77.30923694779182 563.3333333333333,50 610,69.27710843373467 656.6666666666667,83.73493975903611 703.3333333333334,85.34136546184718 750,83.73493975903611" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.45** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="215.0000000000002" r="4" fill="#3b82f6"/><circle cx="96.66666666666666" cy="241.66666666666637" r="4" fill="#3b82f6"/><circle cx="143.33333333333331" cy="250" r="4" fill="#3b82f6"/><circle cx="190" cy="246.6666666666658" r="4" fill="#3b82f6"/><circle cx="236.66666666666666" cy="219.44444444444414" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="184.44444444444431" r="4" fill="#3b82f6"/><circle cx="330" cy="184.9999999999998" r="4" fill="#3b82f6"/><circle cx="376.6666666666667" cy="185.55555555555532" r="4" fill="#3b82f6"/><circle cx="423.3333333333333" cy="185.55555555555532" r="4" fill="#3b82f6"/><circle cx="470" cy="168.888888888888" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="81.66666666666686" r="4" fill="#3b82f6"/><circle cx="563.3333333333333" cy="50.55555555555549" r="4" fill="#3b82f6"/><circle cx="610" cy="56.666666666665925" r="4" fill="#3b82f6"/><circle cx="656.6666666666667" cy="52.22222222222197" r="4" fill="#3b82f6"/><circle cx="703.3333333333334" cy="52.77777777777747" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,215.0000000000002 96.66666666666666,241.66666666666637 143.33333333333331,250 190,246.6666666666658 236.66666666666666,219.44444444444414 283.3333333333333,184.44444444444431 330,184.9999999999998 376.6666666666667,185.55555555555532 423.3333333333333,185.55555555555532 470,168.888888888888 516.6666666666666,81.66666666666686 563.3333333333333,50.55555555555549 610,56.666666666665925 656.6666666666667,52.22222222222197 703.3333333333334,52.77777777777747 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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