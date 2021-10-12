'use strict';
// Задание 1
function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Число должно быть целым от 0 до 999.');
        return {};
    }

    return {
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
        units: num % 10,
    }
}

console.log(getNumber(456));

// Задание 1.1
// ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const product1 = new Product('Товар', 50);
product1.make25PercentDiscount();

console.log(product1);

//ES6 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

const product1 = new Product('Товар', 50);
product1.make25PercentDiscount();

console.log(product1);

// Задание 1.2
//ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post('Serg', 'text', new Date());
console.log(post1);
post1.edit('new text');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attached1 = new AttachedPost('admin', 'text2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('new text2');
console.log(attached1);

//ES6 
function Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = text;
    }
}

const post1 = new Post('Serg', 'text', new Date());
console.log(post1);
post1.edit('new text');
console.log(post1);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('admin', 'text2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('text2');
console.log(attached1);

