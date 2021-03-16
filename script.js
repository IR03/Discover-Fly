//first class

                //firstClass-increase
                document.getElementById("firstClass-increase").addEventListener('click', function () {
                    cartValueChange("firstClass-count", true);
                 });
                           //firstClass-decrease
           
                 document.getElementById("firstClass-decrease").addEventListener('click', function () {
                    cartValueChange("firstClass-count", false);
           
                 });
           
                 //economy class
                                 //economyClass-increase
                  document.getElementById("economyClass-increase").addEventListener('click', function () {
                    cartValueChange("economyClass-count", true);
                 });
                                //economyClass-decrease
                  document.getElementById("economyClass-decrease").addEventListener('click', function () {
                    cartValueChange("economyClass-count", false);
           
                 });
           
                 function cartValueChange(number, isIncrease) {
                    const economyClassInput = document.getElementById(number);
                    const numberCount = parseInt(economyClassInput.value);
                    let numberNewCount = numberCount;
                    if (isIncrease == true) {
                       numberNewCount = numberCount + 1;
                    }
                    else if (isIncrease == false && numberCount > 0) {
                       numberNewCount = numberCount - 1;
                    }
                    economyClassInput.value = numberNewCount;
                    calculateTotal();
                   }
           
                   function calculateTotal() {
                    const firstClassInput = document.getElementById("firstClass-count");
                    const firstClassCount = parseInt(firstClassInput.value);
           
                    const economyClassInput = document.getElementById("economyClass-count");
                    const economyClassCount = parseInt(economyClassInput.value);
           
                    const subTotalPrice = firstClassCount * 150 + economyClassCount * 100;
                    document.getElementById("subTotal-price").innerText = '$' + subTotalPrice;
           
                    const tax = Math.round(subTotalPrice * .10);
                    document.getElementById("total-tax").innerText = '$' + tax;
           
                    const totalPrice = subTotalPrice + tax;
                    document.getElementById("total-price").innerText = '$' + totalPrice;
                 }
                 function displayMessage(){
                     let FirstClassCount     = document.getElementById("firstClass-count").value;
                     let EconomyClassCount   = document.getElementById("economyClass-count").value;
                     let Total = document.getElementById("total-price").innerText;
                     
                     alert("First  Class Ticket Quantity :  "+FirstClassCount);
                     alert("Economy  Class Ticket Quantity :  "+EconomyClassCount);
                     alert("Total  price :  "+Total);
                 }