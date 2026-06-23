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

**Last Updated:** 2026-06-23

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **122.6107** | 122.9387 | 122.4409 | 122.7051 |
| Indian Rupee | INR | **94.7041** | 95.2997 | 94.4113 | 94.6844 |
| Chinese Yuan | CNY | **6.7869** | 6.789 | 6.7691 | 6.78 |
| Euro | EUR | **0.8744** | 0.8744 | 0.8613 | 0.8679 |
| Canadian Dollar | CAD | **1.416** | 1.416 | 1.3982 | 1.4072 |
| Australian Dollar | AUD | **1.4286** | 1.4286 | 1.414 | 1.4215 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **122.6107** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="91.22137404579982" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="113.31860184813291" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="106.24748895138654" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="108.01526717556887" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="99.09602249899268" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="219.5058256327824" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="219.5058256327824" r="4" fill="#3b82f6"/><circle cx="750" cy="181.77983125753485" r="4" fill="#3b82f6"/><polyline points="50,50 127.77777777777777,91.22137404579982 205.55555555555554,113.31860184813291 283.3333333333333,106.24748895138654 361.1111111111111,108.01526717556887 438.8888888888889,99.09602249899268 516.6666666666666,250 594.4444444444445,219.5058256327824 672.2222222222222,219.5058256327824 750,181.77983125753485" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **94.7041** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="50" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="77.73525438991366" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="184.15128320576258" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="203.53444394416903" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="190.99504727600123" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="249.18955425483887" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="245.52003601980937" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="250" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="250" r="4" fill="#3b82f6"/><circle cx="750" cy="184.08374606033357" r="4" fill="#3b82f6"/><polyline points="50,50 127.77777777777777,77.73525438991366 205.55555555555554,184.15128320576258 283.3333333333333,203.53444394416903 361.1111111111111,190.99504727600123 438.8888888888889,249.18955425483887 516.6666666666666,245.52003601980937 594.4444444444445,250 672.2222222222222,250 750,184.08374606033357" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7869** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="123.36683417085361" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="250" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="221.8592964824149" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="242.9648241206015" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="198.7437185929588" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="104.2713567839186" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="96.2311557788943" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="50" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="71.1055276381866" r="4" fill="#3b82f6"/><polyline points="50,123.36683417085361 127.77777777777777,250 205.55555555555554,221.8592964824149 283.3333333333333,242.9648241206015 361.1111111111111,198.7437185929588 438.8888888888889,104.2713567839186 516.6666666666666,96.2311557788943 594.4444444444445,50 672.2222222222222,50 750,71.1055276381866" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8744** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="201.14503816793754" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="220.99236641221353" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="234.73282442748092" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="184.3511450381667" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="89.69465648854865" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="88.1679389312969" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="86.64122137404516" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="86.64122137404516" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,201.14503816793754 127.77777777777777,220.99236641221353 205.55555555555554,234.73282442748092 283.3333333333333,250 361.1111111111111,184.3511450381667 438.8888888888889,89.69465648854865 516.6666666666666,88.1679389312969 594.4444444444445,86.64122137404516 672.2222222222222,86.64122137404516 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.416** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="248.87640449438214" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="239.88764044943923" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="172.4719101123598" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="90.44943820224564" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="60.11235955056079" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="62.35955056179652" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="62.35955056179652" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,250 127.77777777777777,248.87640449438214 205.55555555555554,250 283.3333333333333,239.88764044943923 361.1111111111111,172.4719101123598 438.8888888888889,90.44943820224564 516.6666666666666,60.11235955056079 594.4444444444445,62.35955056179652 672.2222222222222,62.35955056179652 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4286** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="163.69863013698767" r="4" fill="#3b82f6"/><circle cx="127.77777777777777" cy="229.45205479452" r="4" fill="#3b82f6"/><circle cx="205.55555555555554" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="241.78082191780618" r="4" fill="#3b82f6"/><circle cx="361.1111111111111" cy="174.65753424657538" r="4" fill="#3b82f6"/><circle cx="438.8888888888889" cy="88.35616438356305" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="89.72602739726153" r="4" fill="#3b82f6"/><circle cx="594.4444444444445" cy="91.09589041095998" r="4" fill="#3b82f6"/><circle cx="672.2222222222222" cy="91.09589041095998" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,163.69863013698767 127.77777777777777,229.45205479452 205.55555555555554,250 283.3333333333333,241.78082191780618 361.1111111111111,174.65753424657538 438.8888888888889,88.35616438356305 516.6666666666666,89.72602739726153 594.4444444444445,91.09589041095998 672.2222222222222,91.09589041095998 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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