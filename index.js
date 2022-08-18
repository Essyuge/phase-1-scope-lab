// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "initial";

function upperCaseCustomerName() {
  customerName = customerName.toLocaleUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "something";
}
