const singupForm = document.querySelector('#singupForm')
singupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#crearName')
    const email = document.querySelector('#crearEmail')
    const password = document.querySelector('#crearPassword')

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('¡El usuario ya esta registrado!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('¡Registro exitoso!')
    window.location.href ='index_ingresar.html'
})