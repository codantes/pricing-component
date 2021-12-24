
let slider = document.querySelector("#price-slider");
let discountCheck = document.getElementById("discount-checkbox").checked;
console.log(discountCheck);

// function to calculate price without discount
// function to calculate price with discount
// function to display the price

// fuction to display pageview with slider
function pageView(pageMark) {
    switch(pageMark) {
    case "1":
        document.querySelector(".pageview-display").innerHTML = "10k pageview";
        if (discountCheck === true){
            document.querySelector("#dollar-display").innerHTML = "$6";
        }    
        else{
            document.querySelector("#dollar-display").innerHTML = "$8";
        }
        break;
    case "2":
        document.querySelector(".pageview-display").innerHTML = "50k pageview"
        if (discountCheck === true){
            document.querySelector("#dollar-display").innerHTML = "$9";
        }    
        else{
            document.querySelector("#dollar-display").innerHTML = "$12";
        }
        break;
    case "3":
        document.querySelector(".pageview-display").innerHTML = "100k pageview"
        if (discountCheck === true){
            document.querySelector("#dollar-display").innerHTML = "$12";
        }    
        else{
            document.querySelector("#dollar-display").innerHTML = "$16";
        }
        break;
    case "4":
        document.querySelector(".pageview-display").innerHTML = "500k pageview"
        if (discountCheck === true){
            document.querySelector("#dollar-display").innerHTML = "$18";
        }    
        else{
            document.querySelector("#dollar-display").innerHTML = "$24";
        }
        break;
    case "5": 
        document.querySelector(".pageview-display").innerHTML = "1m pageview"
        if (discountCheck === true){
            document.querySelector("#dollar-display").innerHTML = "$27";
        }    
        else{
            document.querySelector("#dollar-display").innerHTML = "$36";
        }
        break;
        }
}

pageView(slider.value);