const peanutPrice = 250;

const addBtn = document.getElementById('add-product');
const redBtn = document.getElementById('delete-product');
const qtn = document.getElementById('product-quantity');
const price = document.getElementById('price');


addBtn.addEventListener('click', ()=>{
    qtn.innerHTML = new Number(qtn.innerText) + 1
    calculatePrice()
})

redBtn.addEventListener('click', ()=>{
    if(new Number(qtn.innerText) > 1){
        qtn.innerHTML = new Number(qtn.innerText) - 1
        calculatePrice()
    }
})

calculatePrice = ()=>{
    price.innerHTML = peanutPrice * new Number(qtn.innerHTML)
}