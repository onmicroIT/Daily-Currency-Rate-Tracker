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

**Last Updated:** 2026-06-27

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.9728** | 123.019 | 122.4409 | 122.7601 |
| Indian Rupee | INR | **94.4541** | 95.2997 | 94.4113 | 94.6591 |
| Chinese Yuan | CNY | **6.8076** | 6.8177 | 6.7691 | 6.7881 |
| Euro | EUR | **0.8778** | 0.8808 | 0.8613 | 0.8711 |
| Canadian Dollar | CAD | **1.4189** | 1.4231 | 1.3982 | 1.411 |
| Australian Dollar | AUD | **1.4496** | 1.4499 | 1.414 | 1.4291 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.9728** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="77.78066078533381" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="113.276249783775" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="132.30409963674379" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="126.21518768379396" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="127.73741567202772" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="120.05708354955834" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="250" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="223.7415672029049" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="191.25583809029814" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="188.31517038574458" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="63.49247535028578" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="65.9833938764914" r="4" fill="#3b82f6"/><polyline points="50,77.78066078533381 103.84615384615384,113.276249783775 157.69230769230768,132.30409963674379 211.53846153846155,126.21518768379396 265.38461538461536,127.73741567202772 319.2307692307692,120.05708354955834 373.0769230769231,250 426.9230769230769,223.7415672029049 480.7692307692308,223.7415672029049 534.6153846153845,191.25583809029814 588.4615384615385,188.31517038574458 642.3076923076923,63.49247535028578 696.1538461538462,50 750,65.9833938764914" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4541** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="250" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="250" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="184.08374606033357" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="159.41017559657854" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="195.63259792886066" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="238.40612336785142" r="4" fill="#3b82f6"/><circle cx="750" cy="240.36470058532205" r="4" fill="#3b82f6"/><polyline points="50,50 103.84615384615384,77.73525438991366 157.69230769230768,184.15128320576258 211.53846153846155,203.53444394416903 265.38461538461536,190.99504727600123 319.2307692307692,249.18955425483887 373.0769230769231,245.52003601980937 426.9230769230769,250 480.7692307692308,250 534.6153846153845,184.08374606033357 588.4615384615385,159.41017559657854 642.3076923076923,195.63259792886066 696.1538461538462,238.40612336785142 750,240.36470058532205" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8076** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="250" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="50" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="750" cy="91.56378600823192" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 103.84615384615384,250 157.69230769230768,238.4773662551454 211.53846153846155,247.11934156378544 265.38461538461536,229.01234567901028 319.2307692307692,190.32921810699656 373.0769230769231,187.03703703703812 426.9230769230769,168.10699588477516 480.7692307692308,168.10699588477516 534.6153846153845,176.7489711934152 588.4615384615385,121.19341563786168 642.3076923076923,50 696.1538461538462,87.448559670782 750,91.56378600823192" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8778** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="250" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="50" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="750" cy="80.76923076923069" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 103.84615384615384,230.51282051282044 157.69230769230768,239.74358974358978 211.53846153846155,250 265.38461538461536,205.89743589743523 319.2307692307692,142.30769230769204 373.0769230769231,141.28205128205113 426.9230769230769,140.25641025641022 480.7692307692308,140.25641025641022 534.6153846153845,115.64102564102615 588.4615384615385,78.71794871794887 642.3076923076923,50 696.1538461538462,57.1794871794875 750,80.76923076923069" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4189** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="250" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="50" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="750" cy="83.73493975903611" r="4" fill="#3b82f6"/><polyline points="50,250 103.84615384615384,249.19678714859447 157.69230769230768,250 211.53846153846155,242.77108433735017 265.38461538461536,194.57831325301262 319.2307692307692,135.94377510040133 373.0769230769231,114.25702811245006 426.9230769230769,115.86345381526112 480.7692307692308,115.86345381526112 534.6153846153845,107.02811244980023 588.4615384615385,77.30923694779182 642.3076923076923,50 696.1538461538462,69.27710843373467 750,83.73493975903611" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4496** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="214.9025069637885" r="4" fill="#3b82f6"/><circle cx="103.84615384615384" cy="241.6434540389969" r="4" fill="#3b82f6"/><circle cx="157.69230769230768" cy="250" r="4" fill="#3b82f6"/><circle cx="211.53846153846155" cy="246.657381615598" r="4" fill="#3b82f6"/><circle cx="265.38461538461536" cy="219.35933147632284" r="4" fill="#3b82f6"/><circle cx="319.2307692307692" cy="184.26183844011132" r="4" fill="#3b82f6"/><circle cx="373.0769230769231" cy="184.8189415041781" r="4" fill="#3b82f6"/><circle cx="426.9230769230769" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="480.7692307692308" cy="185.3760445682449" r="4" fill="#3b82f6"/><circle cx="534.6153846153845" cy="168.66295264623872" r="4" fill="#3b82f6"/><circle cx="588.4615384615385" cy="81.19777158774397" r="4" fill="#3b82f6"/><circle cx="642.3076923076923" cy="50" r="4" fill="#3b82f6"/><circle cx="696.1538461538462" cy="56.128133704734694" r="4" fill="#3b82f6"/><circle cx="750" cy="51.67130919220037" r="4" fill="#3b82f6"/><polyline points="50,214.9025069637885 103.84615384615384,241.6434540389969 157.69230769230768,250 211.53846153846155,246.657381615598 265.38461538461536,219.35933147632284 319.2307692307692,184.26183844011132 373.0769230769231,184.8189415041781 426.9230769230769,185.3760445682449 480.7692307692308,185.3760445682449 534.6153846153845,168.66295264623872 588.4615384615385,81.19777158774397 642.3076923076923,50 696.1538461538462,56.128133704734694 750,51.67130919220037" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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