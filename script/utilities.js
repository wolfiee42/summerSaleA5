function namePrice(data) {
    const name = data.parentNode.childNodes[1].childNodes[5].innerText;
    const price = data.parentNode.childNodes[1].childNodes[7].innerText;
    const checkout = document.getElementById('checkOutSection').parentNode.childNodes[3].childNodes[1];
    const p = document.createElement('p');
    p.innerText = name +': ' + price;
    checkout.appendChild(p)
    console.log(checkout);
}