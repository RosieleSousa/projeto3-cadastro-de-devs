const form = document.getElementById("login")
form.addEventListener("register-button", function (ev){
    ev.preventDefault()
    function register(ev) {
       const sectionElement = ev.currentTarget.parentNode
       const username = sectionElement.children.username.value
   }
   const button = document.getElementById('register-button')
   button.addEventListener('click', register)  
}) 