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

**Last Updated:** 2026-07-03

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.2697** | 123.2697 | 122.4409 | 122.87 |
| Indian Rupee | INR | **95.3879** | 95.3879 | 94.4113 | 94.7039 |
| Chinese Yuan | CNY | **6.7963** | 6.8177 | 6.7691 | 6.7924 |
| Euro | EUR | **0.8754** | 0.8808 | 0.8613 | 0.8729 |
| Canadian Dollar | CAD | **1.4188** | 1.4231 | 1.3982 | 1.4137 |
| Australian Dollar | AUD | **1.447** | 1.4519 | 1.414 | 1.4353 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.2697** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="129.874517374518" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="154.63320463320412" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="167.90540540540653" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="163.6583011583019" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="164.72007722007547" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="159.3629343629331" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="250" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="231.68436293436193" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="231.68436293436193" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="209.02509652509778" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="206.97393822393653" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="119.90830115830016" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="110.49710424710293" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="121.64575289575129" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="119.01544401544425" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="117.06081081081132" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="82.45656370656432" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="64.88899613899656" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="73.96235521235506" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,129.874517374518 86.84210526315789,154.63320463320412 123.68421052631578,167.90540540540653 160.5263157894737,163.6583011583019 197.36842105263156,164.72007722007547 234.21052631578945,159.3629343629331 271.0526315789474,250 307.89473684210526,231.68436293436193 344.7368421052631,231.68436293436193 381.57894736842104,209.02509652509778 418.4210526315789,206.97393822393653 455.2631578947369,119.90830115830016 492.10526315789474,110.49710424710293 528.9473684210527,121.64575289575129 565.7894736842105,119.01544401544425 602.6315789473684,117.06081081081132 639.4736842105262,82.45656370656432 676.3157894736842,64.88899613899656 713.1578947368421,73.96235521235506 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.3879** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="68.0626663936105" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="93.2930575465895" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="190.09830022527083" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="207.73090313331946" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="196.32398115912298" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="249.26274831046368" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="245.92463649395725" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="250" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="250" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="190.03686258447712" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="167.59164448085232" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="200.54269916035204" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="239.45320499692727" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="241.23489657997143" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="244.61396682367274" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="233.8419004710211" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="210.94613966823553" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="192.24861765308313" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="80.16588163014552" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,68.0626663936105 86.84210526315789,93.2930575465895 123.68421052631578,190.09830022527083 160.5263157894737,207.73090313331946 197.36842105263156,196.32398115912298 234.21052631578945,249.26274831046368 271.0526315789474,245.92463649395725 307.89473684210526,250 344.7368421052631,250 381.57894736842104,190.03686258447712 418.4210526315789,167.59164448085232 455.2631578947369,200.54269916035204 492.10526315789474,239.45320499692727 528.9473684210527,241.23489657997143 565.7894736842105,244.61396682367274 602.6315789473684,233.8419004710211 639.4736842105262,210.94613966823553 676.3157894736842,192.24861765308313 713.1578947368421,80.16588163014552 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7963** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="250" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="50" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="750" cy="138.0658436214015" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 86.84210526315789,250 123.68421052631578,238.4773662551454 160.5263157894737,247.11934156378544 197.36842105263156,229.01234567901028 234.21052631578945,190.32921810699656 271.0526315789474,187.03703703703812 307.89473684210526,168.10699588477516 344.7368421052631,168.10699588477516 381.57894736842104,176.7489711934152 418.4210526315789,121.19341563786168 455.2631578947369,50 492.10526315789474,87.448559670782 528.9473684210527,91.56378600823192 565.7894736842105,76.7489711934152 602.6315789473684,107.61316872428031 639.4736842105262,104.73251028806574 676.3157894736842,137.24279835391008 713.1578947368421,118.31275720164712 750,138.0658436214015" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8754** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="250" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="50" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="750" cy="105.38461538461591" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 86.84210526315789,230.51282051282044 123.68421052631578,239.74358974358978 160.5263157894737,250 197.36842105263156,205.89743589743523 234.21052631578945,142.30769230769204 271.0526315789474,141.28205128205113 307.89473684210526,140.25641025641022 344.7368421052631,140.25641025641022 381.57894736842104,115.64102564102615 418.4210526315789,78.71794871794887 455.2631578947369,50 492.10526315789474,57.1794871794875 528.9473684210527,80.76923076923069 565.7894736842105,78.71794871794887 602.6315789473684,76.66666666666704 639.4736842105262,99.23076923076931 676.3157894736842,93.07692307692272 713.1578947368421,75.64102564102615 750,105.38461538461591" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4188** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="250" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="50" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="750" cy="84.53815261044164" r="4" fill="#3b82f6"/><polyline points="50,250 86.84210526315789,249.19678714859447 123.68421052631578,250 160.5263157894737,242.77108433735017 197.36842105263156,194.57831325301262 234.21052631578945,135.94377510040133 271.0526315789474,114.25702811245006 307.89473684210526,115.86345381526112 344.7368421052631,115.86345381526112 381.57894736842104,107.02811244980023 418.4210526315789,77.30923694779182 455.2631578947369,50 492.10526315789474,69.27710843373467 528.9473684210527,83.73493975903611 565.7894736842105,85.34136546184718 602.6315789473684,83.73493975903611 639.4736842105262,71.68674698795127 676.3157894736842,68.47389558232912 713.1578947368421,63.65461847389591 750,84.53815261044164" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.447** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="86.84210526315789" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="123.68421052631578" cy="250" r="4" fill="#3b82f6"/><circle cx="160.5263157894737" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="197.36842105263156" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="234.21052631578945" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="271.0526315789474" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="307.89473684210526" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="344.7368421052631" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="381.57894736842104" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="418.4210526315789" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="455.2631578947369" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="492.10526315789474" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="528.9473684210527" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="565.7894736842105" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="602.6315789473684" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="639.4736842105262" cy="50" r="4" fill="#3b82f6"/><circle cx="676.3157894736842" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="713.1578947368421" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="750" cy="75.85751978891767" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 86.84210526315789,242.0844327176778 123.68421052631578,250 160.5263157894737,246.83377308707043 197.36842105263156,220.97625329815276 234.21052631578945,187.73087071240096 271.0526315789474,188.25857519788903 307.89473684210526,188.7862796833771 344.7368421052631,188.7862796833771 381.57894736842104,172.95514511873273 418.4210526315789,90.10554089709785 455.2631578947369,60.55408970976253 492.10526315789474,66.35883905013128 528.9473684210527,62.13720316622673 565.7894736842105,62.6649076517148 602.6315789473684,60.02638522427446 639.4736842105262,50 676.3157894736842,66.88654353561935 713.1578947368421,54.74934036939261 750,75.85751978891767" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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