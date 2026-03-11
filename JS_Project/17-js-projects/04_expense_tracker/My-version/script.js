document.addEventListener("DOMContentLoaded", () => 
{
  //grabbing the elements

  const expenseName = document.getElementById("expense-name");
  const Amount = document.getElementById("expense-amount");
  const AddExpenseButton = document.getElementById("add-expense-btn");

  const expenseList = document.getElementById("expense-list");
  const Total = document.getElementById("total");
  const totalAmount = document.getElementById("total-amount");

  //let make an array of expense objext

  let expenseObj = {
    NameOfExpense: "Expense",
    PriceofExpense: 200.0,
  };

  // making a blank array

  let expensearray = [];
  const storedExpense=localStorage.getItem("expenses");
  if(storedExpense)
  {
    expensearray=JSON.parse(storedExpense);
    renderExpenses();
    updateTotal();

  }

  AddExpenseButton.addEventListener("click", (event) => {
    event.preventDefault();
    const name = expenseName.value.trim();
    const price = parseFloat(Amount.value);

    if (name === "" || isNaN(price) || price < 0) return;

    ExpenseCreator(name, price);

    renderExpenses();
    updateTotal();
  });



  // need to store info about expense



  //function that will make an object and push it in our array

  function ExpenseCreator(name, price) {
    const expenseObj = {
      NameOfExpense: name,
      PriceofExpense: price,
    };

    expensearray.push(expenseObj);
    localStorage.setItem("expenses", JSON.stringify(expensearray));

    
  }

  function updateTotal() {
    const sum = totalExpense(expensearray);
    totalAmount.textContent = sum;
  }

  //function that will take all the object expense value add it

  function totalExpense(expensearray) {
    let sum = 0;
    expensearray.forEach((expense) => {
      sum += expense.PriceofExpense;
    });

    return sum;
  }

  function renderExpenses() {
  expenseList.innerHTML = ""; // Clear the list
  expensearray.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = `${expense.NameOfExpense}: $${expense.PriceofExpense}`;
    expenseList.appendChild(li);
  });
}


});

