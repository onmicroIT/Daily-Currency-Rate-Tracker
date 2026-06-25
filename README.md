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

**Last Updated:** 2026-06-25

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.98** | 122.98 | 122.4409 | 122.7208 |
| Indian Rupee | INR | **94.6528** | 95.2997 | 94.4113 | 94.6925 |
| Chinese Yuan | CNY | **6.8177** | 6.8177 | 6.7691 | 6.7848 |
| Euro | EUR | **0.8808** | 0.8808 | 0.8613 | 0.8698 |
| Canadian Dollar | CAD | **1.4231** | 1.4231 | 1.3982 | 1.4096 |
| Australian Dollar | AUD | **1.4499** | 1.4499 | 1.414 | 1.4258 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.98** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="65.32183268410552" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="103.38527174921197" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="123.7896494156955" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="117.26024856242098" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="118.89259877573565" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="110.65664997217496" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="250" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="221.84195882025463" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="221.84195882025463" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="187.00612131330234" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="183.8527174921144" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,65.32183268410552 113.63636363636364,103.38527174921197 177.27272727272728,123.7896494156955 240.9090909090909,117.26024856242098 304.54545454545456,118.89259877573565 368.1818181818182,110.65664997217496 431.8181818181818,250 495.45454545454544,221.84195882025463 559.0909090909091,221.84195882025463 622.7272727272727,187.00612131330234 686.3636363636364,183.8527174921144 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.6528** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="250" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="250" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="750" cy="195.63259792886066" r="4" fill="#3b82f6"/><polyline points="50,50 113.63636363636364,77.73525438991366 177.27272727272728,184.15128320576258 240.9090909090909,203.53444394416903 304.54545454545456,190.99504727600123 368.1818181818182,249.18955425483887 431.8181818181818,245.52003601980937 495.45454545454544,250 559.0909090909091,250 622.7272727272727,184.08374606033357 686.3636363636364,159.41017559657854 750,195.63259792886066" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8177** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="250" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 113.63636363636364,250 177.27272727272728,238.4773662551454 240.9090909090909,247.11934156378544 304.54545454545456,229.01234567901028 368.1818181818182,190.32921810699656 431.8181818181818,187.03703703703812 495.45454545454544,168.10699588477516 559.0909090909091,168.10699588477516 622.7272727272727,176.7489711934152 686.3636363636364,121.19341563786168 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8808** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="250" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 113.63636363636364,230.51282051282044 177.27272727272728,239.74358974358978 240.9090909090909,250 304.54545454545456,205.89743589743523 368.1818181818182,142.30769230769204 431.8181818181818,141.28205128205113 495.45454545454544,140.25641025641022 559.0909090909091,140.25641025641022 622.7272727272727,115.64102564102615 686.3636363636364,78.71794871794887 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4231** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="250" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,250 113.63636363636364,249.19678714859447 177.27272727272728,250 240.9090909090909,242.77108433735017 304.54545454545456,194.57831325301262 368.1818181818182,135.94377510040133 431.8181818181818,114.25702811245006 495.45454545454544,115.86345381526112 559.0909090909091,115.86345381526112 622.7272727272727,107.02811244980023 686.3636363636364,77.30923694779182 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4499** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="214.9025069637885" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="241.6434540389969" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="250" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="246.657381615598" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="219.35933147632284" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="184.26183844011132" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="184.8189415041781" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="168.66295264623872" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="81.19777158774397" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,214.9025069637885 113.63636363636364,241.6434540389969 177.27272727272728,250 240.9090909090909,246.657381615598 304.54545454545456,219.35933147632284 368.1818181818182,184.26183844011132 431.8181818181818,184.8189415041781 495.45454545454544,185.3760445682449 559.0909090909091,185.3760445682449 622.7272727272727,168.66295264623872 686.3636363636364,81.19777158774397 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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