function calculateMaxHeartRate() {
  var ageInput = document.getElementById("age");
  var genderInput = document.getElementById("gender");
  var maxHeartRateInput = document.getElementById("maxHeartRate");
  
  var age = parseInt(ageInput.value);
  var gender = genderInput.value;
  
  if (gender === "male") {
    maxHeartRateInput.value = 220 - age;
  } else {
    maxHeartRateInput.value = 226 - age;
  }
  
  calculateHeartRateZones();
}

function calculateHeartRateZones() {
  var maxHeartRateInput = document.getElementById("maxHeartRate");
  var restingHeartRateInput = document.getElementById("restingHeartRate");
  
  var maxHeartRate = parseInt(maxHeartRateInput.value);
  var restingHeartRate = parseInt(restingHeartRateInput.value);
  
  if (restingHeartRate) {
    var reserveHeartRate = maxHeartRate - restingHeartRate;
    var zone1 = Math.round(0.5 * reserveHeartRate + restingHeartRate);
    var zone2 = Math.round(0.6 * reserveHeartRate + restingHeartRate);
    var zone3 = Math.round(0.7 * reserveHeartRate + restingHeartRate);
    var zone4 = Math.round(0.8 * reserveHeartRate + restingHeartRate);
    var zone5 = Math.round(0.9 * reserveHeartRate + restingHeartRate);
  } else {
    var zone1 = Math.round(0.6 * maxHeartRate);
    var zone2 = Math.round(0.65 * maxHeartRate);
    var zone3 = Math.round(0.75 * maxHeartRate);
    var zone4 = Math.round(0.85 * maxHeartRate);
    var zone5 = Math.round(0.95 * maxHeartRate);
  }
  
  var resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = ""; // Réinitialiser le tableau
    
  var row = document.createElement("tr");
  row.className = "zone1";
  var methodNameCell = document.createElement("th");
  methodNameCell.textContent = "Zone 1 (Récupération)";
  row.appendChild(methodNameCell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone1;
  row.appendChild(zone1Cell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone2 - 1;
  row.appendChild(zone1Cell);
  resultTable.appendChild(row);
  
  var row = document.createElement("tr");
  row.className = "zone2";
  var methodNameCell = document.createElement("th");
  methodNameCell.textContent = "Zone 2 (Endurance)";
  row.appendChild(methodNameCell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone2;
  row.appendChild(zone1Cell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone3 - 1;
  row.appendChild(zone1Cell);
  resultTable.appendChild(row);
  
  var row = document.createElement("tr");
  row.className = "zone3";
  var methodNameCell = document.createElement("th");
  methodNameCell.textContent = "Zone 3 (Résistance douce)";
  row.appendChild(methodNameCell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone3;
  row.appendChild(zone1Cell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone4 - 1;
  row.appendChild(zone1Cell);
  resultTable.appendChild(row);
  
  var row = document.createElement("tr");
  row.className = "zone4";
  var methodNameCell = document.createElement("th");
  methodNameCell.textContent = "Zone 4 (Résistance dure)";
  row.appendChild(methodNameCell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone4;
  row.appendChild(zone1Cell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone5 - 1;
  row.appendChild(zone1Cell);
  resultTable.appendChild(row);
  
  var row = document.createElement("tr");
  row.className = "zone5";
  var methodNameCell = document.createElement("th");
  methodNameCell.textContent = "Zone 5 (Puissance)";
  row.appendChild(methodNameCell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone5;
  row.appendChild(zone1Cell);
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = maxHeartRate;
  row.appendChild(zone1Cell);
  resultTable.appendChild(row);
  
  document.getElementById("result").style.display = "block";
}

document.getElementById("gender").addEventListener("change", calculateMaxHeartRate);
document.getElementById("age").addEventListener("input", calculateMaxHeartRate);
document.getElementById("maxHeartRate").addEventListener("input", calculateHeartRateZones);
document.getElementById("restingHeartRate").addEventListener("input", calculateHeartRateZones);
