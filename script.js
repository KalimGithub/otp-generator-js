// const btn = document.querySelector('button');
const target = document.createElement('p')
const container = document.querySelector('.container')
// const select = document.querySelector('select');
// let n = select.value;

const p = document.createElement('p');
const btn = document.createElement('button');
p.textContent='Click on Button to generate 6 digit OTP';
btn.innerText='Generate OTP';

btn.style.backgroundColor='red';
btn.style.color='white';

btn.addEventListener('click', () => {
    let otp = "";
    for(let i=0; i<6; i++){
        otp += Math.floor(Math.random()*10);
    }
    target.innerHTML=`OTP is: ${otp}`;
    target.style.color='#04AA6D';
})
container.append(p,btn,target);



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/KalimGithub/otp-generator-js.git
// git push -u origin main