const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const rightnav = document.querySelector('.rightnav');
const nav_list = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    //agar rightnav wala class chal raha ha to v-class-resp is ko chalao
    //warna is ka oppostie
    rightnav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});