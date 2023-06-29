function calculateMaxHeartRate() {
  var ageInput = document.getElementById("age");
  var maleInput = document.getElementById("male");
  var maxHeartRateInput = document.getElementById("maxHeartRate");
  
  var age = parseInt(ageInput.value);
  if (age) {
    if (maleInput.checked) {
      maxHeartRateInput.value = 220 - age;
    } else {
      maxHeartRateInput.value = 226 - age;
    }

    calculateHeartRateZones();
  }
  updateURLParameters();
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
  if (isNaN(zone1) || maxHeartRate < 9) {
	document.getElementById("result").style.display = "none";
	  
	return;
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
  updateURLParameters();
}

function updateURLParameters() {
  var ageInput = document.getElementById("age");
  var maleInput = document.getElementById("male");
  var maxHeartRateInput = document.getElementById("maxHeartRate");
  var restingHeartRateInput = document.getElementById("restingHeartRate");
  
  var age = ageInput.value;
  var gender = maleInput.checked ? "m" : "f";
  var maxHeartRate = maxHeartRateInput.value;
  var restingHeartRate = restingHeartRateInput.value;
  
  var urlParams = new URLSearchParams(window.location.search);
  if (age > 0) {
	urlParams.set("a", age);
  } else {
	urlParams.delete("a");
  }
  urlParams.set("s", gender);
  if (maxHeartRate > 0) {
  urlParams.set("m", maxHeartRate);
  } else {
	urlParams.delete("m");
  }
  if (restingHeartRate > 1) {
	urlParams.set("r", restingHeartRate);
  } else {
	urlParams.delete("r");
  }
  
  var newURL = window.location.origin + window.location.pathname + "?" + urlParams.toString();
  
  // Mettre à jour l'URL dans la barre d'adresse
  window.history.replaceState({}, '', newURL);
}

function updateFields() {
  var urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.has("a")) {
    var ageInput = document.getElementById("age");
    ageInput.value = urlParams.get("a");
  }
  
  if (urlParams.has("s")) {
    if (urlParams.get("s") === "m") {
      document.getElementById("male").checked = true;
    } else {
      document.getElementById("female").checked = true;
    }
  }
  
  if (urlParams.has("m")) {
    document.getElementById("maxHeartRate").value = urlParams.get("m");
  }

  if (urlParams.has("r")) {
    document.getElementById("restingHeartRate").value = urlParams.get("r");
  }
  calculateHeartRateZones();
}

window.onload = updateFields;


document.getElementById("female").addEventListener("change", calculateMaxHeartRate);
document.getElementById("male").addEventListener("change", calculateMaxHeartRate);
document.getElementById("age").addEventListener("input", calculateMaxHeartRate);
document.getElementById("maxHeartRate").addEventListener("input", calculateHeartRateZones);
document.getElementById("restingHeartRate").addEventListener("input", calculateHeartRateZones);
