         // click log out;

import getParent from './base.js';
const logOutBtn = document.querySelector('.header__navbar-user-item--saparate--click')
console.log(logOutBtn)
const navUser = getParent(logOutBtn, '.header__navbar-user')
console.log(navUser);


const unLogins = getParent(logOutBtn, '.header__navbar-list').querySelectorAll('.header__navbar-item--bold')
console.log(unLogins)



logOutBtn.addEventListener('click', function(){
    navUser.classList.add('header__navbar-user--register')
    for(var unLogin of unLogins){
        unLogin.classList.remove('header__navbar-user--register')
    }
})
