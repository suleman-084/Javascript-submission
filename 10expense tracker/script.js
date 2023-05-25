const form = document.getElementById("expense-form");
const table = document.getElementById("expense-table");
const button = document.getElementById("btn");

const expenseTracker = (e) => {
  e.preventDefault();
  const amount = document.getElementById("expense-amount").value;
  const category = document.getElementById("expense-category").value;
  const date = document.getElementById("expense-date").value;
  const btn = document.createElement("Button");
  btn.classList.add("delete-button");
  btn.innerHTML = "delete";
  if (amount == "") {
    alert("Enter the amount");
  }
  if (category == "") {
    alert("Enter the Category");
  }
  if (date == "") {
    alert("Enter the Date");
  }
  const row = table.insertRow();
  const dateCell = row.insertCell(0);
  const categoryCell = row.insertCell(1);
  const amountCell = row.insertCell(2);
  const actionCell = row.insertCell(3);

  dateCell.innerHTML = date;
  categoryCell.innerHTML = category;
  amountCell.innerHTML = amount;
  actionCell.appendChild(btn);
};
button.addEventListener("click", expenseTracker);

// function for deletion

const expenseList = document.getElementById("deletion");
expenseList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const row = event.target.parentNode.parentNode;
    expenseList.deleteRow(row.rowIndex);
  }
});
