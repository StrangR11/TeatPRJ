const logo = document.querySelector('.header__logo');
const specialityInfo = document.querySelector('.speciality__info')
console.log(logo.getBoundingClientRect().left);
specialityInfo.setAttribute('style', `padding-left: ${logo.getBoundingClientRect().left}px;`)
window.addEventListener('resize', ()=>{
	specialityInfo.setAttribute('style', `padding-left: ${logo.getBoundingClientRect().left}px;`)
})