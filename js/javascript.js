function increase (count){
    const iten_count = document.getElementById(count);
    iten_count.value = parseFloat(iten_count.value) + 1; 
}
function decrease (count){
    const item_count = document.getElementById(count);
    if (parseFloat(item_count.value) != 0){
        item_count.value = parseFloat(item_count.value) - 1;
    }
}

function price_update(){
    phone_count = document.getElementById('phone-count');
    case_count = document.getElementById('case-count');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    let temp1 = 1000 * parseFloat(phone_count.value);
    let temp2 = 300 * parseFloat(case_count.value);
    subtotal.innerText = temp1 + temp2;
    total.innerText = temp1 + temp2;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    increase('phone-count');
    price_update();
})

document.getElementById('phone-minus').addEventListener('click', function(){
    decrease('phone-count');
    price_update();
})
document.getElementById('case-plus').addEventListener('click', function(){
    increase('case-count');
    price_update();
})

document.getElementById('case-minus').addEventListener('click', function(){
    decrease('case-count')
    price_update();
})
