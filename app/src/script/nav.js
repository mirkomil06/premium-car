$('.nav-menu__button').click(function(e){
    e.preventDefault()
    $(this).toggleClass('active') 
    $('.nav__menu').toggleClass('active') 
})