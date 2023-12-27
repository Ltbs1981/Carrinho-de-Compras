alert('Bem vindo ao melhor e mais variado site de compras!');
let totalGeral = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    
    // Extrair o valor unitário usando expressão regular para tratar diferentes formatos
    let match = produto.match(/R\$\s*([\d.,]+)/);
    let valorUnitario = match ? parseFloat(match[1].replace(',', '.')) : 0;

    let quantidade = parseFloat(document.getElementById('quantidade').value) || 0;
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;
    
    totalGeral += preco;
    
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

limpar();
