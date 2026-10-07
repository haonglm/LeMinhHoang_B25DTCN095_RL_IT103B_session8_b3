let portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
let portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
let portPowersKw = [250, 150, 60, 250, 60, 150];

let indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
  portStatuses[indexS01] = 'CHARGING';
}

let indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
  portStatuses[indexS03] = 'AVAILABLE';
}

let countAvailable = 0;
let maxPower = 0;
let bestPort = '';

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === 'AVAILABLE') {
    countAvailable++;

    if (portPowersKw[i] > maxPower) {
      maxPower = portPowersKw[i];
      bestPort = portIds[i];
    }
  }
}

for (let i = 0; i < portIds.length; i++) {
  console.log("Trụ: " + portIds[i] + " | Trạng thái: " + portStatuses[i] + " | Công suất: " + portPowersKw[i] + " kW");
}

console.log("--------------------------------");
console.log("Tổng số trụ AVAILABLE: " + countAvailable);
console.log("Trụ sẵn sàng có công suất lớn nhất: " + bestPort + " (" + maxPower + " kW)");