function cal(){
    let h = prompt("Enter your height");
    let w = prompt("Enter your weight");
    h = h / 100; // Convert height from cm 
    let bmi = w / (h * h);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is : " + bmi.toFixed(2);

    // Set color based on BMI value
    if (bmi >= 18.5 && bmi <= 24.9) {
        resultDiv.style.color = "green"; // Good BMI
    } else {
        resultDiv.style.color = "red";   // Bad BMI
    }
}