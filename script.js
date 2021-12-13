function compute() {
    // get all the elements
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("year").value;
    let result = document.getElementById("result");
    let resetButton = document.getElementById("resetButton");
    let finalYear = new Date().getFullYear()+parseInt(years);
    
    // Remove Previous values from result
    result.innerHTML = ""
    
    if(principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else if (years <= 0){
        alert("Select year")
    } else {
        // Append required result lines
        result.innerHTML += `
            <p>If you deposite <b>${principal}</b>.</p>
            <p>at an Interest rate of <b>${rate}%</b></p>
            <p>You will recieve an amount of <b>${(principal * rate * years)/100}</b></p>
            <p>in the year <b>${finalYear}</b></p>
        ` 
        resetButton.setAttribute("class", "show")
    }
}
        
function changeValue() {
    let rateValue = document.getElementById("rate_val")
    let inputValue = document.getElementById("rate").value;
    
    // chage the current rate % for input range
    rateValue.textContent = inputValue + "%";
}

function resetValues() {
    let principal = document.getElementById("principal").value = "";
    let rate = document.getElementById("rate").value = 0;
    let years = document.getElementById("year").value = 0;
    let result = document.getElementById("result");
    
    changeValue()
    
    // Remove Previous values from result
    result.innerHTML = ""
    
    let resetButton = document.getElementById("resetButton");
    resetButton.setAttribute("class", "hide")
}