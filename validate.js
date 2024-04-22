const inputs = document.querySelectorAll('.formcontato__input')
const avisoErro = document.querySelectorAll('.formcontato__aviso__erro')
const mensagem = document.querySelector('.formcontato__textarea')
const emailValido = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/ 
const form = document.querySelector('.formcontato__form')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  validaNome()
  validaAssunto()
  validaEmail()
  validaMensagem()
})

function validaNome() {
  if(inputs[0].value.length < 3) {
    sinalizarErro(0)
  } else {
    removerErro(0)
  }
}

function validaEmail() {
  if(!emailValido.test(inputs[1].value)) {
    sinalizarErro(1)
  } else {
    removerErro(1)
  }
}

function validaAssunto() {
  if(inputs[2].value.length > 15 || inputs[2].value == '') {
    sinalizarErro(2)
  } else {
    removerErro(2)
  }
}

function validaMensagem() {
  if(mensagem.value.length > 250 || mensagem.value == '') {
    mensagem.style.border = '2px solid #ff0000'
    avisoErro[3].style.display = 'block'
  } else {
    removerErro(3)
  }
}

function sinalizarErro(index) {
  inputs[index].style.border = '2px solid #ff0000'
  avisoErro[index].style.display = 'block'
}

function removerErro(index) {
  inputs[index].style.border = ''
  avisoErro[index].style.display = 'none'
}

inputs.forEach(function(input, index) {
  input.addEventListener('focus', function() {
    removerErro(index);
  });
});


mensagem.addEventListener('focus', () => {
    mensagem.style.border = ''
    avisoErro[3].style.display = 'none'
})

inputs[0].addEventListener('focusout', validaNome)
inputs[1].addEventListener('focusout', validaEmail)
inputs[2].addEventListener('focusout', validaAssunto)