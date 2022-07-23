let x = "";
let y = "";
let operation = "";
let finish = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["-", "+", "*", "/", "%", "+/-"];
const out = document.querySelector(".screen p");

function clearAll() {
  x = "";
  y = "";
  operation = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  const key = event.target.textContent;

  if (digits.includes(key)) {
    if (y === "" && operation === "") {
      x += key;
      console.log(x, y, operation);
      out.textContent = x;
    } else if (x !== "" && y !== "" && finish) {
      y = key;
      finish = false;
      out.textContent = y;
    } else {
      y += key;
      out.textContent = y;
    }
    console.log(x, y, operation);
    return;
  }

  if (actions.includes(key)) {
    operation = key;
    out.textContent = operation;
    console.log(x, y, operation);
    return;
  }

  if (key === "=") {
    if (y === "") y = x;
    switch (operation) {
      case "+":
        x = +x + +y;
        break;
      case "-":
        x = x - y;
        break;
      case "*":
        x = x * y;
        break;
      case "/":
        if (y === "0") {
          out.textContent = "eror";
          x = "";
          y = "";
          operation = "";
          return;
        }
        x = x / y;
        break;
      case "%":
        x = x / 100;
        break;
    }
    finish = true;
    out.textContent = x;
    console.log(x, y, operation);
  }
};
