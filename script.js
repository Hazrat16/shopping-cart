// // product increase by plus
// document.getElementById('productIncrease').addEventListener('click', function (event) {
//     console.log("plus is clicked");
//     const currentProduct = document.getElementById("productAmount").value;
//     const currentProductNumber = parseInt(currentProduct);
//     var totalProduct = 1 + currentProductNumber;
//     document.getElementById("productAmount").value = totalProduct;
//     document.getElementById("numberOfProduct").innerText = totalProduct * 100;

//     var total = document.getElementById("total").innerText;
//     var totalAmount = parseInt(total);
//     var totalCost = totalAmount + 100;
//     document.getElementById("total").innerText = totalCost;
// })

// // product decrease by minus
// document.getElementById('productDecrease').addEventListener('click', function (event) {
//     console.log("minus is clicked");
//     const currentProduct = document.getElementById("productAmount").value;
//     const currentProductNumber = parseInt(currentProduct);
//     var totalProduct = -1 + currentProductNumber;
//     if (totalProduct < 0) {
//         totalProduct = 0;
//         alert("Product number can't be negative");
//     }
//     document.getElementById("productAmount").value = totalProduct;
//     document.getElementById("numberOfProduct").innerText = totalProduct * 100;

//     var total = document.getElementById("total").innerText;
//     var totalAmount = parseInt(total);
//     var totalCost = totalAmount - 100;
//     document.getElementById("total").innerText = totalCost;
// })

// document.getElementById('productIncrease2nd').addEventListener('click', function (event) {
//     console.log("plus is clicked");

//     const currentProduct2nd = document.getElementById("productAmount2nd").value;
//     const currentProductNumber2nd = parseInt(currentProduct2nd);
//     var totalProduct2nd = 1 + currentProductNumber2nd;
//     document.getElementById("productAmount2nd").value = totalProduct2nd;
//     document.getElementById("numberOfProduct2nd").innerText = totalProduct2nd * 20;

//     var total = document.getElementById("total").innerText;
//     var totalAmount = parseInt(total);
//     var totalCost = totalAmount +  20;
//     document.getElementById("total").innerText =  totalCost;
// })

// document.getElementById('productDecrease2nd').addEventListener('click', function (event) {
//     console.log("minus is clicked");
    

//     const currentProduct2nd = document.getElementById("productAmount2nd").value;
//     const currentProductNumber2nd = parseInt(currentProduct2nd);
//     var totalProduct2nd = -1 + currentProductNumber2nd;
//     if (totalProduct2nd < 0) {
//         totalProduct2nd = 0;
//         alert("Product number can't be negative");
//     }
//     document.getElementById("productAmount2nd").value = totalProduct2nd;
//     document.getElementById("numberOfProduct2nd").innerText = totalProduct2nd * 20;

//     var total = document.getElementById("total").innerText;
//     var totalAmount = parseInt(total);
//     var totalCost = totalAmount - 20;
//     document.getElementById("total").innerText = totalCost;
// })
function handleProductChange(product,isIncrease) {
    const productInput= document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    else{
        productNewCount = productCount - 1;
        if(productNewCount<0){
            productNewCount =0;
            alert("Product number can't be negative")
        }
    }
    // document.getElementById(product + '-count').value = productNewCount;
    productInput.value = productNewCount;
    let productTotal =0;
    if(product == 'phone'){
        productTotal = productNewCount * 50;
    }
    if(product == 'case'){
        productTotal = productNewCount * 10;
    }
    document.getElementById(product + "-total").innerText = productTotal;
    calculateTotal();
}
function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subtotalPrice = phoneCount * 50 + caseCount * 10;
    document.getElementById("subtotal-price").innerText = subtotalPrice;

    const totalTax = Math.round(subtotalPrice * .15);
    document.getElementById("taxAmount").innerText = totalTax;

    const totalPrice = subtotalPrice + totalTax;
    document.getElementById("total-price").innerText = totalPrice;
}
function getInputValue(product){
    const productInput= document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;

}

// function handleProductChange2nd(isIncrease) {
//     const currentProduct2nd = document.getElementById("productAmount2nd").value;
//     const currentProductNumber2nd = parseInt(currentProduct2nd);
//     let totalProduct2nd = currentProductNumber2nd;
//     if (isIncrease == true) {
//         totalProduct2nd = currentProductNumber2nd + 1;
//     }
//     else{
//         totalProduct2nd = currentProductNumber2nd - 1;
//         if(totalProduct2nd<0){
//             totalProduct2nd =0;
//             alert("Product number can't be negative")
//         }
//     }
//     document.getElementById("productAmount2nd").value = totalProduct2nd;
//     document.getElementById("numberOfProduct2nd").innerText = totalProduct2nd * 20;
// }