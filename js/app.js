//default input-price function for memory, storage, delivery_cost
function defaultCost (costFeild){
      document.getElementById(costFeild).innerText='0';
} 
document.getElementById("default_memory").addEventListener('click', function(){
    defaultCost('extra_memory_cost');
    totalCost();
});
document.getElementById("default_storage").addEventListener('click', function(){
    
    defaultCost("extra_storage_cost");
    totalCost();
});
document.getElementById("delivery_free").addEventListener('click', function(){
    
    defaultCost("delivery_cost");
    totalCost();
});

// add price for extra memory, extra storage,  delivery cost

function priceInput(price,costFeild){

 document.getElementById(costFeild).innerText=price;
}

//addEventListener for priceInput
document.getElementById('extra_memory').addEventListener('click', function(){
    priceInput("180","extra_memory_cost");
    totalCost();
});
document.getElementById('xl-storage').addEventListener('click', function(){
    priceInput("100","extra_storage_cost");
    totalCost();
});
document.getElementById('xxl-storage').addEventListener('click', function(){
    priceInput( "180","extra_storage_cost");
    totalCost();
});
document.getElementById('delivery_charge').addEventListener('click', function(){
    priceInput("20","delivery_cost");
    totalCost();
});

// total cost calculation
function totalCost(){
    const extraMemoryCost = document.getElementById("extra_memory_cost").innerText;
    const extraStorageCost = document.getElementById("extra_storage_cost").innerText;
    const deliveryCharge = document.getElementById("delivery_cost").innerText;
    const totalCost = parseInt(extraMemoryCost) + parseInt(extraStorageCost)+ parseInt(deliveryCharge);
    const totalPrice = 1299;
     document.getElementById("total_cost").innerText = totalCost + totalPrice;
     document.getElementById("grand-total").innerText =totalCost + totalPrice;

}
// add promo code section
document.getElementById("promo-btn").addEventListener("click",function(){
            const promoInput = document.getElementById("promo-Input");
            const userInput = promoInput.value;
            
            if(userInput == "stevekaku"){
                console.log("jksfj")
                const beforeDiscount = document.getElementById("grand-total").innerText;
                const beforeDiscountFloat = parseInt(beforeDiscount);
                const discount = beforeDiscountFloat-((beforeDiscountFloat*20)/100);
                document.getElementById("grand-total").innerText = discount;
                promoInput.value ='';
            }
        })
    


    