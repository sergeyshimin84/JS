'use strict';
// Домашнее задание к уроку 3
// Задание 1
for (let i = 0; i <= 1; i++) {
    if (i % 2 == 0 && i != 0) {
        console.log(i + " - четное число");
    } if (i % 2 == 1 && i != 0) {
        console.log(i + " - нечетное число");
    } if (i == 0) {
        console.log(i + " - это ноль");
    }
}

// Задание 2
const post = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(discount => {
    discount.price = discount.price * 0.85;
});
console.log(products);

// Задание 4
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsPhotos = products2.filter(i => "photos" in i && i.photos.length > 0);
console.log(productsPhotos);
let productsPrice = products2.sort(function (i1, i2) {
    return i1.price - i2.price;
});
console.log(productsPrice);


// Задание 6
for (let i = "X"; i.length <= 20; i += "X") {
    console.log(i);
}