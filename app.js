const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.quest');
const yesBtn = document.querySelector('.yes_btn');
const noBtn = document.querySelector('.no_btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click',()=>{
    question.innerHTML = 'I LOVE YOU TOO :):)';
});

noBtn.addEventListener('mouseover',()=>{
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width))+1;

    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height))+1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});