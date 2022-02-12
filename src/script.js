// common function to update value of count
function updateProductNumber(product, isIncreasing, price) {
    const productInput = document.querySelector(`#${product}-count`);
    let productNumber = productInput.value;
    console.log(productNumber);
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    if (!isIncreasing && productNumber > 1) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.querySelector(`#${product}-total`);
    productTotal.innerText = productNumber * price;
}

// increase decrease event handler
document.querySelector('#phone-plus').addEventListener('click', () => {
    updateProductNumber('phone', true, 1219);
});

document.querySelector('#phone-minus').addEventListener('click', () => {
    updateProductNumber('phone', false, 1219);
});

// case increase decrease event handler
document.querySelector('#case-plus').addEventListener('click', () => {
    updateProductNumber('case', true, 59);
});
document.querySelector('#case-minus').addEventListener('click', () => {
    updateProductNumber('case', false, 59);
});
