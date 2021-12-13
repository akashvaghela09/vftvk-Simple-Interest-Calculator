function compute() {
    // get all the elements
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    year = document.getElementById("year").value;
    result = document.getElementById("result");
    
    // Remove Previous values from result
    result.innerHTML = ""
    
    // create required elements
    currentPrincipal = document.createElement("p")
    currentRate = document.createElement("p")
    finalAmount = document.createElement("p")
    finalYear = document.createElement("p")
    
    // set values
    currentPrincipal.textContent = `If you deposite ${principal}.`
    currentRate.textContent = `at an Interest rate of ${rate}%`
    finalAmount.textContent = `You will recieve an amount of ${(principal * rate * year)/100}`
    finalYear.textContent = `in the year ${2021 + Number(year)}`
    
    // Append required result lines one by one
    result.appendChild(currentPrincipal)
    result.appendChild(currentRate)
    result.appendChild(finalAmount)
    result.appendChild(finalYear)
}
        
function changeValue() {
    let rateValue = document.getElementById("rateValue")
    let inputValue = document.getElementById("rate").value;
    
    // chage the current rate % for input range
    rateValue.textContent = inputValue + "%";
}