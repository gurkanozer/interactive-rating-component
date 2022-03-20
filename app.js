const btn = document.querySelector('.card__submit-btn');
const rating = document.querySelector('.card__rating');
const thankYou = document.querySelector('.card__thank-you');
const radioBtns = document.querySelectorAll('.card__radio input');
const badge = document.querySelector('.card__badge');

btn.addEventListener('click',()=>{
    btn.classList.add('active');
    let isChecked = false;
    radioBtns.forEach(rb=>{
        if(rb.checked){
            badge.innerHTML = `You selected ${rb.value} out 5`
            isChecked = true;
        }
    });
    setTimeout(()=>{
        btn.classList.remove('active');
        if(isChecked){
            rating.classList.remove('active');
            thankYou.classList.add('active');
        }
    },300)
})