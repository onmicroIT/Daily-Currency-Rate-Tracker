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

**Last Updated:** 2026-07-05

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.3176** | 123.3291 | 122.4409 | 122.9112 |
| Indian Rupee | INR | **95.3117** | 95.3879 | 94.4113 | 94.7599 |
| Chinese Yuan | CNY | **6.7953** | 6.8177 | 6.7691 | 6.7924 |
| Euro | EUR | **0.8743** | 0.8808 | 0.8613 | 0.873 |
| Canadian Dollar | CAD | **1.4196** | 1.4231 | 1.3982 | 1.4142 |
| Australian Dollar | AUD | **1.4426** | 1.4519 | 1.414 | 1.4359 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.3176** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="150" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="250" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="350" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="450" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="550" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="650" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="52.58950686782214" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 83.33333333333333,161.0110335510012 116.66666666666666,173.39563161450198 150,169.43256023418184 183.33333333333331,170.42332807925948 216.66666666666666,165.42445395181116 250,250 283.3333333333333,232.90925467237008 316.66666666666663,232.90925467237008 350,211.76536816032524 383.3333333333333,209.85138482323626 416.6666666666667,128.60842152668178 450,119.82661562710926 483.33333333333337,130.22967800044836 516.6666666666666,127.77527583877479 550,125.95136230578697 583.3333333333333,93.66133753659082 616.6666666666666,77.26863319072253 650,85.73519477595056 683.3333333333334,63.37536590857841 716.6666666666666,50 750,52.58950686782214" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.3117** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="68.0626663936105" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="93.2930575465895" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="190.09830022527083" r="4" fill="#3b82f6"/><circle cx="150" cy="207.73090313331946" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="196.32398115912298" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="249.26274831046368" r="4" fill="#3b82f6"/><circle cx="250" cy="245.92463649395725" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="250" r="4" fill="#3b82f6"/><circle cx="350" cy="190.03686258447712" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="167.59164448085232" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="200.54269916035204" r="4" fill="#3b82f6"/><circle cx="450" cy="239.45320499692727" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="241.23489657997143" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="244.61396682367274" r="4" fill="#3b82f6"/><circle cx="550" cy="233.8419004710211" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="210.94613966823553" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="192.24861765308313" r="4" fill="#3b82f6"/><circle cx="650" cy="80.16588163014552" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="50" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="62.369445013311704" r="4" fill="#3b82f6"/><circle cx="750" cy="65.60516076182668" r="4" fill="#3b82f6"/><polyline points="50,68.0626663936105 83.33333333333333,93.2930575465895 116.66666666666666,190.09830022527083 150,207.73090313331946 183.33333333333331,196.32398115912298 216.66666666666666,249.26274831046368 250,245.92463649395725 283.3333333333333,250 316.66666666666663,250 350,190.03686258447712 383.3333333333333,167.59164448085232 416.6666666666667,200.54269916035204 450,239.45320499692727 483.33333333333337,241.23489657997143 516.6666666666666,244.61396682367274 550,233.8419004710211 583.3333333333333,210.94613966823553 616.6666666666666,192.24861765308313 650,80.16588163014552 683.3333333333334,50 716.6666666666666,62.369445013311704 750,65.60516076182668" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7953** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="150" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="250" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="350" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="50" r="4" fill="#3b82f6"/><circle cx="450" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="550" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="650" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="750" cy="142.18106995884773" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 83.33333333333333,250 116.66666666666666,238.4773662551454 150,247.11934156378544 183.33333333333331,229.01234567901028 216.66666666666666,190.32921810699656 250,187.03703703703812 283.3333333333333,168.10699588477516 316.66666666666663,168.10699588477516 350,176.7489711934152 383.3333333333333,121.19341563786168 416.6666666666667,50 450,87.448559670782 483.33333333333337,91.56378600823192 516.6666666666666,76.7489711934152 550,107.61316872428031 583.3333333333333,104.73251028806574 616.6666666666666,137.24279835391008 650,118.31275720164712 683.3333333333334,138.0658436214015 716.6666666666666,161.1111111111107 750,142.18106995884773" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8743** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="150" cy="250" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="250" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="350" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="50" r="4" fill="#3b82f6"/><circle cx="450" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="550" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="650" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="750" cy="116.66666666666706" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 83.33333333333333,230.51282051282044 116.66666666666666,239.74358974358978 150,250 183.33333333333331,205.89743589743523 216.66666666666666,142.30769230769204 250,141.28205128205113 283.3333333333333,140.25641025641022 316.66666666666663,140.25641025641022 350,115.64102564102615 383.3333333333333,78.71794871794887 416.6666666666667,50 450,57.1794871794875 483.33333333333337,80.76923076923069 516.6666666666666,78.71794871794887 550,76.66666666666704 583.3333333333333,99.23076923076931 616.6666666666666,93.07692307692272 650,75.64102564102615 683.3333333333334,105.38461538461591 716.6666666666666,116.66666666666706 750,116.66666666666706" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4196** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="150" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="250" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="350" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="50" r="4" fill="#3b82f6"/><circle cx="450" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="550" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="650" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="750" cy="78.11244979919735" r="4" fill="#3b82f6"/><polyline points="50,250 83.33333333333333,249.19678714859447 116.66666666666666,250 150,242.77108433735017 183.33333333333331,194.57831325301262 216.66666666666666,135.94377510040133 250,114.25702811245006 283.3333333333333,115.86345381526112 316.66666666666663,115.86345381526112 350,107.02811244980023 383.3333333333333,77.30923694779182 416.6666666666667,50 450,69.27710843373467 483.33333333333337,83.73493975903611 516.6666666666666,85.34136546184718 550,83.73493975903611 583.3333333333333,71.68674698795127 616.6666666666666,68.47389558232912 650,63.65461847389591 683.3333333333334,84.53815261044164 716.6666666666666,77.30923694779182 750,78.11244979919735" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4426** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="83.33333333333333" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="116.66666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="150" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="183.33333333333331" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="216.66666666666666" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="250" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="316.66666666666663" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="350" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="383.3333333333333" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="416.6666666666667" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="450" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="483.33333333333337" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="550" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="583.3333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="616.6666666666666" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="650" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="683.3333333333334" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="716.6666666666666" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="750" cy="99.076517150395" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 83.33333333333333,242.0844327176778 116.66666666666666,250 150,246.83377308707043 183.33333333333331,220.97625329815276 216.66666666666666,187.73087071240096 250,188.25857519788903 283.3333333333333,188.7862796833771 316.66666666666663,188.7862796833771 350,172.95514511873273 383.3333333333333,90.10554089709785 416.6666666666667,60.55408970976253 450,66.35883905013128 483.33333333333337,62.13720316622673 516.6666666666666,62.6649076517148 550,60.02638522427446 583.3333333333333,50 616.6666666666666,66.88654353561935 650,54.74934036939261 683.3333333333334,75.85751978891767 716.6666666666666,102.77044854881265 750,99.076517150395" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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