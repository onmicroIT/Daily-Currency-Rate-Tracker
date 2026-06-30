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

**Last Updated:** 2026-06-30

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.1352** | 123.1352 | 122.4409 | 122.809 |
| Indian Rupee | INR | **94.602** | 95.2997 | 94.4113 | 94.6328 |
| Chinese Yuan | CNY | **6.8044** | 6.8177 | 6.7691 | 6.7914 |
| Euro | EUR | **0.876** | 0.8808 | 0.8613 | 0.8722 |
| Canadian Dollar | CAD | **1.4204** | 1.4231 | 1.3982 | 1.4125 |
| Australian Dollar | AUD | **1.4519** | 1.4519 | 1.414 | 1.4329 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.1352** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="106.6037735849059" r="4" fill="#3b82f6"/><circle cx="93.75" cy="136.15872101396988" r="4" fill="#3b82f6"/><circle cx="137.5" cy="152.00201641941618" r="4" fill="#3b82f6"/><circle cx="181.25" cy="146.93216188967352" r="4" fill="#3b82f6"/><circle cx="225" cy="148.19962552210615" r="4" fill="#3b82f6"/><circle cx="268.75" cy="141.80469537663646" r="4" fill="#3b82f6"/><circle cx="312.5" cy="250" r="4" fill="#3b82f6"/><circle cx="356.25" cy="228.13625234048553" r="4" fill="#3b82f6"/><circle cx="400" cy="228.13625234048553" r="4" fill="#3b82f6"/><circle cx="443.75" cy="201.0874261846477" r="4" fill="#3b82f6"/><circle cx="487.5" cy="198.63891689471188" r="4" fill="#3b82f6"/><circle cx="531.25" cy="94.70689903499753" r="4" fill="#3b82f6"/><circle cx="575" cy="83.47256229295473" r="4" fill="#3b82f6"/><circle cx="618.75" cy="96.78093043352769" r="4" fill="#3b82f6"/><circle cx="662.5" cy="93.64107734408728" r="4" fill="#3b82f6"/><circle cx="706.25" cy="91.30779202074035" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,106.6037735849059 93.75,136.15872101396988 137.5,152.00201641941618 181.25,146.93216188967352 225,148.19962552210615 268.75,141.80469537663646 312.5,250 356.25,228.13625234048553 400,228.13625234048553 443.75,201.0874261846477 487.5,198.63891689471188 531.25,94.70689903499753 575,83.47256229295473 618.75,96.78093043352769 662.5,93.64107734408728 706.25,91.30779202074035 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.602** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="93.75" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="137.5" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="181.25" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="225" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="268.75" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="312.5" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="356.25" cy="250" r="4" fill="#3b82f6"/><circle cx="400" cy="250" r="4" fill="#3b82f6"/><circle cx="443.75" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="487.5" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="531.25" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="575" cy="238.40612336785142" r="4" fill="#3b82f6"/><circle cx="618.75" cy="240.36470058532205" r="4" fill="#3b82f6"/><circle cx="662.5" cy="244.07924358396983" r="4" fill="#3b82f6"/><circle cx="706.25" cy="232.23773075191266" r="4" fill="#3b82f6"/><circle cx="750" cy="207.0688878883373" r="4" fill="#3b82f6"/><polyline points="50,50 93.75,77.73525438991366 137.5,184.15128320576258 181.25,203.53444394416903 225,190.99504727600123 268.75,249.18955425483887 312.5,245.52003601980937 356.25,250 400,250 443.75,184.08374606033357 487.5,159.41017559657854 531.25,195.63259792886066 575,238.40612336785142 618.75,240.36470058532205 662.5,244.07924358396983 706.25,232.23773075191266 750,207.0688878883373" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8044** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="93.75" cy="250" r="4" fill="#3b82f6"/><circle cx="137.5" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="181.25" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="225" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="268.75" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="312.5" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="356.25" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="400" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="443.75" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="487.5" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="531.25" cy="50" r="4" fill="#3b82f6"/><circle cx="575" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="618.75" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="662.5" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="706.25" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="750" cy="104.73251028806574" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 93.75,250 137.5,238.4773662551454 181.25,247.11934156378544 225,229.01234567901028 268.75,190.32921810699656 312.5,187.03703703703812 356.25,168.10699588477516 400,168.10699588477516 443.75,176.7489711934152 487.5,121.19341563786168 531.25,50 575,87.448559670782 618.75,91.56378600823192 662.5,76.7489711934152 706.25,107.61316872428031 750,104.73251028806574" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.876** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="93.75" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="137.5" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="181.25" cy="250" r="4" fill="#3b82f6"/><circle cx="225" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="268.75" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="312.5" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="356.25" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="400" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="443.75" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="487.5" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="531.25" cy="50" r="4" fill="#3b82f6"/><circle cx="575" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="618.75" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="662.5" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="706.25" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="750" cy="99.23076923076931" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 93.75,230.51282051282044 137.5,239.74358974358978 181.25,250 225,205.89743589743523 268.75,142.30769230769204 312.5,141.28205128205113 356.25,140.25641025641022 400,140.25641025641022 443.75,115.64102564102615 487.5,78.71794871794887 531.25,50 575,57.1794871794875 618.75,80.76923076923069 662.5,78.71794871794887 706.25,76.66666666666704 750,99.23076923076931" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4204** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="93.75" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="137.5" cy="250" r="4" fill="#3b82f6"/><circle cx="181.25" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="225" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="268.75" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="312.5" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="356.25" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="400" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="443.75" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="487.5" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="531.25" cy="50" r="4" fill="#3b82f6"/><circle cx="575" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="618.75" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="662.5" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="706.25" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="750" cy="71.68674698795127" r="4" fill="#3b82f6"/><polyline points="50,250 93.75,249.19678714859447 137.5,250 181.25,242.77108433735017 225,194.57831325301262 268.75,135.94377510040133 312.5,114.25702811245006 356.25,115.86345381526112 400,115.86345381526112 443.75,107.02811244980023 487.5,77.30923694779182 531.25,50 575,69.27710843373467 618.75,83.73493975903611 662.5,85.34136546184718 706.25,83.73493975903611 750,71.68674698795127" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4519** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="93.75" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="137.5" cy="250" r="4" fill="#3b82f6"/><circle cx="181.25" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="225" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="268.75" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="312.5" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="356.25" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="400" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="443.75" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="487.5" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="531.25" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="575" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="618.75" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="662.5" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="706.25" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 93.75,242.0844327176778 137.5,250 181.25,246.83377308707043 225,220.97625329815276 268.75,187.73087071240096 312.5,188.25857519788903 356.25,188.7862796833771 400,188.7862796833771 443.75,172.95514511873273 487.5,90.10554089709785 531.25,60.55408970976253 575,66.35883905013128 618.75,62.13720316622673 662.5,62.6649076517148 706.25,60.02638522427446 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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