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
  
  var resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = ""; // Réinitialiser le tableau
  
  var row = document.createElement("tr");
  
  var methodNameCell = document.createElement("td");
  methodNameCell.textContent = "Fréquence cardiaque maximale de zone :";
  row.appendChild(methodNameCell);
  
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
  
  var zone1Cell = document.createElement("td");
  zone1Cell.textContent = zone1;
  row.appendChild(zone1Cell);
  
  var zone2Cell = document.createElement("td");
  zone2Cell.textContent = zone2;
  row.appendChild(zone2Cell);
  
  var zone3Cell = document.createElement("td");
  zone3Cell.textContent = zone3;
  row.appendChild(zone3Cell);
  
  var zone4Cell = document.createElement("td");
  zone4Cell.textContent = zone4;
  row.appendChild(zone4Cell);
  
  var zone5Cell = document.createElement("td");
  zone5Cell.textContent = zone5;
  row.appendChild(zone5Cell);
  
  resultTable.appendChild(row);
  
  document.getElementById("result").style.display = "block";
}

document.getElementById("gender").addEventListener("change", calculateMaxHeartRate);
document.getElementById("age").addEventListener("input", calculateMaxHeartRate);
document.getElementById("maxHeartRate").addEventListener("input", calculateHeartRateZones);
document.getElementById("restingHeartRate").addEventListener("input", calculateHeartRateZones);
