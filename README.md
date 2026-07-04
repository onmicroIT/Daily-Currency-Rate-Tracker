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

**Last Updated:** 2026-07-04

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.3291** | 123.3291 | 122.4409 | 122.8919 |
| Indian Rupee | INR | **95.3275** | 95.3879 | 94.4113 | 94.7336 |
| Chinese Yuan | CNY | **6.7907** | 6.8177 | 6.7691 | 6.7923 |
| Euro | EUR | **0.8743** | 0.8808 | 0.8613 | 0.873 |
| Canadian Dollar | CAD | **1.4197** | 1.4231 | 1.3982 | 1.414 |
| Australian Dollar | AUD | **1.4419** | 1.4519 | 1.414 | 1.4356 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.3291** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="85" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="120" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="155" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="190" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="225" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="260" cy="250" r="4" fill="#3b82f6"/><circle cx="295" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="330" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="365" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="400" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="470" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="505" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="540" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="575" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="610" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="645" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="680" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="715" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 85,161.0110335510012 120,173.39563161450198 155,169.43256023418184 190,170.42332807925948 225,165.42445395181116 260,250 295,232.90925467237008 330,232.90925467237008 365,211.76536816032524 400,209.85138482323626 435.00000000000006,128.60842152668178 470,119.82661562710926 505,130.22967800044836 540,127.77527583877479 575,125.95136230578697 610,93.66133753659082 645,77.26863319072253 680,85.73519477595056 715,63.37536590857841 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.3275** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="68.0626663936105" r="4" fill="#3b82f6"/><circle cx="85" cy="93.2930575465895" r="4" fill="#3b82f6"/><circle cx="120" cy="190.09830022527083" r="4" fill="#3b82f6"/><circle cx="155" cy="207.73090313331946" r="4" fill="#3b82f6"/><circle cx="190" cy="196.32398115912298" r="4" fill="#3b82f6"/><circle cx="225" cy="249.26274831046368" r="4" fill="#3b82f6"/><circle cx="260" cy="245.92463649395725" r="4" fill="#3b82f6"/><circle cx="295" cy="250" r="4" fill="#3b82f6"/><circle cx="330" cy="250" r="4" fill="#3b82f6"/><circle cx="365" cy="190.03686258447712" r="4" fill="#3b82f6"/><circle cx="400" cy="167.59164448085232" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="200.54269916035204" r="4" fill="#3b82f6"/><circle cx="470" cy="239.45320499692727" r="4" fill="#3b82f6"/><circle cx="505" cy="241.23489657997143" r="4" fill="#3b82f6"/><circle cx="540" cy="244.61396682367274" r="4" fill="#3b82f6"/><circle cx="575" cy="233.8419004710211" r="4" fill="#3b82f6"/><circle cx="610" cy="210.94613966823553" r="4" fill="#3b82f6"/><circle cx="645" cy="192.24861765308313" r="4" fill="#3b82f6"/><circle cx="680" cy="80.16588163014552" r="4" fill="#3b82f6"/><circle cx="715" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="62.369445013311704" r="4" fill="#3b82f6"/><polyline points="50,68.0626663936105 85,93.2930575465895 120,190.09830022527083 155,207.73090313331946 190,196.32398115912298 225,249.26274831046368 260,245.92463649395725 295,250 330,250 365,190.03686258447712 400,167.59164448085232 435.00000000000006,200.54269916035204 470,239.45320499692727 505,241.23489657997143 540,244.61396682367274 575,233.8419004710211 610,210.94613966823553 645,192.24861765308313 680,80.16588163014552 715,50 750,62.369445013311704" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7907** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="85" cy="250" r="4" fill="#3b82f6"/><circle cx="120" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="155" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="190" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="225" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="260" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="295" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="330" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="365" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="400" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="50" r="4" fill="#3b82f6"/><circle cx="470" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="505" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="540" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="575" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="610" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="645" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="680" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="715" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="750" cy="161.1111111111107" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 85,250 120,238.4773662551454 155,247.11934156378544 190,229.01234567901028 225,190.32921810699656 260,187.03703703703812 295,168.10699588477516 330,168.10699588477516 365,176.7489711934152 400,121.19341563786168 435.00000000000006,50 470,87.448559670782 505,91.56378600823192 540,76.7489711934152 575,107.61316872428031 610,104.73251028806574 645,137.24279835391008 680,118.31275720164712 715,138.0658436214015 750,161.1111111111107" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8743** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="85" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="120" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="155" cy="250" r="4" fill="#3b82f6"/><circle cx="190" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="225" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="260" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="295" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="330" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="365" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="400" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="50" r="4" fill="#3b82f6"/><circle cx="470" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="505" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="540" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="575" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="610" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="645" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="680" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="715" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="750" cy="116.66666666666706" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 85,230.51282051282044 120,239.74358974358978 155,250 190,205.89743589743523 225,142.30769230769204 260,141.28205128205113 295,140.25641025641022 330,140.25641025641022 365,115.64102564102615 400,78.71794871794887 435.00000000000006,50 470,57.1794871794875 505,80.76923076923069 540,78.71794871794887 575,76.66666666666704 610,99.23076923076931 645,93.07692307692272 680,75.64102564102615 715,105.38461538461591 750,116.66666666666706" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4197** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="85" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="120" cy="250" r="4" fill="#3b82f6"/><circle cx="155" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="190" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="225" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="260" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="295" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="330" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="365" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="400" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="50" r="4" fill="#3b82f6"/><circle cx="470" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="505" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="540" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="575" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="610" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="645" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="680" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="715" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="750" cy="77.30923694779182" r="4" fill="#3b82f6"/><polyline points="50,250 85,249.19678714859447 120,250 155,242.77108433735017 190,194.57831325301262 225,135.94377510040133 260,114.25702811245006 295,115.86345381526112 330,115.86345381526112 365,107.02811244980023 400,77.30923694779182 435.00000000000006,50 470,69.27710843373467 505,83.73493975903611 540,85.34136546184718 575,83.73493975903611 610,71.68674698795127 645,68.47389558232912 680,63.65461847389591 715,84.53815261044164 750,77.30923694779182" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4419** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="85" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="120" cy="250" r="4" fill="#3b82f6"/><circle cx="155" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="190" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="225" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="260" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="295" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="330" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="365" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="400" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="435.00000000000006" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="470" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="505" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="540" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="575" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="610" cy="50" r="4" fill="#3b82f6"/><circle cx="645" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="680" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="715" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="750" cy="102.77044854881265" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 85,242.0844327176778 120,250 155,246.83377308707043 190,220.97625329815276 225,187.73087071240096 260,188.25857519788903 295,188.7862796833771 330,188.7862796833771 365,172.95514511873273 400,90.10554089709785 435.00000000000006,60.55408970976253 470,66.35883905013128 505,62.13720316622673 540,62.6649076517148 575,60.02638522427446 610,50 645,66.88654353561935 680,54.74934036939261 715,75.85751978891767 750,102.77044854881265" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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