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

**Last Updated:** 2026-07-09

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.3253** | 123.3291 | 122.4409 | 122.9638 |
| Indian Rupee | INR | **95.6046** | 95.6046 | 94.4113 | 94.8524 |
| Chinese Yuan | CNY | **6.8102** | 6.8177 | 6.7691 | 6.7936 |
| Euro | EUR | **0.8761** | 0.8808 | 0.8613 | 0.8734 |
| Canadian Dollar | CAD | **1.4173** | 1.4231 | 1.3982 | 1.4151 |
| Australian Dollar | AUD | **1.4427** | 1.4519 | 1.414 | 1.4368 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.3253** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="78" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="106" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="134" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="162" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="190" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="218" cy="250" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="274" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="302" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="330" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="358" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="386" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="414" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="470" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="498" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="526" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="554" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="582" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="610" cy="50" r="4" fill="#3b82f6"/><circle cx="638" cy="52.58950686782214" r="4" fill="#3b82f6"/><circle cx="666" cy="80.19590182391444" r="4" fill="#3b82f6"/><circle cx="694" cy="62.24949335735223" r="4" fill="#3b82f6"/><circle cx="722" cy="75.1970276964629" r="4" fill="#3b82f6"/><circle cx="750" cy="50.85566313893228" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 78,161.0110335510012 106,173.39563161450198 134,169.43256023418184 162,170.42332807925948 190,165.42445395181116 218,250 246.00000000000003,232.90925467237008 274,232.90925467237008 302,211.76536816032524 330,209.85138482323626 358,128.60842152668178 386,119.82661562710926 414,130.22967800044836 442.00000000000006,127.77527583877479 470,125.95136230578697 498,93.66133753659082 526,77.26863319072253 554,85.73519477595056 582,63.37536590857841 610,50 638,52.58950686782214 666,80.19590182391444 694,62.24949335735223 722,75.1970276964629 750,50.85566313893228" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.6046** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="101.10198608899715" r="4" fill="#3b82f6"/><circle cx="78" cy="121.75060755887" r="4" fill="#3b82f6"/><circle cx="106" cy="200.97628425374975" r="4" fill="#3b82f6"/><circle cx="134" cy="215.40685494008198" r="4" fill="#3b82f6"/><circle cx="162" cy="206.07139864241984" r="4" fill="#3b82f6"/><circle cx="190" cy="249.39663119081442" r="4" fill="#3b82f6"/><circle cx="218" cy="246.6647113047839" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="250" r="4" fill="#3b82f6"/><circle cx="274" cy="250" r="4" fill="#3b82f6"/><circle cx="302" cy="200.92600351965174" r="4" fill="#3b82f6"/><circle cx="330" cy="182.55677532892022" r="4" fill="#3b82f6"/><circle cx="358" cy="209.52400905053204" r="4" fill="#3b82f6"/><circle cx="386" cy="241.36847397971943" r="4" fill="#3b82f6"/><circle cx="414" cy="242.82661526858303" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="245.5920556440114" r="4" fill="#3b82f6"/><circle cx="470" cy="236.77616693203655" r="4" fill="#3b82f6"/><circle cx="498" cy="218.03821335791412" r="4" fill="#3b82f6"/><circle cx="526" cy="202.73610994720613" r="4" fill="#3b82f6"/><circle cx="554" cy="111.00729070644464" r="4" fill="#3b82f6"/><circle cx="582" cy="86.31945026397412" r="4" fill="#3b82f6"/><circle cx="610" cy="96.44263806251614" r="4" fill="#3b82f6"/><circle cx="638" cy="99.09075672504838" r="4" fill="#3b82f6"/><circle cx="666" cy="94.78337383725815" r="4" fill="#3b82f6"/><circle cx="694" cy="74.90572362356505" r="4" fill="#3b82f6"/><circle cx="722" cy="143.37132322131933" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,101.10198608899715 78,121.75060755887 106,200.97628425374975 134,215.40685494008198 162,206.07139864241984 190,249.39663119081442 218,246.6647113047839 246.00000000000003,250 274,250 302,200.92600351965174 330,182.55677532892022 358,209.52400905053204 386,241.36847397971943 414,242.82661526858303 442.00000000000006,245.5920556440114 470,236.77616693203655 498,218.03821335791412 526,202.73610994720613 554,111.00729070644464 582,86.31945026397412 610,96.44263806251614 638,99.09075672504838 666,94.78337383725815 694,74.90572362356505 722,143.37132322131933 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8102** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="78" cy="250" r="4" fill="#3b82f6"/><circle cx="106" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="134" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="162" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="190" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="218" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="274" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="302" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="330" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="358" cy="50" r="4" fill="#3b82f6"/><circle cx="386" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="414" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="470" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="498" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="526" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="554" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="582" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="610" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="638" cy="142.18106995884773" r="4" fill="#3b82f6"/><circle cx="666" cy="182.51028806584432" r="4" fill="#3b82f6"/><circle cx="694" cy="115.43209876543254" r="4" fill="#3b82f6"/><circle cx="722" cy="115.02057613168866" r="4" fill="#3b82f6"/><circle cx="750" cy="80.8641975308651" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 78,250 106,238.4773662551454 134,247.11934156378544 162,229.01234567901028 190,190.32921810699656 218,187.03703703703812 246.00000000000003,168.10699588477516 274,168.10699588477516 302,176.7489711934152 330,121.19341563786168 358,50 386,87.448559670782 414,91.56378600823192 442.00000000000006,76.7489711934152 470,107.61316872428031 498,104.73251028806574 526,137.24279835391008 554,118.31275720164712 582,138.0658436214015 610,161.1111111111107 638,142.18106995884773 666,182.51028806584432 694,115.43209876543254 722,115.02057613168866 750,80.8641975308651" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8761** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="78" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="106" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="134" cy="250" r="4" fill="#3b82f6"/><circle cx="162" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="190" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="218" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="274" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="302" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="330" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="358" cy="50" r="4" fill="#3b82f6"/><circle cx="386" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="414" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="470" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="498" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="526" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="554" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="582" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="610" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="638" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="666" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="694" cy="113.5897435897432" r="4" fill="#3b82f6"/><circle cx="722" cy="101.28205128205113" r="4" fill="#3b82f6"/><circle cx="750" cy="98.2051282051284" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 78,230.51282051282044 106,239.74358974358978 134,250 162,205.89743589743523 190,142.30769230769204 218,141.28205128205113 246.00000000000003,140.25641025641022 274,140.25641025641022 302,115.64102564102615 330,78.71794871794887 358,50 386,57.1794871794875 414,80.76923076923069 442.00000000000006,78.71794871794887 470,76.66666666666704 498,99.23076923076931 526,93.07692307692272 554,75.64102564102615 582,105.38461538461591 610,116.66666666666706 638,116.66666666666706 666,116.66666666666706 694,113.5897435897432 722,101.28205128205113 750,98.2051282051284" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4173** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="78" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="106" cy="250" r="4" fill="#3b82f6"/><circle cx="134" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="162" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="190" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="218" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="274" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="302" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="330" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="358" cy="50" r="4" fill="#3b82f6"/><circle cx="386" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="414" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="470" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="498" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="526" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="554" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="582" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="610" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="638" cy="78.11244979919735" r="4" fill="#3b82f6"/><circle cx="666" cy="72.48995983935859" r="4" fill="#3b82f6"/><circle cx="694" cy="65.26104417670697" r="4" fill="#3b82f6"/><circle cx="722" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="750" cy="96.58634538152647" r="4" fill="#3b82f6"/><polyline points="50,250 78,249.19678714859447 106,250 134,242.77108433735017 162,194.57831325301262 190,135.94377510040133 218,114.25702811245006 246.00000000000003,115.86345381526112 274,115.86345381526112 302,107.02811244980023 330,77.30923694779182 358,50 386,69.27710843373467 414,83.73493975903611 442.00000000000006,85.34136546184718 470,83.73493975903611 498,71.68674698795127 526,68.47389558232912 554,63.65461847389591 582,84.53815261044164 610,77.30923694779182 638,78.11244979919735 666,72.48995983935859 694,65.26104417670697 722,71.68674698795127 750,96.58634538152647" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4427** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="78" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="106" cy="250" r="4" fill="#3b82f6"/><circle cx="134" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="162" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="190" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="218" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="246.00000000000003" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="274" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="302" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="330" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="358" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="386" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="414" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="442.00000000000006" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="470" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="498" cy="50" r="4" fill="#3b82f6"/><circle cx="526" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="554" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="582" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="610" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="638" cy="99.076517150395" r="4" fill="#3b82f6"/><circle cx="666" cy="104.35356200527686" r="4" fill="#3b82f6"/><circle cx="694" cy="115.43535620052745" r="4" fill="#3b82f6"/><circle cx="722" cy="100.65963060686038" r="4" fill="#3b82f6"/><circle cx="750" cy="98.54881266490693" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 78,242.0844327176778 106,250 134,246.83377308707043 162,220.97625329815276 190,187.73087071240096 218,188.25857519788903 246.00000000000003,188.7862796833771 274,188.7862796833771 302,172.95514511873273 330,90.10554089709785 358,60.55408970976253 386,66.35883905013128 414,62.13720316622673 442.00000000000006,62.6649076517148 470,60.02638522427446 498,50 526,66.88654353561935 554,54.74934036939261 582,75.85751978891767 610,102.77044854881265 638,99.076517150395 666,104.35356200527686 694,115.43535620052745 722,100.65963060686038 750,98.54881266490693" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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