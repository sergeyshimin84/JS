'use strict';

const openBasketBtn = document.querySelector('.header-right-cart');
const cartE1 = document.querySelector('.cart');
const cartCounterEl = document.querySelector('.header-right-cart-number');
const cartTotalEl = document.querySelector('.cart-total');
const cartTotalValueEl = document.querySelector('.cart-total-value');

openBasketBtn.addEventListener('click', function () {
    cartE1.classList.toggle('hidden');
});

let cart = {
    'product0': {
        'name': 'name1',
        'quantity': 0,
        'price': 52.00,
    },
    'product1': {
        'name': 'name2',
        'quantity': 0,
        'price': 52.00,
    },
    'product2': {
        'name': 'name3',
        'quantity': 0,
        'price': 52.00,
    },
    'product3': {
        'name': 'name4',
        'quantity': 0,
        'price': 52.00,
    },
    'product4': {
        'name': 'name5',
        'quantity': 0,
        'price': 52.00,
    },
    'product5': {
        'name': 'name6',
        'quantity': 0,
        'price': 52.00,
    },
    'product6': {
        'name': 'name7',
        'quantity': 0,
        'price': 52.00,
    },
    'product7': {
        'name': 'name8',
        'quantity': 0,
        'price': 52.00,
    },
    'product8': {
        'name': 'name9',
        'quantity': 0,
        'price': 52.00,
    },
};

document.addEventListener('click', event => {
    if (event.target.classList.contains('items-catalog-card-btn')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('cart-row-minus-btn')) {
        minusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('cart-total-clear-btn')) {
        clearFunction(event.target.dataset.id);
    }
});

// function cartHidden() {
//     let name = [];
//     let quantity = [];
//     let price = [];
//     cart.forEach(i => [name, quantity, price].push(i));

//     document.querySelector('div.cart-row-data').textContent = name.join(' ');
//     document.querySelector('div.cart-row-data').textContent = quantity.join(' ');
//     document.querySelector('div.cart-row-data').textContent = price.join(' ');
// }

// увеличение количества товара
const plusFunction = id => {
    cart[id]['quantity']++;
    renderCart();
}

// уменьшение количества товара
const minusFunction = id => {
    if (cart[id]['quantity'] - 1 == 0) {
        clearFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();
}

// очистка корзины
const clearFunction = id => {
    delete cart[id]['quantity'];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}