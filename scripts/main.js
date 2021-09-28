/* Declaraciones*/
const d = document
const menuBtn = d.querySelector('nav .btn')
const menuList = d.querySelector('nav .menu')

/*Métodos*/
menuBtn.onclick = () => menuList.classList.toggle('active') ? menuBtn.innerHTML = "&times;" : menuBtn.innerHTML = '&equiv;'