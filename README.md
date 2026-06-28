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

**Last Updated:** 2026-06-28

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.9837** | 123.019 | 122.4409 | 122.775 |
| Indian Rupee | INR | **94.4376** | 95.2997 | 94.4113 | 94.6443 |
| Chinese Yuan | CNY | **6.8112** | 6.8177 | 6.7691 | 6.7897 |
| Euro | EUR | **0.878** | 0.8808 | 0.8613 | 0.8716 |
| Canadian Dollar | CAD | **1.4187** | 1.4231 | 1.3982 | 1.4116 |
| Australian Dollar | AUD | **1.4495** | 1.4499 | 1.414 | 1.4305 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.9837** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="77.78066078533381" r="4" fill="#3b82f6"/><circle cx="100" cy="113.276249783775" r="4" fill="#3b82f6"/><circle cx="150" cy="132.30409963674379" r="4" fill="#3b82f6"/><circle cx="200" cy="126.21518768379396" r="4" fill="#3b82f6"/><circle cx="250" cy="127.73741567202772" r="4" fill="#3b82f6"/><circle cx="300" cy="120.05708354955834" r="4" fill="#3b82f6"/><circle cx="350" cy="250" r="4" fill="#3b82f6"/><circle cx="400" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="450" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="191.25583809029814" r="4" fill="#3b82f6"/><circle cx="550" cy="188.31517038574458" r="4" fill="#3b82f6"/><circle cx="600" cy="63.49247535028578" r="4" fill="#3b82f6"/><circle cx="650" cy="50" r="4" fill="#3b82f6"/><circle cx="700" cy="65.9833938764914" r="4" fill="#3b82f6"/><circle cx="750" cy="62.21241999654252" r="4" fill="#3b82f6"/><polyline points="50,77.78066078533381 100,113.276249783775 150,132.30409963674379 200,126.21518768379396 250,127.73741567202772 300,120.05708354955834 350,250 400,223.7415672029049 450,223.7415672029049 500.00000000000006,191.25583809029814 550,188.31517038574458 600,63.49247535028578 650,50 700,65.9833938764914 750,62.21241999654252" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4376** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="100" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="150" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="200" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="250" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="300" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="350" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="400" cy="250" r="4" fill="#3b82f6"/><circle cx="450" cy="250" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="550" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="600" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="650" cy="238.40612336785142" r="4" fill="#3b82f6"/><circle cx="700" cy="240.36470058532205" r="4" fill="#3b82f6"/><circle cx="750" cy="244.07924358396983" r="4" fill="#3b82f6"/><polyline points="50,50 100,77.73525438991366 150,184.15128320576258 200,203.53444394416903 250,190.99504727600123 300,249.18955425483887 350,245.52003601980937 400,250 450,250 500.00000000000006,184.08374606033357 550,159.41017559657854 600,195.63259792886066 650,238.40612336785142 700,240.36470058532205 750,244.07924358396983" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8112** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="100" cy="250" r="4" fill="#3b82f6"/><circle cx="150" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="200" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="250" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="300" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="350" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="400" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="450" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="550" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="600" cy="50" r="4" fill="#3b82f6"/><circle cx="650" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="700" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="750" cy="76.7489711934152" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 100,250 150,238.4773662551454 200,247.11934156378544 250,229.01234567901028 300,190.32921810699656 350,187.03703703703812 400,168.10699588477516 450,168.10699588477516 500.00000000000006,176.7489711934152 550,121.19341563786168 600,50 650,87.448559670782 700,91.56378600823192 750,76.7489711934152" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.878** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="100" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="150" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="200" cy="250" r="4" fill="#3b82f6"/><circle cx="250" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="300" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="350" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="400" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="450" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="550" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="600" cy="50" r="4" fill="#3b82f6"/><circle cx="650" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="700" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="750" cy="78.71794871794887" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 100,230.51282051282044 150,239.74358974358978 200,250 250,205.89743589743523 300,142.30769230769204 350,141.28205128205113 400,140.25641025641022 450,140.25641025641022 500.00000000000006,115.64102564102615 550,78.71794871794887 600,50 650,57.1794871794875 700,80.76923076923069 750,78.71794871794887" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4187** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="100" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="150" cy="250" r="4" fill="#3b82f6"/><circle cx="200" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="250" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="300" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="350" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="400" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="450" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="550" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="600" cy="50" r="4" fill="#3b82f6"/><circle cx="650" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="700" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="750" cy="85.34136546184718" r="4" fill="#3b82f6"/><polyline points="50,250 100,249.19678714859447 150,250 200,242.77108433735017 250,194.57831325301262 300,135.94377510040133 350,114.25702811245006 400,115.86345381526112 450,115.86345381526112 500.00000000000006,107.02811244980023 550,77.30923694779182 600,50 650,69.27710843373467 700,83.73493975903611 750,85.34136546184718" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4495** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="214.9025069637885" r="4" fill="#3b82f6"/><circle cx="100" cy="241.6434540389969" r="4" fill="#3b82f6"/><circle cx="150" cy="250" r="4" fill="#3b82f6"/><circle cx="200" cy="246.657381615598" r="4" fill="#3b82f6"/><circle cx="250" cy="219.35933147632284" r="4" fill="#3b82f6"/><circle cx="300" cy="184.26183844011132" r="4" fill="#3b82f6"/><circle cx="350" cy="184.8189415041781" r="4" fill="#3b82f6"/><circle cx="400" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="450" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="168.66295264623872" r="4" fill="#3b82f6"/><circle cx="550" cy="81.19777158774397" r="4" fill="#3b82f6"/><circle cx="600" cy="50" r="4" fill="#3b82f6"/><circle cx="650" cy="56.128133704734694" r="4" fill="#3b82f6"/><circle cx="700" cy="51.67130919220037" r="4" fill="#3b82f6"/><circle cx="750" cy="52.22841225626716" r="4" fill="#3b82f6"/><polyline points="50,214.9025069637885 100,241.6434540389969 150,250 200,246.657381615598 250,219.35933147632284 300,184.26183844011132 350,184.8189415041781 400,185.3760445682449 450,185.3760445682449 500.00000000000006,168.66295264623872 550,81.19777158774397 600,50 650,56.128133704734694 700,51.67130919220037 750,52.22841225626716" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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