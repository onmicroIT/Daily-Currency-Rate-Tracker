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

**Last Updated:** 2026-07-06

### 📊 Current Rates Summary

| Currency | Code | Current Rate (1 USD) | 30-Day High | 30-Day Low | Average |
|----------|------|----------------------|-------------|------------|---------|
| Bangladesh Taka | BDT | **123.195** | 123.3291 | 122.4409 | 122.9236 |
| Indian Rupee | INR | **95.3374** | 95.3879 | 94.4113 | 94.785 |
| Chinese Yuan | CNY | **6.7855** | 6.8177 | 6.7691 | 6.7921 |
| Euro | EUR | **0.8743** | 0.8808 | 0.8613 | 0.8731 |
| Canadian Dollar | CAD | **1.4203** | 1.4231 | 1.3982 | 1.4145 |
| Australian Dollar | AUD | **1.4416** | 1.4519 | 1.414 | 1.4362 |

### 📈 30-Day Trend Charts

#### Bangladesh Taka (BDT)
**Current Rate:** 1 USD = **123.195** BDT

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="137.90812879982002" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="161.0110335510012" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="173.39563161450198" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="169.43256023418184" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="170.42332807925948" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="165.42445395181116" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="250" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="232.90925467237008" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="211.76536816032524" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="209.85138482323626" r="4" fill="#3b82f6"/><circle cx="400" cy="128.60842152668178" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="119.82661562710926" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="130.22967800044836" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="127.77527583877479" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="125.95136230578697" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="93.66133753659082" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="77.26863319072253" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="85.73519477595056" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="63.37536590857841" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="50" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="52.58950686782214" r="4" fill="#3b82f6"/><circle cx="750" cy="80.19590182391444" r="4" fill="#3b82f6"/><polyline points="50,137.90812879982002 81.81818181818181,161.0110335510012 113.63636363636364,173.39563161450198 145.45454545454544,169.43256023418184 177.27272727272728,170.42332807925948 209.0909090909091,165.42445395181116 240.9090909090909,250 272.72727272727275,232.90925467237008 304.54545454545456,232.90925467237008 336.3636363636364,211.76536816032524 368.1818181818182,209.85138482323626 400,128.60842152668178 431.8181818181818,119.82661562710926 463.6363636363637,130.22967800044836 495.45454545454544,127.77527583877479 527.2727272727273,125.95136230578697 559.0909090909091,93.66133753659082 590.9090909090909,77.26863319072253 622.7272727272727,85.73519477595056 654.5454545454545,63.37536590857841 686.3636363636364,50 718.1818181818182,52.58950686782214 750,80.19590182391444" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to BDT - 30 Days Trend</text></svg>

#### Indian Rupee (INR)
**Current Rate:** 1 USD = **95.3374** INR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="68.0626663936105" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="93.2930575465895" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="190.09830022527083" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="207.73090313331946" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="196.32398115912298" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="249.26274831046368" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="245.92463649395725" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="250" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="250" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="190.03686258447712" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="167.59164448085232" r="4" fill="#3b82f6"/><circle cx="400" cy="200.54269916035204" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="239.45320499692727" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="241.23489657997143" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="244.61396682367274" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="233.8419004710211" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="210.94613966823553" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="192.24861765308313" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="80.16588163014552" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="50" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="62.369445013311704" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="65.60516076182668" r="4" fill="#3b82f6"/><circle cx="750" cy="60.34200286708976" r="4" fill="#3b82f6"/><polyline points="50,68.0626663936105 81.81818181818181,93.2930575465895 113.63636363636364,190.09830022527083 145.45454545454544,207.73090313331946 177.27272727272728,196.32398115912298 209.0909090909091,249.26274831046368 240.9090909090909,245.92463649395725 272.72727272727275,250 304.54545454545456,250 336.3636363636364,190.03686258447712 368.1818181818182,167.59164448085232 400,200.54269916035204 431.8181818181818,239.45320499692727 463.6363636363637,241.23489657997143 495.45454545454544,244.61396682367274 527.2727272727273,233.8419004710211 559.0909090909091,210.94613966823553 590.9090909090909,192.24861765308313 622.7272727272727,80.16588163014552 654.5454545454545,50 686.3636363636364,62.369445013311704 718.1818181818182,65.60516076182668 750,60.34200286708976" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to INR - 30 Days Trend</text></svg>

#### Chinese Yuan (CNY)
**Current Rate:** 1 USD = **6.7855** CNY

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="198.14814814814883" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="250" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="238.4773662551454" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="247.11934156378544" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="229.01234567901028" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="190.32921810699656" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="187.03703703703812" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="168.10699588477516" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="176.7489711934152" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="121.19341563786168" r="4" fill="#3b82f6"/><circle cx="400" cy="50" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="87.448559670782" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="91.56378600823192" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="76.7489711934152" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="107.61316872428031" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="104.73251028806574" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="137.24279835391008" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="118.31275720164712" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="138.0658436214015" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="161.1111111111107" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="142.18106995884773" r="4" fill="#3b82f6"/><circle cx="750" cy="182.51028806584432" r="4" fill="#3b82f6"/><polyline points="50,198.14814814814883 81.81818181818181,250 113.63636363636364,238.4773662551454 145.45454545454544,247.11934156378544 177.27272727272728,229.01234567901028 209.0909090909091,190.32921810699656 240.9090909090909,187.03703703703812 272.72727272727275,168.10699588477516 304.54545454545456,168.10699588477516 336.3636363636364,176.7489711934152 368.1818181818182,121.19341563786168 400,50 431.8181818181818,87.448559670782 463.6363636363637,91.56378600823192 495.45454545454544,76.7489711934152 527.2727272727273,107.61316872428031 559.0909090909091,104.73251028806574 590.9090909090909,137.24279835391008 622.7272727272727,118.31275720164712 654.5454545454545,138.0658436214015 686.3636363636364,161.1111111111107 718.1818181818182,142.18106995884773 750,182.51028806584432" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CNY - 30 Days Trend</text></svg>

#### Euro (EUR)
**Current Rate:** 1 USD = **0.8743** EUR

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="217.17948717948636" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="230.51282051282044" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="239.74358974358978" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="250" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="205.89743589743523" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="142.30769230769204" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="141.28205128205113" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="140.25641025641022" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="115.64102564102615" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="400" cy="50" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="57.1794871794875" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="80.76923076923069" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="78.71794871794887" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="76.66666666666704" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="99.23076923076931" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="93.07692307692272" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="75.64102564102615" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="105.38461538461591" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="116.66666666666706" r="4" fill="#3b82f6"/><circle cx="750" cy="116.66666666666706" r="4" fill="#3b82f6"/><polyline points="50,217.17948717948636 81.81818181818181,230.51282051282044 113.63636363636364,239.74358974358978 145.45454545454544,250 177.27272727272728,205.89743589743523 209.0909090909091,142.30769230769204 240.9090909090909,141.28205128205113 272.72727272727275,140.25641025641022 304.54545454545456,140.25641025641022 336.3636363636364,115.64102564102615 368.1818181818182,78.71794871794887 400,50 431.8181818181818,57.1794871794875 463.6363636363637,80.76923076923069 495.45454545454544,78.71794871794887 527.2727272727273,76.66666666666704 559.0909090909091,99.23076923076931 590.9090909090909,93.07692307692272 622.7272727272727,75.64102564102615 654.5454545454545,105.38461538461591 686.3636363636364,116.66666666666706 718.1818181818182,116.66666666666706 750,116.66666666666706" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to EUR - 30 Days Trend</text></svg>

#### Canadian Dollar (CAD)
**Current Rate:** 1 USD = **1.4203** CAD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="250" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="249.19678714859447" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="250" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="242.77108433735017" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="194.57831325301262" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="135.94377510040133" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="114.25702811245006" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="115.86345381526112" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="107.02811244980023" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="400" cy="50" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="69.27710843373467" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="85.34136546184718" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="83.73493975903611" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="71.68674698795127" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="68.47389558232912" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="63.65461847389591" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="84.53815261044164" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="77.30923694779182" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="78.11244979919735" r="4" fill="#3b82f6"/><circle cx="750" cy="72.48995983935859" r="4" fill="#3b82f6"/><polyline points="50,250 81.81818181818181,249.19678714859447 113.63636363636364,250 145.45454545454544,242.77108433735017 177.27272727272728,194.57831325301262 209.0909090909091,135.94377510040133 240.9090909090909,114.25702811245006 272.72727272727275,115.86345381526112 304.54545454545456,115.86345381526112 336.3636363636364,107.02811244980023 368.1818181818182,77.30923694779182 400,50 431.8181818181818,69.27710843373467 463.6363636363637,83.73493975903611 495.45454545454544,85.34136546184718 527.2727272727273,83.73493975903611 559.0909090909091,71.68674698795127 590.9090909090909,68.47389558232912 622.7272727272727,63.65461847389591 654.5454545454545,84.53815261044164 686.3636363636364,77.30923694779182 718.1818181818182,78.11244979919735 750,72.48995983935859" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to CAD - 30 Days Trend</text></svg>

#### Australian Dollar (AUD)
**Current Rate:** 1 USD = **1.4416** AUD

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg" style="background:#f8f9fa;border:1px solid #ddd;border-radius:8px;"><circle cx="50" cy="216.7546174142482" r="4" fill="#3b82f6"/><circle cx="81.81818181818181" cy="242.0844327176778" r="4" fill="#3b82f6"/><circle cx="113.63636363636364" cy="250" r="4" fill="#3b82f6"/><circle cx="145.45454545454544" cy="246.83377308707043" r="4" fill="#3b82f6"/><circle cx="177.27272727272728" cy="220.97625329815276" r="4" fill="#3b82f6"/><circle cx="209.0909090909091" cy="187.73087071240096" r="4" fill="#3b82f6"/><circle cx="240.9090909090909" cy="188.25857519788903" r="4" fill="#3b82f6"/><circle cx="272.72727272727275" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="304.54545454545456" cy="188.7862796833771" r="4" fill="#3b82f6"/><circle cx="336.3636363636364" cy="172.95514511873273" r="4" fill="#3b82f6"/><circle cx="368.1818181818182" cy="90.10554089709785" r="4" fill="#3b82f6"/><circle cx="400" cy="60.55408970976253" r="4" fill="#3b82f6"/><circle cx="431.8181818181818" cy="66.35883905013128" r="4" fill="#3b82f6"/><circle cx="463.6363636363637" cy="62.13720316622673" r="4" fill="#3b82f6"/><circle cx="495.45454545454544" cy="62.6649076517148" r="4" fill="#3b82f6"/><circle cx="527.2727272727273" cy="60.02638522427446" r="4" fill="#3b82f6"/><circle cx="559.0909090909091" cy="50" r="4" fill="#3b82f6"/><circle cx="590.9090909090909" cy="66.88654353561935" r="4" fill="#3b82f6"/><circle cx="622.7272727272727" cy="54.74934036939261" r="4" fill="#3b82f6"/><circle cx="654.5454545454545" cy="75.85751978891767" r="4" fill="#3b82f6"/><circle cx="686.3636363636364" cy="102.77044854881265" r="4" fill="#3b82f6"/><circle cx="718.1818181818182" cy="99.076517150395" r="4" fill="#3b82f6"/><circle cx="750" cy="104.35356200527686" r="4" fill="#3b82f6"/><polyline points="50,216.7546174142482 81.81818181818181,242.0844327176778 113.63636363636364,250 145.45454545454544,246.83377308707043 177.27272727272728,220.97625329815276 209.0909090909091,187.73087071240096 240.9090909090909,188.25857519788903 272.72727272727275,188.7862796833771 304.54545454545456,188.7862796833771 336.3636363636364,172.95514511873273 368.1818181818182,90.10554089709785 400,60.55408970976253 431.8181818181818,66.35883905013128 463.6363636363637,62.13720316622673 495.45454545454544,62.6649076517148 527.2727272727273,60.02638522427446 559.0909090909091,50 590.9090909090909,66.88654353561935 622.7272727272727,54.74934036939261 654.5454545454545,75.85751978891767 686.3636363636364,102.77044854881265 718.1818181818182,99.076517150395 750,104.35356200527686" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><text x="400" y="35" text-anchor="middle" font-size="18" font-weight="bold">USD to AUD - 30 Days Trend</text></svg>

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