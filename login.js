const data = [
    { url: './images/login-1.jpg' },
    { url: './images/login-2.jpg' },
    { url: './images/login-3.jpg' },
];

const img = document.querySelector('.slide'); 
let i = 0;

// 图片轮播函数
function slideShow() {
    i = (i + 1) % data.length; 
    img.src = data[i].url; 
}

setInterval(slideShow, 1000);