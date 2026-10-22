// Captura os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const idProduto = urlParams.get('id');

async function buscarDetalhes() {
    if (!idProduto) return;

    try {
        // Faz a requisição usando o ID do produto
        const response = await fetchhttps//fly.dev{idProduto});
        const produto = await response.json();
        exibirDetalhes(produto);
    } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
    }
}

function exibirDetalhes(produto) {
    const container = document.getElementById('container-detalhes'); // Altere para o ID do seu container de detalhes
    if (!container) return;

    container.innerHTML = `
        <div class="detalhe-card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p><strong>Categoria:</strong> ${produto.produto}</p>
            <p><strong>Descrição:</strong> ${produto.descricao}</p>
            <p><strong>Restaurante:</strong> ${produto.restaurante}</p>
            <a href="cardapio.html">Voltar ao Cardápio</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', buscarDetalhes);