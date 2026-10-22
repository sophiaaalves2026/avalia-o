function iniciarContador() {
    const elementoContador = document.getElementById('contador'); // Altere para o ID correto do seu HTML

    if (!elementoContador) return;

    setInterval(() => {
        const agora = new Date();
        const meiaNoite = new Date();
        
        // Define para a meia-noite do dia atual (que vira o próximo dia)
        meiaNoite.setHours(24, 0, 0, 0); 

        const diferenca = meiaNoite - agora;

        // Cálculos de horas, minutos e segundos
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        // Formata os números para terem sempre dois dígitos (ex: 02)
        const hFormatado = String(horas).padStart(2, '0');
        const mFormatado = String(minutos).padStart(2, '0');
        const sFormatado = String(segundos).padStart(2, '0');

        elementoContador.textContent = As ofertas exclusivas terminam em: {hFormatado}{mFormatado}{sFormatado};
    }, 1000);
}

document.addEventListener('DOMContentLoaded', iniciarContador);