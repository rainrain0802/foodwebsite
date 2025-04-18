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


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username) {
        alert('Username is required');
        isValid = false;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        isValid = false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
    }
});