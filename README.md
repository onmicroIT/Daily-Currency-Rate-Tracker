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

**Last Updated:** 2026-07-08

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.2172** | 123.3291 | 122.4409 | 122.9494 |
| Indian Rupee | INR | **95.0475** | 95.456 | 94.4113 | 94.8224 |
| Chinese Yuan | CNY | **6.8019** | 6.8177 | 6.7691 | 6.7929 |
| Euro | EUR | **0.8758** | 0.8808 | 0.8613 | 0.8733 |
| Canadian Dollar | CAD | **1.4204** | 1.4231 | 1.3982 | 1.415 |
| Australian Dollar | AUD | **1.4423** | 1.4519 | 1.414 | 1.4366 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.2172** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="137.5" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="225" cy="250" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="312.5" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="400" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="487.5" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="575" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="50" r="4" fill="#3b82f6"/><circle cx="662.5" cy="52.58950686782214" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="80.19590182391444" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="62.24949335735223" r="4" fill="#3b82f6"/><circle cx="750" cy="75.1970276964629" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 79.16666666666666,161.0110335510012 108.33333333333333,173.39563161450198 137.5,169.43256023418184 166.66666666666666,170.42332807925948 195.83333333333334,165.42445395181116 225,250 254.16666666666669,232.90925467237008 283.3333333333333,232.90925467237008 312.5,211.76536816032524 341.6666666666667,209.85138482323626 370.8333333333333,128.60842152668178 400,119.82661562710926 429.16666666666663,130.22967800044836 458.33333333333337,127.77527583877479 487.5,125.95136230578697 516.6666666666666,93.66133753659082 545.8333333333334,77.26863319072253 575,85.73519477595056 604.1666666666666,63.37536590857841 633.3333333333334,50 662.5,52.58950686782214 691.6666666666666,80.19590182391444 720.8333333333334,62.24949335735223 750,75.1970276964629" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.0475** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="79.92246577964981" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="103.50818416770309" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="194.0030630803097" r="4" fill="#3b82f6"/><circle cx="137.5" cy="210.48626399923404" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="199.82291566956977" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="249.3108069302181" r="4" fill="#3b82f6"/><circle cx="225" cy="246.19029386426595" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="250" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="312.5" cy="193.94563032449543" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="172.96353020005785" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="203.7666315688713" r="4" fill="#3b82f6"/><circle cx="400" cy="240.14071025174616" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="241.80626017038392" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="244.96506174021133" r="4" fill="#3b82f6"/><circle cx="487.5" cy="234.89518522063676" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="213.49191155355496" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="196.01320953383845" r="4" fill="#3b82f6"/><circle cx="575" cy="91.236718675218" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="63.03723557002025" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="74.60036374078717" r="4" fill="#3b82f6"/><circle cx="662.5" cy="77.62515554704707" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="72.70508279888963" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="50" r="4" fill="#3b82f6"/><circle cx="750" cy="128.20426916818252" r="4" fill="#3b82f6"/><polyline points="50,79.92246577964981 79.16666666666666,103.50818416770309 108.33333333333333,194.0030630803097 137.5,210.48626399923404 166.66666666666666,199.82291566956977 195.83333333333334,249.3108069302181 225,246.19029386426595 254.16666666666669,250 283.3333333333333,250 312.5,193.94563032449543 341.6666666666667,172.96353020005785 370.8333333333333,203.7666315688713 400,240.14071025174616 429.16666666666663,241.80626017038392 458.33333333333337,244.96506174021133 487.5,234.89518522063676 516.6666666666666,213.49191155355496 545.8333333333334,196.01320953383845 575,91.236718675218 604.1666666666666,63.03723557002025 633.3333333333334,74.60036374078717 662.5,77.62515554704707 691.6666666666666,72.70508279888963 720.8333333333334,50 750,128.20426916818252" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8019** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="250" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="137.5" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="225" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="312.5" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="400" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="487.5" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="575" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="662.5" cy="142.18106995884773" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="182.51028806584432" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="115.43209876543254" r="4" fill="#3b82f6"/><circle cx="750" cy="115.02057613168866" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 79.16666666666666,250 108.33333333333333,238.4773662551454 137.5,247.11934156378544 166.66666666666666,229.01234567901028 195.83333333333334,190.32921810699656 225,187.03703703703812 254.16666666666669,168.10699588477516 283.3333333333333,168.10699588477516 312.5,176.7489711934152 341.6666666666667,121.19341563786168 370.8333333333333,50 400,87.448559670782 429.16666666666663,91.56378600823192 458.33333333333337,76.7489711934152 487.5,107.61316872428031 516.6666666666666,104.73251028806574 545.8333333333334,137.24279835391008 575,118.31275720164712 604.1666666666666,138.0658436214015 633.3333333333334,161.1111111111107 662.5,142.18106995884773 691.6666666666666,182.51028806584432 720.8333333333334,115.43209876543254 750,115.02057613168866" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8758** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="137.5" cy="250" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="225" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="312.5" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="400" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="487.5" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="575" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="662.5" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="113.5897435897432" r="4" fill="#3b82f6"/><circle cx="750" cy="101.28205128205113" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 79.16666666666666,230.51282051282044 108.33333333333333,239.74358974358978 137.5,250 166.66666666666666,205.89743589743523 195.83333333333334,142.30769230769204 225,141.28205128205113 254.16666666666669,140.25641025641022 283.3333333333333,140.25641025641022 312.5,115.64102564102615 341.6666666666667,78.71794871794887 370.8333333333333,50 400,57.1794871794875 429.16666666666663,80.76923076923069 458.33333333333337,78.71794871794887 487.5,76.66666666666704 516.6666666666666,99.23076923076931 545.8333333333334,93.07692307692272 575,75.64102564102615 604.1666666666666,105.38461538461591 633.3333333333334,116.66666666666706 662.5,116.66666666666706 691.6666666666666,116.66666666666706 720.8333333333334,113.5897435897432 750,101.28205128205113" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4204** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="137.5" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="225" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="312.5" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="50" r="4" fill="#3b82f6"/><circle cx="400" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="487.5" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="575" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="662.5" cy="78.11244979919735" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="72.48995983935859" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="65.26104417670697" r="4" fill="#3b82f6"/><circle cx="750" cy="71.68674698795127" r="4" fill="#3b82f6"/><polyline points="50,250 79.16666666666666,249.19678714859447 108.33333333333333,250 137.5,242.77108433735017 166.66666666666666,194.57831325301262 195.83333333333334,135.94377510040133 225,114.25702811245006 254.16666666666669,115.86345381526112 283.3333333333333,115.86345381526112 312.5,107.02811244980023 341.6666666666667,77.30923694779182 370.8333333333333,50 400,69.27710843373467 429.16666666666663,83.73493975903611 458.33333333333337,85.34136546184718 487.5,83.73493975903611 516.6666666666666,71.68674698795127 545.8333333333334,68.47389558232912 575,63.65461847389591 604.1666666666666,84.53815261044164 633.3333333333334,77.30923694779182 662.5,78.11244979919735 691.6666666666666,72.48995983935859 720.8333333333334,65.26104417670697 750,71.68674698795127" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4423** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="79.16666666666666" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="108.33333333333333" cy="250" r="4" fill="#3b82f6"/><circle cx="137.5" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="166.66666666666666" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="195.83333333333334" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="225" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="254.16666666666669" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="283.3333333333333" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="312.5" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="341.6666666666667" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="370.8333333333333" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="400" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="429.16666666666663" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="458.33333333333337" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="487.5" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="516.6666666666666" cy="50" r="4" fill="#3b82f6"/><circle cx="545.8333333333334" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="575" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="604.1666666666666" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="633.3333333333334" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="662.5" cy="99.076517150395" r="4" fill="#3b82f6"/><circle cx="691.6666666666666" cy="104.35356200527686" r="4" fill="#3b82f6"/><circle cx="720.8333333333334" cy="115.43535620052745" r="4" fill="#3b82f6"/><circle cx="750" cy="100.65963060686038" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 79.16666666666666,242.0844327176778 108.33333333333333,250 137.5,246.83377308707043 166.66666666666666,220.97625329815276 195.83333333333334,187.73087071240096 225,188.25857519788903 254.16666666666669,188.7862796833771 283.3333333333333,188.7862796833771 312.5,172.95514511873273 341.6666666666667,90.10554089709785 370.8333333333333,60.55408970976253 400,66.35883905013128 429.16666666666663,62.13720316622673 458.33333333333337,62.6649076517148 487.5,60.02638522427446 516.6666666666666,50 545.8333333333334,66.88654353561935 575,54.74934036939261 604.1666666666666,75.85751978891767 633.3333333333334,102.77044854881265 662.5,99.076517150395 691.6666666666666,104.35356200527686 720.8333333333334,115.43535620052745 750,100.65963060686038" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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