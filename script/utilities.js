let total = 0;

function namePrice(data) {
    const name = data.parentNode.childNodes[1].childNodes[5].innerText;
    const price = data.parentNode.childNodes[1].childNodes[7].innerText;
    const checkout = document.getElementById('checkOutSection').parentNode.childNodes[3].childNodes[1];
    let discount = total * (20 / 100);

    document.getElementById('apply-btn').addEventListener('click', function () {

        const discountAmmount = document.getElementById('discount');
        discountAmmount.innerText = discount;
        const finalAmmount = total - discount
        document.getElementById('total').innerText = finalAmmount;
    });

    const p = document.createElement('p');
    p.innerText = name + ': ' + price;
    checkout.appendChild(p);

    const priceValue = parseFloat(price);
    total = parseFloat(total) + parseFloat(priceValue);

    document.getElementById('totalPrice').innerText = total;


    // return priceValue;
}

document.getElementById('coupon-Code').addEventListener('keyup', function (event) {
    const input = event.target.value;
    const btn = document.getElementById('apply-btn');

    if (input === "aa") {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute("disabled", true)
    }
})







// const totalAmmount = document.getElementById('total').innerText;
//     totalAmmount = parseFloat(priceValue) - parseFloat(discount);
//     console.log(totalAmmount);