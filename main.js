const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalRes = document.getElementById("total");


function calculateTotal() {
    let billValue = parseFloat(billInput.value);
    let tipValue = parseFloat(tipInput.value);

    if (billValue <= 0 || isNaN(billValue) || tipValue <= 0 || isNaN(tipValue)) {
        alert("Please introduce valid values for bill and tip");
    }
    else {
        let totalValue = billValue * (1 + tipValue / 100);
        totalRes.innerText = totalValue.toFixed(2);
    }
}

btnEl.addEventListener("click", calculateTotal);