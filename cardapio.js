const nomeDoSeuRestaurante = "NOME_DO_SEU_RESTAURANTE"; // Substitua pelo nome cadastrado no Postman
const urlAPI = https//fly.dev{nomeDoSeuRestaurante};

async function buscarProdutos() {
    try {
        const response = await fetch(urlAPI);
        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error("Erro ao buscar os produtos da API:", error);
    }
}

function exibirProdutos(produtos) {
    const container = document.getElementById('container-cards'); // Altere para o ID do seu container de cards
    if (!container) return;

    container.innerHTML = ''; // Limpa o container antes de renderizar

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card-produto'; // Sua classe CSS para o card

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <button onclick="irParaDetalhes('${produto.id}')">Ver detalhes</button>
        `;

        container.appendChild(card);
    });
}

function irParaDetalhes(id) {
    // Redireciona para a página detalhes.html passando o ID do produto pela URL
    window.location.href = detalhes.html?id=${id};
}

document.addEventListener('DOMContentLoaded', buscarProdutos);