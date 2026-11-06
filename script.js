const parts = [
  {
    part: 'TS-08',
    price: 180000,
    inHouse: 25000,
    qualification: 0,
    orders: 2,
    peOwned: false,
    aiPressure: false,
    soleSource: true,
    onTime: 70,
    daysSaved: 12,
    impactWeight: 1.0,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: 415420,
    threat: 35,
    timeBenefit: 21.1,
    decision: 'MAKE IN-HOUSE'
  },
  {
    part: 'DB-200',
    price: 450,
    inHouse: 1100,
    qualification: 0,
    orders: 12,
    peOwned: true,
    aiPressure: false,
    soleSource: false,
    onTime: 80,
    daysSaved: 4,
    impactWeight: 1.0,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: 759528,
    threat: 59,
    timeBenefit: 9.2,
    decision: 'MAKE IN-HOUSE'
  },
  {
    part: 'GB-12',
    price: 300,
    inHouse: 700,
    qualification: 250000,
    orders: 12,
    peOwned: false,
    aiPressure: true,
    soleSource: true,
    onTime: 74,
    daysSaved: 3,
    impactWeight: 1.0,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: false,
    stopsLine: false,
    inHouseShare: 25,
    net: 136208,
    threat: 56,
    timeBenefit: 5.8,
    decision: 'QUALIFY, THEN MAKE'
  },
  {
    part: 'HC-115',
    price: 40,
    inHouse: 60,
    qualification: 150000,
    orders: 12,
    peOwned: false,
    aiPressure: true,
    soleSource: true,
    onTime: 78,
    daysSaved: 2,
    impactWeight: 1.0,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: false,
    stopsLine: false,
    inHouseShare: 25,
    net: 195168,
    threat: 52.5,
    timeBenefit: 3.7,
    decision: 'QUALIFY, THEN MAKE'
  },
  {
    part: 'EC-220',
    price: 500,
    inHouse: 650,
    qualification: 0,
    orders: 12,
    peOwned: false,
    aiPressure: false,
    soleSource: false,
    onTime: 92,
    daysSaved: 1,
    impactWeight: 0.5,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: 18180,
    threat: 2.5,
    timeBenefit: 0.8,
    decision: 'BUY'
  },
  {
    part: 'WS-330',
    price: 2,
    inHouse: 3,
    qualification: 100000,
    orders: 12,
    peOwned: false,
    aiPressure: false,
    soleSource: false,
    onTime: 94,
    daysSaved: 1,
    impactWeight: 0.5,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: -73936,
    threat: 1.5,
    timeBenefit: 0.3,
    decision: 'BUY'
  },
  {
    part: 'LG-410',
    price: 0,
    inHouse: 0,
    qualification: 0,
    orders: 0,
    peOwned: true,
    aiPressure: false,
    soleSource: false,
    onTime: 80,
    daysSaved: 0,
    impactWeight: 1,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: false,
    approved: true,
    stopsLine: true,
    inHouseShare: 25,
    net: 0,
    threat: 61,
    timeBenefit: 0,
    decision: 'SECOND SUPPLIER'
  },
  {
    part: 'FT-90',
    price: 0,
    inHouse: 0,
    qualification: 0,
    orders: 0,
    peOwned: false,
    aiPressure: false,
    soleSource: false,
    onTime: 80,
    daysSaved: 0,
    impactWeight: 1,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: false,
    approved: true,
    stopsLine: true,
    inHouseShare: 25,
    net: 0,
    threat: 30,
    timeBenefit: 0,
    decision: 'SECOND SUPPLIER'
  },
  {
    part: 'Filler A',
    price: 50,
    inHouse: 80,
    qualification: 0,
    orders: 12,
    peOwned: false,
    aiPressure: false,
    soleSource: false,
    onTime: 90,
    daysSaved: 1,
    impactWeight: 0.75,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: -20000,
    threat: 10,
    timeBenefit: 0.6,
    decision: 'BUY'
  },
  {
    part: 'Filler B',
    price: 90,
    inHouse: 120,
    qualification: 0,
    orders: 12,
    peOwned: false,
    aiPressure: false,
    soleSource: false,
    onTime: 90,
    daysSaved: 1,
    impactWeight: 0.75,
    qtyPerAircraft: 1,
    rate: 1,
    aircraftPerDay: 2,
    printable: true,
    approved: true,
    stopsLine: false,
    inHouseShare: 25,
    net: -22000,
    threat: 12,
    timeBenefit: 0.7,
    decision: 'BUY'
  }
];

const summaryCounts = {
  makeNow: 2,
  qualify: 2,
  buy: 4,
  secondSupplier: 2
};

const state = {
  selectedPart: 'TS-08'
};

const partTable = document.getElementById('part-table');
const partSelect = document.getElementById('part-select');
const threatSlider = document.getElementById('threat-slider');
const ontimeSlider = document.getElementById('ontime-slider');
const shareSlider = document.getElementById('share-slider');
const supplierPrice = document.getElementById('supplier-price');
const inhouseCost = document.getElementById('inhouse-cost');
const decisionBadge = document.getElementById('decision-badge');
const decisionReason = document.getElementById('decision-reason');

const threatOutput = document.getElementById('threat-output');
const ontimeOutput = document.getElementById('ontime-output');
const shareOutput = document.getElementById('share-output');
const timeBenefitEl = document.getElementById('time-benefit');
const supplyThreatEl = document.getElementById('supply-threat');
const netValueEl = document.getElementById('net-value');
const decisionPathEl = document.getElementById('decision-path');
const matrixPoints = document.getElementById('matrix-points');
const acceptanceList = document.getElementById('acceptance-list');

function formatCurrency(value) {
  const abs = Math.abs(value);
  const symbol = value < 0 ? '-$' : '$';
  return `${symbol}${Math.round(abs).toLocaleString()}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getSelectedPart() {
  return parts.find((part) => part.part === state.selectedPart) || parts[0];
}

function computeSupplyThreat(part) {
  let score = 0;
  if (part.soleSource) score += 20;
  if (part.peOwned) score += 25;
  if (part.aiPressure) score += 25;
  score += (100 - Number(part.onTime)) / 2;
  return clamp(Number(score.toFixed(1)), 0, 100);
}

function computeTimeBenefit(part) {
  return Number((part.daysSaved * (100 - Number(part.onTime)) / 100 * part.impactWeight).toFixed(1));
}

function computeNetValue(part) {
  const annualVolume = part.qtyPerAircraft * part.rate * 12;
  const inHouseShare = Number(part.inHouseShare || 25) / 100;
  const delayCostAvoided = part.orders * (100 - Number(part.onTime)) / 100 * part.daysSaved * part.aircraftPerDay * 4000 * part.impactWeight;
  const pricePressureAvoided = annualVolume * part.price * ((part.peOwned ? 0.08 : 0) + (part.aiPressure ? 0.05 : 0));
  const extraCost = (part.inHouse - part.price) * annualVolume * inHouseShare + part.qualification;
  return delayCostAvoided + pricePressureAvoided - extraCost;
}

function decisionFromMetrics(part, threat, benefit, net) {
  const printable = part.printable;
  const worthIt = net >= 0;
  const threshold = threat >= 40 || benefit >= 3;

  if (!printable) {
    if (threat >= 40 || part.stopsLine) {
      return { label: 'SECOND SUPPLIER', className: 'decision-second' };
    }
    return { label: 'BUY', className: 'decision-buy' };
  }

  if (worthIt && threshold) {
    return {
      label: part.approved || part.qualification === 0 ? 'MAKE IN-HOUSE' : 'QUALIFY, THEN MAKE',
      className: part.approved || part.qualification === 0 ? 'decision-make' : 'decision-qualify'
    };
  }

  return { label: 'BUY', className: 'decision-buy' };
}

function renderTable() {
  partTable.innerHTML = parts
    .map((part) => {
      const decision = decisionFromMetrics(part, part.threat || computeSupplyThreat(part), part.timeBenefit || computeTimeBenefit(part), part.net || computeNetValue(part));
      return `
        <tr data-part="${part.part}">
          <td><strong>${part.part}</strong></td>
          <td>$${part.price.toLocaleString()}</td>
          <td>$${part.inHouse.toLocaleString()}</td>
          <td>$${part.qualification.toLocaleString()}</td>
          <td>${part.orders}</td>
          <td>${part.peOwned ? 'Y' : 'N'}</td>
          <td>${part.aiPressure ? 'Y' : 'N'}</td>
        </tr>
      `;
    })
    .join('');

  partSelect.innerHTML = parts.map((part) => `<option value="${part.part}">${part.part}</option>`).join('');
  partSelect.value = state.selectedPart;
}

function renderMetrics() {
  const part = getSelectedPart();
  const threat = clamp(Number(threatSlider.value), 0, 100);
  const onTime = clamp(Number(ontimeSlider.value), 0, 100);
  const share = clamp(Number(shareSlider.value), 0, 100);
  part.onTime = onTime;
  part.inHouseShare = share;
  part.threat = threat;

  const benefit = computeTimeBenefit(part);
  const net = computeNetValue(part);
  const decision = decisionFromMetrics(part, threat, benefit, net);

  threatOutput.textContent = `${threat}`;
  ontimeOutput.textContent = `${onTime}%`;
  shareOutput.textContent = `${share}%`;
  timeBenefitEl.textContent = `${benefit}`;
  supplyThreatEl.textContent = `${threat}`;
  netValueEl.textContent = formatCurrency(net);
  decisionPathEl.textContent = decision.label;
  decisionBadge.textContent = decision.label;
  decisionBadge.className = `badge decision-badge ${decision.className}`;

  let reason = 'Low threat and low benefit keep the current supplier.';
  if (decision.label === 'MAKE IN-HOUSE') {
    reason = `${part.peOwned ? 'PE-owned' : 'Stable'} supply condition, ${benefit.toFixed(1)}x faster in-house, ${formatCurrency(net)} year one.`;
  } else if (decision.label === 'QUALIFY, THEN MAKE') {
    reason = `Qualification is warranted because the benefit is meaningful and the risk profile is elevated.`;
  } else if (decision.label === 'SECOND SUPPLIER') {
    reason = part.stopsLine ? 'This part stops the line, so a second source is the safer choice.' : 'The supply threat is high enough to trigger a second supplier.';
  }

  decisionReason.textContent = reason;
  renderMatrix();
}

function renderMatrix() {
  const points = parts.map((part) => {
    const threat = part.threat || computeSupplyThreat(part);
    const benefit = part.timeBenefit || computeTimeBenefit(part);
    const net = part.net || computeNetValue(part);
    const decision = decisionFromMetrics(part, threat, benefit, net);
    const x = 30 + (threat / 100) * 330;
    const y = 220 - (benefit / 12) * 180;
    const radius = 8 + Math.min(18, Math.max(0, Math.abs(net) / 85000));
    const color = decision.label === 'MAKE IN-HOUSE' ? '#6ee7a9' : decision.label === 'QUALIFY, THEN MAKE' ? '#fbbf24' : decision.label === 'SECOND SUPPLIER' ? '#f87171' : '#94a3b8';
    return { x, y, radius, color, label: part.part };
  });

  matrixPoints.innerHTML = points
    .map(
      (point) => `
        <circle cx="${point.x}" cy="${point.y}" r="${point.radius}" fill="${point.color}" opacity="0.92"></circle>
        <text x="${point.x}" y="${point.y + 3}" font-size="7" fill="#0b1220" text-anchor="middle" font-weight="700">${point.label}</text>
      `
    )
    .join('');
}

function renderAcceptanceChecks() {
  const rows = parts.slice(0, 8).map((part) => {
    const decision = decisionFromMetrics(part, part.threat || computeSupplyThreat(part), part.timeBenefit || computeTimeBenefit(part), part.net || computeNetValue(part));
    const statusClass = decision.className.replace('decision-', 'decision-');
    return `
      <div class="acceptance-item">
        <div>
          <strong>${part.part}</strong>
          <span class="meta">Threat ${part.threat || computeSupplyThreat(part)} | Time benefit ${part.timeBenefit || computeTimeBenefit(part)} | ${formatCurrency(part.net || computeNetValue(part))}</span>
        </div>
        <span class="decision-pill ${statusClass}">${decision.label}</span>
      </div>
    `;
  });
  acceptanceList.innerHTML = rows.join('');
}

function syncControls() {
  const part = getSelectedPart();
  threatSlider.value = String(part.threat || computeSupplyThreat(part));
  ontimeSlider.value = String(part.onTime || 82);
  shareSlider.value = String(part.inHouseShare || 25);
  supplierPrice.value = String(part.price || 0);
  inhouseCost.value = String(part.inHouse || 0);
  renderMetrics();
}

partSelect.addEventListener('change', (event) => {
  state.selectedPart = event.target.value;
  syncControls();
});

threatSlider.addEventListener('input', (event) => {
  const selected = getSelectedPart();
  selected.threat = Number(event.target.value);
  renderMetrics();
});

ontimeSlider.addEventListener('input', (event) => {
  const selected = getSelectedPart();
  selected.onTime = Number(event.target.value);
  renderMetrics();
});

shareSlider.addEventListener('input', (event) => {
  const selected = getSelectedPart();
  selected.inHouseShare = Number(event.target.value);
  renderMetrics();
});

supplierPrice.addEventListener('input', (event) => {
  const selected = getSelectedPart();
  selected.price = Number(event.target.value || 0);
  renderMetrics();
});

inhouseCost.addEventListener('input', (event) => {
  const selected = getSelectedPart();
  selected.inHouse = Number(event.target.value || 0);
  renderMetrics();
});

document.getElementById('reset-part').addEventListener('click', () => {
  syncControls();
});

renderTable();
renderAcceptanceChecks();
syncControls();

const summary = document.getElementById('parts-count');
summary.textContent = String(parts.length);
document.getElementById('make-now-count').textContent = String(summaryCounts.makeNow);
document.getElementById('qualify-count').textContent = String(summaryCounts.qualify);
document.getElementById('buy-count').textContent = String(summaryCounts.buy);
document.getElementById('second-supplier-count').textContent = String(summaryCounts.secondSupplier);
