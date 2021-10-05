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

let obj1 = new Product(Product(50[1]));
obj1.make25PercentDiscount();

// //ES6 
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     make25PercentDiscount() {
//         alert(this.price * 0.75);
//     }
// }

// let obj2 = new Product('Sergey', 50);
// obj2.make25PercentDiscount();

// // Задание 1.2
// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.edit = function () {
//     alert(this.text);
// };

// let bObj = new Post('Author', 'text', 'date');
// bObj.edit();

// //ES6 
// class Post {
//     constructor(author, text, date) {
//         this.author = author;
//         this.text = text;
//         this.date = date;
//     }

//     edit() {
//         alert(this.text);
//     }
// }

// let bObj = new Post('Author', 'text', 'date');
// bObj.edit();


