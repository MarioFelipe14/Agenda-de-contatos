const form = document.getElementById('agenda')


let linhas= ''

form.addEventListener('submit',function(e){
    e.preventDefault();

    atualizaContato()
    atualizaContatoFinal()
    atualizaContatoFinal()
})


function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if(numero.includes(inputNumeroContato.value)){
        alert(`O número: ${inputNumeroContato.value} já foi inserido`)
    } else{

    }

    numero.push(inputNumeroContato.value)
    Contato.push(inputNomeContato.value)

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`

    linhas=linha

    inputNomeContato.value =''
    inputNumeroContato.value =""

    function atualizaContato() {
        const corpoAgenda = document.querySelector('tbody')
        corpoAgenda.innerHTML = linhas
        document.getElementById('contato-final-valor').innerHTML =contatoFinal.toFixed(9)
}
}