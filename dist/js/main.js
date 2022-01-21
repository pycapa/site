const mnuBtn = document.querySelector('#mnuBtn')
//const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.navbar-mobil')
const body = document.querySelector('body')

mnuBtn.addEventListener('click', function(){

   // const img = document.createElement('img')

    if(mnuBtn.classList.contains('open')){ // close Hamburger menu
        mnuBtn.classList.remove('open')
        menu.classList.add('fade-out')
        menu.classList.remove('fade-in')
        body.classList.remove('noscroll')
        setTimeout(()=>{
            menu.style.display='none'
        }, 100)
    
    } else {
        mnuBtn.classList.add('open')
        menu.classList.remove('fade-out')
        menu.classList.add('fade-in')
        menu.style.display='block' // open hamberguer menu
        body.classList.add('noscroll')
        
    }
})