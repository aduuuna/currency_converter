const choose = document.getElementById("currency-Selector");
const numberInput = document.getElementById("number-Input");
const convertBtn = document.getElementById("convert-Btn");
const results = document.getElementById("display");
const clearBtn = document.getElementById("clear-Btn");

function verify() {
  if (numberInput.value <= 0 || numberInput.value === "") {
    results.textContent = "Enter a Valid Amount";
  } else if (choose.selectedIndex === 0) {
    let amount = numberInput.value * 12.92;
    results.innerHTML = "&#8373;" + " " + `${amount.toFixed(2)}`;
  } else if (choose.selectedIndex === 1) {
    let amount = numberInput.value / 12.92;
    results.innerHTML = "&#36;" + " " + `${amount.toFixed(2)}`;
  } else if (choose.selectedIndex === 2) {
    let amount = numberInput.value * 14.08;
    results.innerHTML = "&#8373;" + " " + `${amount.toFixed(2)}`;
  } else if (choose.selectedIndex === 3) {
    let amount = numberInput.value / 14.08;
    results.innerHTML = " &#8364;" + " " + `${amount.toFixed(2)}`;
  } else if (choose.selectedIndex === 4) {
    let amount = numberInput.value * 16.46;
    results.innerHTML = "&#8373;" + " " + `${amount.toFixed(2)}`;
  } else if (choose.selectedIndex === 5) {
    let amount = numberInput.value / 16.46;
    results.innerHTML = "&#163;" + " " + `${amount.toFixed(2)}`;
  } else {
    results.textContent = "Invalid Amount";
  }
}

function erase() {
  results.textContent = "";
  numberInput.value = "";
}

clearBtn.addEventListener("click", () => {
  erase();
});
clearBtn.addEventListener("touchstart", () => {
  erase();
});

convertBtn.addEventListener("click", () => {
  verify();
});
convertBtn.addEventListener("touchstart", () => {
  verify();
});

