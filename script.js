var balance =0;
function updatebal() {
  document.getElementById("bal").textContent = balance;
}

function addmoney() {
  var amount = Number(document.getElementById("addamount").value);
  if(amount=="")
    {
      alert("Plese enter the detials")
      return
    }
  balance += amount;
  updatebal();
  document.getElementById("addamount").value = "";
}
function Add() {
  var Prname = document.getElementById("pr").value;
  var Pamount = document.getElementById("am").value;
  var list = document.getElementById("list");
  if(Prname==""||Pamount=="")
  {
    alert("Plese enter the detials")
    return
  }
  var row = list.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = Prname;
  cell2.innerHTML = Pamount;
  var btn = document.createElement("button");
  btn.textContent = "Buy";
  btn.onclick = function () {
    buy(btn, Pamount);
  };
  cell3.appendChild(btn);
  document.getElementById("pr").value = "";
  document.getElementById("am").value = "";
}

function buy(btn, am) {
  if (am > balance) {
    alert("Insufficient balance");
    return;
  }
  balance -= am;
  updatebal();
  var row = btn.parentNode.parentNode;
  row.remove();
}
