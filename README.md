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

**Last Updated:** 2026-07-07

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.2747** | 123.3291 | 122.4409 | 122.9382 |
| Indian Rupee | INR | **95.456** | 95.456 | 94.4113 | 94.813 |
| Chinese Yuan | CNY | **6.8018** | 6.8177 | 6.7691 | 6.7925 |
| Euro | EUR | **0.8746** | 0.8808 | 0.8613 | 0.8732 |
| Canadian Dollar | CAD | **1.4212** | 1.4231 | 1.3982 | 1.4148 |
| Australian Dollar | AUD | **1.4395** | 1.4519 | 1.414 | 1.4363 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.2747** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="250" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="50" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="52.58950686782214" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="80.19590182391444" r="4" fill="#3b82f6"/><circle cx="750" cy="62.24949335735223" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 80.43478260869566,161.0110335510012 110.86956521739131,173.39563161450198 141.30434782608694,169.43256023418184 171.73913043478262,170.42332807925948 202.17391304347825,165.42445395181116 232.6086956521739,250 263.0434782608696,232.90925467237008 293.47826086956525,232.90925467237008 323.9130434782609,211.76536816032524 354.3478260869565,209.85138482323626 384.7826086956522,128.60842152668178 415.2173913043478,119.82661562710926 445.65217391304344,130.22967800044836 476.0869565217392,127.77527583877479 506.5217391304348,125.95136230578697 536.9565217391305,93.66133753659082 567.391304347826,77.26863319072253 597.8260869565217,85.73519477595056 628.2608695652174,63.37536590857841 658.695652173913,50 689.1304347826086,52.58950686782214 719.5652173913044,80.19590182391444 750,62.24949335735223" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.456** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="79.92246577964981" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="103.50818416770309" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="194.0030630803097" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="210.48626399923404" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="199.82291566956977" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="249.3108069302181" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="246.19029386426595" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="250" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="250" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="193.94563032449543" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="172.96353020005785" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="203.7666315688713" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="240.14071025174616" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="241.80626017038392" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="244.96506174021133" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="234.89518522063676" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="213.49191155355496" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="196.01320953383845" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="91.236718675218" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="63.03723557002025" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="74.60036374078717" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="77.62515554704707" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="72.70508279888963" r="4" fill="#3b82f6"/><circle cx="750" cy="50" r="4" fill="#3b82f6"/><polyline points="50,79.92246577964981 80.43478260869566,103.50818416770309 110.86956521739131,194.0030630803097 141.30434782608694,210.48626399923404 171.73913043478262,199.82291566956977 202.17391304347825,249.3108069302181 232.6086956521739,246.19029386426595 263.0434782608696,250 293.47826086956525,250 323.9130434782609,193.94563032449543 354.3478260869565,172.96353020005785 384.7826086956522,203.7666315688713 415.2173913043478,240.14071025174616 445.65217391304344,241.80626017038392 476.0869565217392,244.96506174021133 506.5217391304348,234.89518522063676 536.9565217391305,213.49191155355496 567.391304347826,196.01320953383845 597.8260869565217,91.236718675218 628.2608695652174,63.03723557002025 658.695652173913,74.60036374078717 689.1304347826086,77.62515554704707 719.5652173913044,72.70508279888963 750,50" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.8018** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="250" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="50" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="142.18106995884773" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="182.51028806584432" r="4" fill="#3b82f6"/><circle cx="750" cy="115.43209876543254" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 80.43478260869566,250 110.86956521739131,238.4773662551454 141.30434782608694,247.11934156378544 171.73913043478262,229.01234567901028 202.17391304347825,190.32921810699656 232.6086956521739,187.03703703703812 263.0434782608696,168.10699588477516 293.47826086956525,168.10699588477516 323.9130434782609,176.7489711934152 354.3478260869565,121.19341563786168 384.7826086956522,50 415.2173913043478,87.448559670782 445.65217391304344,91.56378600823192 476.0869565217392,76.7489711934152 506.5217391304348,107.61316872428031 536.9565217391305,104.73251028806574 567.391304347826,137.24279835391008 597.8260869565217,118.31275720164712 628.2608695652174,138.0658436214015 658.695652173913,161.1111111111107 689.1304347826086,142.18106995884773 719.5652173913044,182.51028806584432 750,115.43209876543254" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8746** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="250" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="50" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="750" cy="113.5897435897432" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 80.43478260869566,230.51282051282044 110.86956521739131,239.74358974358978 141.30434782608694,250 171.73913043478262,205.89743589743523 202.17391304347825,142.30769230769204 232.6086956521739,141.28205128205113 263.0434782608696,140.25641025641022 293.47826086956525,140.25641025641022 323.9130434782609,115.64102564102615 354.3478260869565,78.71794871794887 384.7826086956522,50 415.2173913043478,57.1794871794875 445.65217391304344,80.76923076923069 476.0869565217392,78.71794871794887 506.5217391304348,76.66666666666704 536.9565217391305,99.23076923076931 567.391304347826,93.07692307692272 597.8260869565217,75.64102564102615 628.2608695652174,105.38461538461591 658.695652173913,116.66666666666706 689.1304347826086,116.66666666666706 719.5652173913044,116.66666666666706 750,113.5897435897432" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4212** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="250" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="50" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="78.11244979919735" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="72.48995983935859" r="4" fill="#3b82f6"/><circle cx="750" cy="65.26104417670697" r="4" fill="#3b82f6"/><polyline points="50,250 80.43478260869566,249.19678714859447 110.86956521739131,250 141.30434782608694,242.77108433735017 171.73913043478262,194.57831325301262 202.17391304347825,135.94377510040133 232.6086956521739,114.25702811245006 263.0434782608696,115.86345381526112 293.47826086956525,115.86345381526112 323.9130434782609,107.02811244980023 354.3478260869565,77.30923694779182 384.7826086956522,50 415.2173913043478,69.27710843373467 445.65217391304344,83.73493975903611 476.0869565217392,85.34136546184718 506.5217391304348,83.73493975903611 536.9565217391305,71.68674698795127 567.391304347826,68.47389558232912 597.8260869565217,63.65461847389591 628.2608695652174,84.53815261044164 658.695652173913,77.30923694779182 689.1304347826086,78.11244979919735 719.5652173913044,72.48995983935859 750,65.26104417670697" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4395** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="80.43478260869566" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="110.86956521739131" cy="250" r="4" fill="#3b82f6"/><circle cx="141.30434782608694" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="171.73913043478262" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="202.17391304347825" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="232.6086956521739" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="263.0434782608696" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="293.47826086956525" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="323.9130434782609" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="354.3478260869565" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="384.7826086956522" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="415.2173913043478" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="445.65217391304344" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="476.0869565217392" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="506.5217391304348" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="536.9565217391305" cy="50" r="4" fill="#3b82f6"/><circle cx="567.391304347826" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="597.8260869565217" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="628.2608695652174" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="658.695652173913" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="689.1304347826086" cy="99.076517150395" r="4" fill="#3b82f6"/><circle cx="719.5652173913044" cy="104.35356200527686" r="4" fill="#3b82f6"/><circle cx="750" cy="115.43535620052745" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 80.43478260869566,242.0844327176778 110.86956521739131,250 141.30434782608694,246.83377308707043 171.73913043478262,220.97625329815276 202.17391304347825,187.73087071240096 232.6086956521739,188.25857519788903 263.0434782608696,188.7862796833771 293.47826086956525,188.7862796833771 323.9130434782609,172.95514511873273 354.3478260869565,90.10554089709785 384.7826086956522,60.55408970976253 415.2173913043478,66.35883905013128 445.65217391304344,62.13720316622673 476.0869565217392,62.6649076517148 506.5217391304348,60.02638522427446 536.9565217391305,50 567.391304347826,66.88654353561935 597.8260869565217,54.74934036939261 628.2608695652174,75.85751978891767 658.695652173913,102.77044854881265 689.1304347826086,99.076517150395 719.5652173913044,104.35356200527686 750,115.43535620052745" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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