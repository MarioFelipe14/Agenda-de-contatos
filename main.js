const form = document.getElementById('agenda')
const nome = []
const numero = []

let linhas= ''

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaContato()
    atualizaContato()
})


function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if(numero.includes(inputNumeroContato.value)){
        alert(`O número: ${inputNumeroContato.value} já foi inserido`)
    } else{
    numero.push(inputNumeroContato.value)
    nome.push(inputNomeContato.value)
}

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas+=linha

    inputNomeContato.value =''
    inputNumeroContato.value =""
}

    function atualizaContato() {
        const corpoAgenda = document.querySelector('tbody')
        corpoAgenda.innerHTML = linhas
}

function excluirContato(index){
    nome.splice(index,1)
    numero.splice(index,1)
    atualizarLinhas()
    atualizaContato()
}

function atualizarLinhas() {
    linhas = "";
    for (let i = 0; i < nome.length; i++) {
    let linha = "<tr>";
    linha += `<td>${nome[i]}</td>`;
    linha += `<td>${numero[i]}</td>`;
    linha += "</tr>";
    linhas += linha;
    }
}