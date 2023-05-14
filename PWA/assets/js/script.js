const nome = document.querySelector(".nome");
const foto = document.querySelector(".foto");
const endereco = document.querySelector(".endereco");
const horas = document.querySelector(".horas");
const telefone = document.querySelector(".telefone");
const clicks = document.querySelector(".clicks");
var i=0;

function botao(){
    fetch('http://localhost:3000/api/hospitalaleatorio')
    .then(response => {
        return response.json()
    })
    .then(data => {

        var adivice = data[0][0]
        nome.textContent = adivice.nome
        endereco.textContent = `Endereço: ${adivice.endereco}`
        horas.textContent = `Horario de Funcionamento: ${adivice.horas} horas`
        telefone.textContent = `Telefone: ${adivice.telefone}`
        foto.src = adivice.urlimg
        console.log(adivice)
        clicks.textContent = `Atualizou: ${i}`
        
    })
    
    i++ 
   

};
