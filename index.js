function c (a){
    console.log(a)
}

// Arrays
const userA = []
const passA = [] 

// Llamado a elementos
const user = document.getElementById('user')
const send = document.getElementById('sendButton')
const validate = document.getElementById('val')

// Funciones

function buscador (_user, lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === _user){
            return true
        }
        else{
            return false
        }
    }
}

function pushUser (){
    const validacion = buscador (user.value, userA)
    if (!validacion){
        userA.push(user.value)
        c('agregado')

    }
}


send.addEventListener('click', ()=>{
    pushUser()

})

validate.addEventListener('click', ()=>{
    c(userA)
})

