// menu funcionality.
// hamburger boton.
const mnuBtn = document.querySelector('#mnuBtn')
const menu = document.querySelector('.navbar-mobil')
const body = document.querySelector('body')
const $mnuMobil = document.querySelector('#mnuMobil')

$mnuMobil.addEventListener('click', () => {mnuBtn.click()})

mnuBtn.addEventListener('click', function(){

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

// fix nav bar 

window.addEventListener('scroll', ()=>{
    const $navbar = document.getElementById('navbar')

    if ($navbar.clientHeight < window.scrollY) {
        $navbar.classList.add('navbar-effect')
    } else{
        $navbar.classList.remove('navbar-effect')
    }

})
const options = {}


// Intercepction

$sections = document.querySelectorAll('section')
$links = document.querySelectorAll('#navbarNavAltMarkup a')


$interception = new IntersectionObserver((inputs, options)=>{
    inputs.forEach(input => {
        if(input.isIntersecting){
            const id = '#' + input.target.id
            history.pushState({},'',id)
            $links.forEach(link => {
                const href = link.attributes.href.nodeValue
                if(href === id){
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
            })
        }
    });
}, {
    threshold: 1,
    rootMargin: '0px 0px 30% 0px'
})

$sections.forEach(element => {
    $interception.observe(element)
});


const $form = document.getElementById('contact-form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        form.reset
        handleAlert("Thanks for contact me, I'll contact you soon", 'success')
    } else{
        handleAlert("Something wrong happend, I couldn't send the enquiry", 'danger')
    }
}

const $alertPlaceholder = document.getElementById('alertPlaceHolder')
function handleAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    $alertPlaceholder.append(wrapper)
}