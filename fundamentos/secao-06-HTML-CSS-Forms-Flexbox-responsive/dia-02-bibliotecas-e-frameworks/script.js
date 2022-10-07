let botao = document.querySelector('#btn-submit')
function prevent (){
    let name = document.querySelector('#name-content').value
    let email = document.querySelector('#email-content').value
    if(name.length < 10 || name.length > 40){
        alert('Dados inválidos')
    }else if (email.length < 10 || email.length > 40){
        alert('Dados inválidos')
    } else alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
}

botao.addEventListener('click', function(event){
    prevent()
    event.preventDefault()
})