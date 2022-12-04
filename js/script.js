
function updateProductNumber(casefield, allow, casetotal, price) {
    const caseInput = document.getElementById(casefield);
    let productNumber = caseInput.value;
    if (allow == true) {
        productNumber = parseInt(productNumber) + 1
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    caseInput.value = productNumber
    //update case total
    const productTotal = document.getElementById(casetotal);
    productTotal.innerText = productNumber * price;
    //calculate Total
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number-field');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax
    //update on the html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('final-total').innerText = totalPrice;

}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateProductNumber('case-number-field', true, 'case-total', 59)
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateProductNumber('case-number-field', false, 'case-total', 59)
})


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    updateProductNumber('phone-number-field', true, 'phone-total', 1219)
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updateProductNumber('phone-number-field', false, 'phone-total', 1219)
})









//sub-total
//tax-amount
//final-total