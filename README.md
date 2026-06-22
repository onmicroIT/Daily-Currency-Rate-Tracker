# Daily Multi-Currency USD Exchange Rate Tracker

[![GitHub Workflow Status](https://github.com/yourusername/daily-usd-to-bdt-tracker/actions/workflows/update-rate.yml/badge.svg)](https://github.com/yourusername/daily-usd-to-bdt-tracker/actions)

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

**Last Updated:** 2026-06-22

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.5168** | 122.9387 | 122.4409 | 122.7155 |
| Indian Rupee | INR | **94.4113** | 95.2997 | 94.4113 | 94.6822 |
| Chinese Yuan | CNY | **6.789** | 6.789 | 6.7691 | 6.7792 |
| Euro | EUR | **0.872** | 0.872 | 0.8613 | 0.8672 |
| Canadian Dollar | CAD | **1.4149** | 1.4151 | 1.3982 | 1.4062 |
| Australian Dollar | AUD | **1.4256** | 1.4258 | 1.414 | 1.4207 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.5168** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="137.5" cy="91.22137404579982" r="4" fill="#3b82f6"/><circle cx="225" cy="113.31860184813291" r="4" fill="#3b82f6"/><circle cx="312.5" cy="106.24748895138654" r="4" fill="#3b82f6"/><circle cx="400" cy="108.01526717556887" r="4" fill="#3b82f6"/><circle cx="487.5" cy="99.09602249899268" r="4" fill="#3b82f6"/><circle cx="575" cy="250" r="4" fill="#3b82f6"/><circle cx="662.5" cy="219.5058256327824" r="4" fill="#3b82f6"/><circle cx="750" cy="219.5058256327824" r="4" fill="#3b82f6"/><polyline points="50,50 137.5,91.22137404579982 225,113.31860184813291 312.5,106.24748895138654 400,108.01526717556887 487.5,99.09602249899268 575,250 662.5,219.5058256327824 750,219.5058256327824" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.4113** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="137.5" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="225" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="312.5" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="400" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="487.5" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="575" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="662.5" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="250" r="4" fill="#3b82f6"/><polyline points="50,50 137.5,77.73525438991366 225,184.15128320576258 312.5,203.53444394416903 400,190.99504727600123 487.5,249.18955425483887 575,245.52003601980937 662.5,250 750,250" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.789** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="123.36683417085361" r="4" fill="#3b82f6"/><circle cx="137.5" cy="250" r="4" fill="#3b82f6"/><circle cx="225" cy="221.8592964824149" r="4" fill="#3b82f6"/><circle cx="312.5" cy="242.9648241206015" r="4" fill="#3b82f6"/><circle cx="400" cy="198.7437185929588" r="4" fill="#3b82f6"/><circle cx="487.5" cy="104.2713567839186" r="4" fill="#3b82f6"/><circle cx="575" cy="96.2311557788943" r="4" fill="#3b82f6"/><circle cx="662.5" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,123.36683417085361 137.5,250 225,221.8592964824149 312.5,242.9648241206015 400,198.7437185929588 487.5,104.2713567839186 575,96.2311557788943 662.5,50 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.872** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="190.18691588784898" r="4" fill="#3b82f6"/><circle cx="137.5" cy="214.4859813084111" r="4" fill="#3b82f6"/><circle cx="225" cy="231.30841121495334" r="4" fill="#3b82f6"/><circle cx="312.5" cy="250" r="4" fill="#3b82f6"/><circle cx="400" cy="169.62616822429786" r="4" fill="#3b82f6"/><circle cx="487.5" cy="53.73831775700892" r="4" fill="#3b82f6"/><circle cx="575" cy="51.86915887850446" r="4" fill="#3b82f6"/><circle cx="662.5" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,190.18691588784898 137.5,214.4859813084111 225,231.30841121495334 312.5,250 400,169.62616822429786 487.5,53.73831775700892 575,51.86915887850446 662.5,50 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4149** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="137.5" cy="248.8165680473374" r="4" fill="#3b82f6"/><circle cx="225" cy="250" r="4" fill="#3b82f6"/><circle cx="312.5" cy="239.3491124260366" r="4" fill="#3b82f6"/><circle cx="400" cy="168.3431952662729" r="4" fill="#3b82f6"/><circle cx="487.5" cy="81.95266272189276" r="4" fill="#3b82f6"/><circle cx="575" cy="50" r="4" fill="#3b82f6"/><circle cx="662.5" cy="52.3668639053252" r="4" fill="#3b82f6"/><circle cx="750" cy="52.3668639053252" r="4" fill="#3b82f6"/><polyline points="50,250 137.5,248.8165680473374 225,250 312.5,239.3491124260366 400,168.3431952662729 487.5,81.95266272189276 575,50 662.5,52.3668639053252 750,52.3668639053252" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4256** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="143.2203389830516" r="4" fill="#3b82f6"/><circle cx="137.5" cy="224.57627118643978" r="4" fill="#3b82f6"/><circle cx="225" cy="250" r="4" fill="#3b82f6"/><circle cx="312.5" cy="239.83050847457366" r="4" fill="#3b82f6"/><circle cx="400" cy="156.77966101694838" r="4" fill="#3b82f6"/><circle cx="487.5" cy="50" r="4" fill="#3b82f6"/><circle cx="575" cy="51.694915254237095" r="4" fill="#3b82f6"/><circle cx="662.5" cy="53.38983050847419" r="4" fill="#3b82f6"/><circle cx="750" cy="53.38983050847419" r="4" fill="#3b82f6"/><polyline points="50,143.2203389830516 137.5,224.57627118643978 225,250 312.5,239.83050847457366 400,156.77966101694838 487.5,50 575,51.694915254237095 662.5,53.38983050847419 750,53.38983050847419" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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