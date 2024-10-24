const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',() => {
    container.classList.add("active");

});

loginBtn.addEventListener('click',() => {
    container.classList.remove("active");

});

const buttons = document.querySelectorAll('a');
buttons.forEach(button => {
    btn.addEventListener('click',function(e) {
        let x = e.clientX - e.target.offstLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('button');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
})