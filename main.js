var nav_id=document.getElementsByTagName('nav')

window.addEventListener('scroll',()=>{
    if (window.scrollY>0){
        nav_id[0].classList.add('active')
    }
    else{
        nav_id[0].classList.remove('active')
    }
})

var hamburger_id=document.querySelector('.hamburger')
var close_id=document.querySelector('.close')

var nav_menu_id=document.querySelector('nav .nav_menu')


hamburger_id.addEventListener('click',()=>{
    hamburger_id.style.display='none'
    close_id.style.display='block'
    nav_menu_id.style.display='flex'
})

close_id.addEventListener('click',()=>{
    hamburger_id.style.display='block'
    close_id.style.display='none'
    nav_menu_id.style.display='none'
})