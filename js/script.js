// Бургер
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menunav = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menunav.classList.toggle('_active');
    });
}
//           links      
// window.addEventListener('scroll', function(){
//     console.clear();
//     let scroll = pageYOffset + 'px';
//     console.log(scroll);
// });

// const navOver = document.;
// console.log('был клик на ' + navOver);
