function displayCreator() {
  var date = new Date();
  var year = date.getFullYear();
  
  if (year > 2023) {
    document.getElementById("creator").innerHTML = "Louie Kurenai @ 2023 - " + year;
  } else {
    document.getElementById("creator").innerHTML = "Louie Kurenai @ 2023";
  }
}