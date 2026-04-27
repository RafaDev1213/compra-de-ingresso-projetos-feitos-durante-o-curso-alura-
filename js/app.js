function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (quantidade =='' || quantidade == '0') {
        alert('ERROR! nenhuma quantidade selecionada')
        document.getElementById('qtd').value='';
        return
    }

    if (tipoIngresso == 'pista') {
        checarPista(quantidade)
        
    } if (tipoIngresso == 'superior') {
        checarSuperior(quantidade)
    }if (tipoIngresso == 'inferior') {
        checarInferior(quantidade)
    }

    document.getElementById('qtd').value='';
}




function checarPista(quantidade) {

    let qtdpista = parseInt(document.getElementById('qtd-pista').textContent);
    
    

    if (quantidade > qtdpista) {
        alert('ERRO! quantidade insuficiente de ingressos');
        return
    } else {
        
        qtdpista= qtdpista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdpista;
        alert('COMPRA realizada com sucesso')
    }
    
}

function checarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > qtdSuperior) {
        alert('ERRO! quantidade insuficiente de ingressos');
        return
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('COMPRA realizada com sucesso')

    }

}

function checarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > qtdInferior) {
        alert('ERRO! quantidade insuficiente de ingressos');
        return
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('COMPRA realizada com sucesso')
    }
}





