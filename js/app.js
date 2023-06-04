

 function updatePhoneInput(product, price, isAdding) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputNumber = phoneInput.value;
    if (isAdding) {
        phoneInputNumber = parseInt(phoneInputNumber) + 1;
    }
    else if (phoneInputNumber > 0) {
        phoneInputNumber = parseInt(phoneInputNumber) - 1;
    }
    phoneInput.value = phoneInputNumber;

     const phoneProduct = document.getElementById(product + '-total');
    phoneProduct.innerText = phoneInputNumber * price;

    calculateTotal();
} 

function phoneProductQuantity(product) {
    const quantity = document.getElementById(product + '-number');
    const productQuantity = parseInt(quantity.value);
    return productQuantity;

}
function calculateTotal() {
    const phoneTotal =  phoneProductQuantity('phone') * 1219;
    const caseTotal =  phoneProductQuantity('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;



}




document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneInput('phone', 1219, true)
})


document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneInput('phone', 1219, false)
})



document.getElementById('case-plus').addEventListener('click', function () {
    updatePhoneInput('case', 59, true)
})


document.getElementById('case-minus').addEventListener('click', function () {
    updatePhoneInput('case', 59, false)
}) 