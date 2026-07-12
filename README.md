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

**Last Updated:** 2026-07-12

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.2736** | 123.3291 | 122.4409 | 122.9944 |
| Indian Rupee | INR | **95.5482** | 95.6046 | 94.4113 | 94.9181 |
| Chinese Yuan | CNY | **6.79** | 6.8177 | 6.7691 | 6.7934 |
| Euro | EUR | **0.8755** | 0.8808 | 0.8613 | 0.8736 |
| Canadian Dollar | CAD | **1.4151** | 1.4231 | 1.3982 | 1.4152 |
| Australian Dollar | AUD | **1.4387** | 1.4519 | 1.414 | 1.4371 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.2736** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="75" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="100" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="125" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="150" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="175" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="200" cy="250" r="4" fill="#3b82f6"/><circle cx="225" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="250" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="275" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="300" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="325" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="350" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="375" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="400" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="425" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="450" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="525" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="550" cy="50" r="4" fill="#3b82f6"/><circle cx="575" cy="52.58950686782214" r="4" fill="#3b82f6"/><circle cx="600" cy="80.19590182391444" r="4" fill="#3b82f6"/><circle cx="625" cy="62.24949335735223" r="4" fill="#3b82f6"/><circle cx="650" cy="75.1970276964629" r="4" fill="#3b82f6"/><circle cx="675" cy="50.85566313893228" r="4" fill="#3b82f6"/><circle cx="700" cy="73.98108534113875" r="4" fill="#3b82f6"/><circle cx="725" cy="60.29047511821586" r="4" fill="#3b82f6"/><circle cx="750" cy="62.497185318620836" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 75,161.0110335510012 100,173.39563161450198 125,169.43256023418184 150,170.42332807925948 175,165.42445395181116 200,250 225,232.90925467237008 250,232.90925467237008 275,211.76536816032524 300,209.85138482323626 325,128.60842152668178 350,119.82661562710926 375,130.22967800044836 400,127.77527583877479 425,125.95136230578697 450,93.66133753659082 474.99999999999994,77.26863319072253 500.00000000000006,85.73519477595056 525,63.37536590857841 550,50 575,52.58950686782214 600,80.19590182391444 625,62.24949335735223 650,75.1970276964629 675,50.85566313893228 700,73.98108534113875 725,60.29047511821586 750,62.497185318620836" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.5482** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="101.10198608899715" r="4" fill="#3b82f6"/><circle cx="75" cy="121.75060755887" r="4" fill="#3b82f6"/><circle cx="100" cy="200.97628425374975" r="4" fill="#3b82f6"/><circle cx="125" cy="215.40685494008198" r="4" fill="#3b82f6"/><circle cx="150" cy="206.07139864241984" r="4" fill="#3b82f6"/><circle cx="175" cy="249.39663119081442" r="4" fill="#3b82f6"/><circle cx="200" cy="246.6647113047839" r="4" fill="#3b82f6"/><circle cx="225" cy="250" r="4" fill="#3b82f6"/><circle cx="250" cy="250" r="4" fill="#3b82f6"/><circle cx="275" cy="200.92600351965174" r="4" fill="#3b82f6"/><circle cx="300" cy="182.55677532892022" r="4" fill="#3b82f6"/><circle cx="325" cy="209.52400905053204" r="4" fill="#3b82f6"/><circle cx="350" cy="241.36847397971943" r="4" fill="#3b82f6"/><circle cx="375" cy="242.82661526858303" r="4" fill="#3b82f6"/><circle cx="400" cy="245.5920556440114" r="4" fill="#3b82f6"/><circle cx="425" cy="236.77616693203655" r="4" fill="#3b82f6"/><circle cx="450" cy="218.03821335791412" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="202.73610994720613" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="111.00729070644464" r="4" fill="#3b82f6"/><circle cx="525" cy="86.31945026397412" r="4" fill="#3b82f6"/><circle cx="550" cy="96.44263806251614" r="4" fill="#3b82f6"/><circle cx="575" cy="99.09075672504838" r="4" fill="#3b82f6"/><circle cx="600" cy="94.78337383725815" r="4" fill="#3b82f6"/><circle cx="625" cy="74.90572362356505" r="4" fill="#3b82f6"/><circle cx="650" cy="143.37132322131933" r="4" fill="#3b82f6"/><circle cx="675" cy="50" r="4" fill="#3b82f6"/><circle cx="700" cy="71.95592055644002" r="4" fill="#3b82f6"/><circle cx="725" cy="77.72144473309382" r="4" fill="#3b82f6"/><circle cx="750" cy="59.45277801056068" r="4" fill="#3b82f6"/><polyline points="50,101.10198608899715 75,121.75060755887 100,200.97628425374975 125,215.40685494008198 150,206.07139864241984 175,249.39663119081442 200,246.6647113047839 225,250 250,250 275,200.92600351965174 300,182.55677532892022 325,209.52400905053204 350,241.36847397971943 375,242.82661526858303 400,245.5920556440114 425,236.77616693203655 450,218.03821335791412 474.99999999999994,202.73610994720613 500.00000000000006,111.00729070644464 525,86.31945026397412 550,96.44263806251614 575,99.09075672504838 600,94.78337383725815 625,74.90572362356505 650,143.37132322131933 675,50 700,71.95592055644002 725,77.72144473309382 750,59.45277801056068" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.79** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="75" cy="250" r="4" fill="#3b82f6"/><circle cx="100" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="125" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="150" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="175" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="200" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="225" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="250" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="275" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="300" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="325" cy="50" r="4" fill="#3b82f6"/><circle cx="350" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="375" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="400" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="425" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="450" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="525" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="550" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="575" cy="142.18106995884773" r="4" fill="#3b82f6"/><circle cx="600" cy="182.51028806584432" r="4" fill="#3b82f6"/><circle cx="625" cy="115.43209876543254" r="4" fill="#3b82f6"/><circle cx="650" cy="115.02057613168866" r="4" fill="#3b82f6"/><circle cx="675" cy="80.8641975308651" r="4" fill="#3b82f6"/><circle cx="700" cy="122.01646090534946" r="4" fill="#3b82f6"/><circle cx="725" cy="185.3909465020589" r="4" fill="#3b82f6"/><circle cx="750" cy="163.99176954732525" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 75,250 100,238.4773662551454 125,247.11934156378544 150,229.01234567901028 175,190.32921810699656 200,187.03703703703812 225,168.10699588477516 250,168.10699588477516 275,176.7489711934152 300,121.19341563786168 325,50 350,87.448559670782 375,91.56378600823192 400,76.7489711934152 425,107.61316872428031 450,104.73251028806574 474.99999999999994,137.24279835391008 500.00000000000006,118.31275720164712 525,138.0658436214015 550,161.1111111111107 575,142.18106995884773 600,182.51028806584432 625,115.43209876543254 650,115.02057613168866 675,80.8641975308651 700,122.01646090534946 725,185.3909465020589 750,163.99176954732525" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8755** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="75" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="100" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="125" cy="250" r="4" fill="#3b82f6"/><circle cx="150" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="175" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="200" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="225" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="250" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="275" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="300" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="325" cy="50" r="4" fill="#3b82f6"/><circle cx="350" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="375" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="400" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="425" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="450" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="525" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="550" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="575" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="600" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="625" cy="113.5897435897432" r="4" fill="#3b82f6"/><circle cx="650" cy="101.28205128205113" r="4" fill="#3b82f6"/><circle cx="675" cy="98.2051282051284" r="4" fill="#3b82f6"/><circle cx="700" cy="111.53846153846136" r="4" fill="#3b82f6"/><circle cx="725" cy="103.33333333333294" r="4" fill="#3b82f6"/><circle cx="750" cy="104.35897435897499" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 75,230.51282051282044 100,239.74358974358978 125,250 150,205.89743589743523 175,142.30769230769204 200,141.28205128205113 225,140.25641025641022 250,140.25641025641022 275,115.64102564102615 300,78.71794871794887 325,50 350,57.1794871794875 375,80.76923076923069 400,78.71794871794887 425,76.66666666666704 450,99.23076923076931 474.99999999999994,93.07692307692272 500.00000000000006,75.64102564102615 525,105.38461538461591 550,116.66666666666706 575,116.66666666666706 600,116.66666666666706 625,113.5897435897432 650,101.28205128205113 675,98.2051282051284 700,111.53846153846136 725,103.33333333333294 750,104.35897435897499" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4151** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="75" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="100" cy="250" r="4" fill="#3b82f6"/><circle cx="125" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="150" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="175" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="200" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="225" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="250" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="275" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="300" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="325" cy="50" r="4" fill="#3b82f6"/><circle cx="350" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="375" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="400" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="425" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="450" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="525" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="550" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="575" cy="78.11244979919735" r="4" fill="#3b82f6"/><circle cx="600" cy="72.48995983935859" r="4" fill="#3b82f6"/><circle cx="625" cy="65.26104417670697" r="4" fill="#3b82f6"/><circle cx="650" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="675" cy="96.58634538152647" r="4" fill="#3b82f6"/><circle cx="700" cy="97.389558232932" r="4" fill="#3b82f6"/><circle cx="725" cy="112.65060240963899" r="4" fill="#3b82f6"/><circle cx="750" cy="114.25702811245006" r="4" fill="#3b82f6"/><polyline points="50,250 75,249.19678714859447 100,250 125,242.77108433735017 150,194.57831325301262 175,135.94377510040133 200,114.25702811245006 225,115.86345381526112 250,115.86345381526112 275,107.02811244980023 300,77.30923694779182 325,50 350,69.27710843373467 375,83.73493975903611 400,85.34136546184718 425,83.73493975903611 450,71.68674698795127 474.99999999999994,68.47389558232912 500.00000000000006,63.65461847389591 525,84.53815261044164 550,77.30923694779182 575,78.11244979919735 600,72.48995983935859 625,65.26104417670697 650,71.68674698795127 675,96.58634538152647 700,97.389558232932 725,112.65060240963899 750,114.25702811245006" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4387** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="75" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="100" cy="250" r="4" fill="#3b82f6"/><circle cx="125" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="150" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="175" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="200" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="225" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="250" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="275" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="300" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="325" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="350" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="375" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="400" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="425" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="450" cy="50" r="4" fill="#3b82f6"/><circle cx="474.99999999999994" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="500.00000000000006" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="525" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="550" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="575" cy="99.076517150395" r="4" fill="#3b82f6"/><circle cx="600" cy="104.35356200527686" r="4" fill="#3b82f6"/><circle cx="625" cy="115.43535620052745" r="4" fill="#3b82f6"/><circle cx="650" cy="100.65963060686038" r="4" fill="#3b82f6"/><circle cx="675" cy="98.54881266490693" r="4" fill="#3b82f6"/><circle cx="700" cy="107.51978891820526" r="4" fill="#3b82f6"/><circle cx="725" cy="119.65699208443199" r="4" fill="#3b82f6"/><circle cx="750" cy="119.65699208443199" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 75,242.0844327176778 100,250 125,246.83377308707043 150,220.97625329815276 175,187.73087071240096 200,188.25857519788903 225,188.7862796833771 250,188.7862796833771 275,172.95514511873273 300,90.10554089709785 325,60.55408970976253 350,66.35883905013128 375,62.13720316622673 400,62.6649076517148 425,60.02638522427446 450,50 474.99999999999994,66.88654353561935 500.00000000000006,54.74934036939261 525,75.85751978891767 550,102.77044854881265 575,99.076517150395 600,104.35356200527686 625,115.43535620052745 650,100.65963060686038 675,98.54881266490693 700,107.51978891820526 725,119.65699208443199 750,119.65699208443199" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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