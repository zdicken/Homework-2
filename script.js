var para = document.getElementById('para');
var miles, cost;
go();
object.addEventListener("click", go());

function go() {
  para.innerHTML = "";
  miles = prompt("How many miles per year do you drive?");
  cost = prompt("What is the cost of one gallon of gasoline in your area?");
  calculate(miles, cost, 12);
  calculate(miles, cost, 17);
  calculate(miles, cost, 26);
  calculate(miles, cost, 29);
}

function calculate(miles, cost, mpg) {
  para.innerHTML += "To drive a car with a MPG rating of " + mpg + " for " + miles + " miles at $" + cost + " per gallon it would cost $" + (miles / mpg) * cost + ".<br>";
}