// window.onload = () => {
//     main();
// };

// function main() {
//     // alert('hi');
// }

// const casePlus = document.querySelector('#case-plus');
// const caseMinus = document.querySelector('#case-minus');
// const phoneQuantity = document.querySelector('#case-count-phone');
// const phonePrice = document.querySelector('#phone-price');

// casePlus.addEventListener('click', () => {
//     let phoneCount = parseInt(phoneQuantity.value);
//     phoneCount += 1;
//     phoneQuantity.value = phoneCount;
//     const phoneTotalPrice = parseInt(phonePrice.innerText);
//     phonePrice.innerText = phoneTotalPrice * phoneQuantity.value;
// });

// caseMinus.addEventListener('click', () => {
//     if (phoneQuantity.value > 0) {
//         let phoneCount = parseInt(phoneQuantity.value);
//         phoneCount -= 1;
//         phoneQuantity.value = phoneCount;
//     }
// });

// common function to update value of count
function updateCaseNumber(isIncreasing) {
    const caseInput = document.querySelector('#case-count-phone');
    const caseNumber = caseInput.value;
    if (isIncreasing) {
        caseInput.value = parseInt(caseNumber) + 1;
    }
    if (!isIncreasing) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
}

// Plus button handler
document.querySelector('#case-plus').addEventListener('click', () => {
    updateCaseNumber(true);
});

// Minus button handler

document.querySelector('#case-minus').addEventListener('click', () => {
    updateCaseNumber(false);
});
