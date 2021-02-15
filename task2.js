'use strict'

var container = document.querySelector('.container');

let basket = [
    { name: "icecream", discrp: "Шоколадное мороженное", cost: 145 },
    { name: "toy", discrp: "мягкая игрушка", cost: 832 },
    { name: "pen", discrp: "Синяя ручка", cost: 15 }
];


function countBasketPrice() {
    let summ = 0;
    var txt = document.createElement("p");
    if (basket.length == 0) {
        txt.innerHTML = "Корзина пуста";
        container.appendChild(txt);
    } else {
        for (var i = 0; i < basket.length; i++) {
            summ = summ + basket[i].cost;
        }
        txt.innerHTML = "В корзине " + i + " предметов на сумму " + summ + " рублей.";
        container.appendChild(txt);
    }

}

countBasketPrice();