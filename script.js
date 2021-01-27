// // product increase by plus
document.getElementById('productIncrease').addEventListener('click', function (event) {
    console.log("plus is clicked");
    const currentProduct = document.getElementById("productAmount").value;
    const currentProductNumber = parseFloat(currentProduct);
    const totalProduct = 1 + currentProductNumber;
    document.getElementById("productAmount").value = totalProduct;
})
