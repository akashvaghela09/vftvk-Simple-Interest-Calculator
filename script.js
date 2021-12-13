function compute() {
    // get all the elements
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("year").value;
    let result = document.getElementById("result");
    let finalYear = new Date().getFullYear()+parseInt(years);
    
    clearResult()
    
    if(principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
        // Append required result lines
        result.innerHTML += `
            <p>If you deposite <b>${principal}</b>.</p>
            <p>at an Interest rate of <b>${rate}%</b></p>
            <p>You will recieve an amount of <b>${(principal * rate * years)/100}</b></p>
            <p>in the year <b>${finalYear}</b></p>
        ` 
    }
}
        
function changeValue() {
    let rateValue = document.getElementById("rate_val")
    let inputValue = document.getElementById("rate").value;
    
    // chage the current rate % for input range
    rateValue.textContent = inputValue + "%";
}

function clearResult() {
    let result = document.getElementById("result");
    
    // Remove Previous values from result
    result.innerHTML = ""
}