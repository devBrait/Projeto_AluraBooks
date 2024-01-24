let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPreco.addEventListener('click', ordenarLivrosPrecos)

function ordenarLivrosPrecos(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}
