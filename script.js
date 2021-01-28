// product increase by plus
document.getElementById('productIncrease').addEventListener('click', function (event) {
    console.log("plus is clicked");
    const currentProduct = document.getElementById("productAmount").value;
    const currentProductNumber = parseInt(currentProduct);
    var totalProduct = 1 + currentProductNumber;
    document.getElementById("productAmount").value = totalProduct;
    document.getElementById("numberOfProduct").innerText = totalProduct * 100;

    var total = document.getElementById("total").innerText;
    var totalAmount = parseInt(total);
    var totalCost = totalAmount +  100;
    document.getElementById("total").innerText =  totalCost;
})

// product decrease by minus
document.getElementById('productDecrease').addEventListener('click', function (event) {
    console.log("minus is clicked");
    const currentProduct = document.getElementById("productAmount").value;
    const currentProductNumber = parseInt(currentProduct);
     var totalProduct = -1 + currentProductNumber;
    if(totalProduct<0){
        totalProduct =0;
        alert("Product number can't be negative");
    }
    document.getElementById("productAmount").value = totalProduct;
    document.getElementById("numberOfProduct").innerText = totalProduct * 100;

    var total = document.getElementById("total").innerText;
    var totalAmount = parseInt(total);
    var totalCost = totalAmount - 100;
    document.getElementById("total").innerText =  totalCost;
})

document.getElementById('productIncrease2nd').addEventListener('click', function (event) {
    console.log("plus is clicked");
    const currentProduct2nd = document.getElementById("productAmount2nd").value;
    const currentProductNumber2nd = parseInt(currentProduct2nd);
    var totalProduct2nd = 1 + currentProductNumber2nd;
    document.getElementById("productAmount2nd").value = totalProduct2nd;
    document.getElementById("numberOfProduct2nd").innerText = totalProduct2nd * 20;

    var total = document.getElementById("total").innerText;
    var totalAmount = parseInt(total);
    var totalCost = totalAmount +  20;
    document.getElementById("total").innerText =  totalCost;
})

document.getElementById('productDecrease2nd').addEventListener('click', function (event) {
    console.log("minus is clicked");
    const currentProduct2nd = document.getElementById("productAmount2nd").value;
    const currentProductNumber2nd = parseInt(currentProduct2nd);
     var totalProduct2nd = -1 + currentProductNumber2nd;
    if(totalProduct2nd<0){
        totalProduct2nd =0;
        alert("Product number can't be negative");
    }
    document.getElementById("productAmount2nd").value = totalProduct2nd;
    document.getElementById("numberOfProduct2nd").innerText = totalProduct2nd * 20;
    
    var total = document.getElementById("total").innerText;
    var totalAmount = parseInt(total);
    var totalCost = totalAmount - 20;
    document.getElementById("total").innerText =  totalCost;
})