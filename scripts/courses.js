function calculateTime(dist) {
  var speed = localStorage.getItem('overallSpeed') || 0;
  var currentSpeed = parseInt(speed);
  var finalSpeed = currentSpeed * 0.001

  var result = dist / finalSpeed;

  return result;
}
