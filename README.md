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

**Last Updated:** 2026-07-01

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.208** | 123.208 | 122.4409 | 122.8311 |
| Indian Rupee | INR | **94.6933** | 95.2997 | 94.4113 | 94.6361 |
| Chinese Yuan | CNY | **6.7965** | 6.8177 | 6.7691 | 6.7916 |
| Euro | EUR | **0.8766** | 0.8808 | 0.8613 | 0.8725 |
| Canadian Dollar | CAD | **1.4208** | 1.4231 | 1.3982 | 1.413 |
| Australian Dollar | AUD | **1.4487** | 1.4519 | 1.414 | 1.4338 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.208** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="120.2124885934041" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="146.96258636422812" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="161.30230739147538" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="156.7135966627564" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="157.86077434493336" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="152.07274149393663" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="250" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="230.2111849824001" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="230.2111849824001" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="205.72937035588706" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="203.5132316516732" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="109.44466171294347" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="99.27649589362355" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="111.32186155650948" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="108.47998957111191" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="106.36813974709968" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="68.98057619606334" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,120.2124885934041 91.1764705882353,146.96258636422812 132.3529411764706,161.30230739147538 173.52941176470588,156.7135966627564 214.7058823529412,157.86077434493336 255.88235294117646,152.07274149393663 297.05882352941177,250 338.2352941176471,230.2111849824001 379.4117647058824,230.2111849824001 420.5882352941176,205.72937035588706 461.7647058823529,203.5132316516732 502.94117647058823,109.44466171294347 544.1176470588235,99.27649589362355 585.2941176470588,111.32186155650948 626.4705882352941,108.47998957111191 667.6470588235294,106.36813974709968 708.8235294117648,68.98057619606334 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.6933** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="250" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="250" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="238.40612336785142" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="240.36470058532205" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="244.07924358396983" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="232.23773075191266" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="207.0688878883373" r="4" fill="#3b82f6"/><circle cx="750" cy="186.51508329581378" r="4" fill="#3b82f6"/><polyline points="50,50 91.1764705882353,77.73525438991366 132.3529411764706,184.15128320576258 173.52941176470588,203.53444394416903 214.7058823529412,190.99504727600123 255.88235294117646,249.18955425483887 297.05882352941177,245.52003601980937 338.2352941176471,250 379.4117647058824,250 420.5882352941176,184.08374606033357 461.7647058823529,159.41017559657854 502.94117647058823,195.63259792886066 544.1176470588235,238.40612336785142 585.2941176470588,240.36470058532205 626.4705882352941,244.07924358396983 667.6470588235294,232.23773075191266 708.8235294117648,207.0688878883373 750,186.51508329581378" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7965** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="250" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="50" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="750" cy="137.24279835391008" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 91.1764705882353,250 132.3529411764706,238.4773662551454 173.52941176470588,247.11934156378544 214.7058823529412,229.01234567901028 255.88235294117646,190.32921810699656 297.05882352941177,187.03703703703812 338.2352941176471,168.10699588477516 379.4117647058824,168.10699588477516 420.5882352941176,176.7489711934152 461.7647058823529,121.19341563786168 502.94117647058823,50 544.1176470588235,87.448559670782 585.2941176470588,91.56378600823192 626.4705882352941,76.7489711934152 667.6470588235294,107.61316872428031 708.8235294117648,104.73251028806574 750,137.24279835391008" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8766** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="250" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="50" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="750" cy="93.07692307692272" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 91.1764705882353,230.51282051282044 132.3529411764706,239.74358974358978 173.52941176470588,250 214.7058823529412,205.89743589743523 255.88235294117646,142.30769230769204 297.05882352941177,141.28205128205113 338.2352941176471,140.25641025641022 379.4117647058824,140.25641025641022 420.5882352941176,115.64102564102615 461.7647058823529,78.71794871794887 502.94117647058823,50 544.1176470588235,57.1794871794875 585.2941176470588,80.76923076923069 626.4705882352941,78.71794871794887 667.6470588235294,76.66666666666704 708.8235294117648,99.23076923076931 750,93.07692307692272" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4208** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="250" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="50" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="750" cy="68.47389558232912" r="4" fill="#3b82f6"/><polyline points="50,250 91.1764705882353,249.19678714859447 132.3529411764706,250 173.52941176470588,242.77108433735017 214.7058823529412,194.57831325301262 255.88235294117646,135.94377510040133 297.05882352941177,114.25702811245006 338.2352941176471,115.86345381526112 379.4117647058824,115.86345381526112 420.5882352941176,107.02811244980023 461.7647058823529,77.30923694779182 502.94117647058823,50 544.1176470588235,69.27710843373467 585.2941176470588,83.73493975903611 626.4705882352941,85.34136546184718 667.6470588235294,83.73493975903611 708.8235294117648,71.68674698795127 750,68.47389558232912" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4487** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="91.1764705882353" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="132.3529411764706" cy="250" r="4" fill="#3b82f6"/><circle cx="173.52941176470588" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="214.7058823529412" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="255.88235294117646" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="297.05882352941177" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="338.2352941176471" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="379.4117647058824" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="420.5882352941176" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="461.7647058823529" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="502.94117647058823" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="544.1176470588235" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="585.2941176470588" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="626.4705882352941" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="667.6470588235294" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="708.8235294117648" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="66.88654353561935" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 91.1764705882353,242.0844327176778 132.3529411764706,250 173.52941176470588,246.83377308707043 214.7058823529412,220.97625329815276 255.88235294117646,187.73087071240096 297.05882352941177,188.25857519788903 338.2352941176471,188.7862796833771 379.4117647058824,188.7862796833771 420.5882352941176,172.95514511873273 461.7647058823529,90.10554089709785 502.94117647058823,60.55408970976253 544.1176470588235,66.35883905013128 585.2941176470588,62.13720316622673 626.4705882352941,62.6649076517148 667.6470588235294,60.02638522427446 708.8235294117648,50 750,66.88654353561935" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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