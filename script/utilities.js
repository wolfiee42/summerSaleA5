let total = 0;

function namePrice(data) {
    const name = data.parentNode.childNodes[1].childNodes[5].innerText;
    const price = data.parentNode.childNodes[1].childNodes[7].innerText;
    const checkout = document.getElementById('checkOutSection').parentNode.childNodes[3].childNodes[1];


    const p = document.createElement('p');
    p.innerText = name + ': ' + price;
    checkout.appendChild(p);

    const priceValue = parseFloat(price);
    total = parseFloat(total) + parseFloat(priceValue);

    const ammount = document.getElementById('totalPrice').innerText = total.toFixed(2);

    if (ammount >= 1) {
        const btn = document.getElementById('purchasedBtn');
        btn.removeAttribute('disabled');


    }

    let discount = (total * (20 / 100)).toFixed(2);

    if (ammount >= 200) {
        const btn = document.getElementById('apply-btn');
        btn.removeAttribute('disabled');
    }
    document.getElementById('coupon-Code').addEventListener('keyup', function (event) {
        const input = event.target.value;
        if(input === "SELL200"){
            document.getElementById('apply-btn').addEventListener('click', function () {

                const discountAmmount = document.getElementById('discount');
                discountAmmount.innerText = discount;
                const finalAmmount = total - discount
                document.getElementById('total').innerText = finalAmmount.toFixed(2);
            });
        }

    })


    document.getElementById('homeBtn').addEventListener('click', function () {
        location.reload();
    })

}








