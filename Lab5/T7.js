const amountInput = document.getElementById('amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const peopleInput = document.getElementById('people');
const tipAmountSpan = document.getElementById('tip-amount');
const totalPerPersonSpan = document.getElementById('total-per-person');
let displayedTipPercentage = parseFloat(tipPercentageSpan.textContent.slice(0, -1)) / 100;

function calculateTip() {
  const amount = parseFloat(amountInput.value);
  const tipPercentage = parseFloat(document.getElementById('tip-percentage').value) / 100;
  const people = parseInt(peopleInput.value);

  const tipAmount = amount * tipPercentage;
  const totalPerPerson = tipAmount / people;

  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);
}

tipPercentageInput.addEventListener('input', () => {
  const value = tipPercentageInput.value;
  tipPercentageSpan.textContent = `${value}%`;
});
