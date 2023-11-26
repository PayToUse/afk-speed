// for training speed
function displayStats() {
  var speed = localStorage.getItem('overallSpeed') || 0;
  var currentSpeed = parseInt(speed);
  var formattedSpeed = currentSpeed * 0.001;
  
  var multiplier = localStorage.getItem('trainingMultiplier') || 0;
  var currentMultiplier = parseInt(multiplier);
  
  var trainDistance = localStorage.getItem('overallTrainDistance') || 0;
  var currentTrainDistance = parseInt(trainDistance);
  var formattedTrainDistance = currentTrainDistance * 0.001;
  
  document.getElementById("speed").innerHTML = "Old Speed: " + formattedSpeed.toFixed(3) + " m/s";
  document.getElementById("new-speed").innerHTML = "New Speed: " + formattedSpeed.toFixed(3) + " m/s";
  document.getElementById("distance").innerHTML = "Overall Distance (Training): " + formattedTrainDistance.toFixed(3) + "m";
  document.getElementById("multiplier").innerHTML = "Training Multiplier: " + (currentMultiplier + 1) + "x";
}

// give a reward for the speed statistic
function increaseSpeed(num) {
  var num;
  
  var multiplier = localStorage.getItem('trainingMultiplier') || 0;
  var currentMultiplier = parseInt(multiplier);
  var speed = localStorage.getItem('overallSpeed') || 0;
  var currentSpeed = parseInt(speed);
  var reward = num + currentMultiplier;
  var newSpeed = currentSpeed + reward;
  var formattedSpeed = newSpeed * 0.001;
  localStorage.setItem('overallSpeed', newSpeed);
  
  var distance = localStorage.getItem('overallTrainDistance') || 0;
  var currentDistance = parseInt(distance);
  var newDistance = currentDistance + newSpeed;
  var formattedDistance = newDistance * 0.001;
  localStorage.setItem('overallTrainDistance', newDistance);
  
  document.getElementById("new-speed").innerHTML = "New Speed: " + formattedSpeed.toFixed(3) + " m/s";
  document.getElementById("distance").innerHTML = "Overall Distance (Training): " + (newDistance * 0.001) + "m";
}

// execute the functions on load
window.onload = function() {
  displayStats();
  setInterval(() => {
    increaseSpeed(1);
  }, 1000);
}