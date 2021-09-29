'use strict';
// Задание 1.1
// ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    alert(this.price * 0.75);
}

let obj1 = new Product('Sergey', 50);
obj1.make25PercentDiscount();

//ES6 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        alert(this.price * 0.75);
    }
}

let obj2 = new Product('Sergey', 50);
obj2.make25PercentDiscount();

// // Задание 1.2
// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.show = function () {
//     alert(this.author);
//     alert(this.text);
//     alert(this.date);
// }

// let edit = ;
// let obj1 = new Product('Sergey', edit, 'date');
// obj1.show();

// //ES6 
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price * make25PercentDiscount;
//     }

//     show() {
//         alert(this.name);
//         alert(this.price);
//     }
// }

// let make25PercentDiscount = 0.75;
// let obj2 = new Product('Sergey', 50);
// obj2.show();

