document.addEventListener("DOMContentLoaded", () => {
  const choose = document.getElementById("currency-Selector");
  const numberInput = document.getElementById("number-Input");
  const convertBtn = document.getElementById("convert-Btn");
  const results = document.getElementById("display");
  const clearBtn = document.getElementById("clear-Btn");

  function verify() {
    const amount = parseFloat(numberInput.value);
    let currencySymbol;
    let convertedAmount;

    if (isNaN(amount) || amount <= 0) {
      results.textContent = "Please enter a valid amount";
      return;
    }

    const conversionRates = {
      USD_GHS: 12.92,
      GHS_USD: 1 / 12.92,
      EUR_GHS: 14.08,
      GHS_EUR: 1 / 14.08,
      GBP_GHS: 16.46,
      GHS_GBP: 1 / 16.46,
      USD_EUR: 0.92,
      EUR_USD: 1 / 0.92,
      USD_GBP: 0.78,
      GBP_USD: 1 / 0.78,
      EUR_GBP: 0.85,
      GBP_EUR: 1 / 0.85,
    };

    const selectedConversion = choose.value;
    if (!selectedConversion) {
      results.textContent = "Please select a conversion option";
      return;
    }

    const rate = conversionRates[selectedConversion];
    const [, toCurrency] = selectedConversion.split("_");
    convertedAmount = amount * rate;

    switch (toCurrency) {
      case "USD":
        currencySymbol = "$";
        break;
      case "GHS":
        currencySymbol = "₵";
        break;
      case "EUR":
        currencySymbol = "€";
        break;
      case "GBP":
        currencySymbol = "£";
        break;
      default:
        currencySymbol = "";
    }
    results.textContent = `${currencySymbol} ${" "} ${convertedAmount.toFixed(
      2
    )}`;
  }

  function erase() {
    results.textContent = "";
    numberInput.value = "";
  }

  clearBtn.addEventListener("click", erase);

  convertBtn.addEventListener("click", verify);
});
