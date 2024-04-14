// message-form.js

window.onload = function () {
    var form = document.getElementById('message-form');
    var titleInput = document.getElementById('form-title');
    var messageInput = document.getElementById('form-text');
    var sendButton = document.getElementById('form-send');
    var cancelButton = document.getElementById('form-cancel');

    // Carregar mensagem do localStorage, se houver
    var savedMessage = localStorage.getItem('savedMessage');
    if (savedMessage) {
        var _a = JSON.parse(savedMessage), title_1 = _a.title, message_1 = _a.message;
        titleInput.value = title_1;
        messageInput.value = message_1;
    }

    // Função para salvar mensagem no localStorage
    var saveMessage = function () {
        var title = titleInput.value;
        var message = messageInput.value;
        localStorage.setItem('savedMessage', JSON.stringify({ title: title, message: message }));
    };

    // Lidar com o envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        saveMessage(); // Salva a mensagem no localStorage
        alert('Mensagem enviada com sucesso!'); // Exibe alerta de "mensagem enviada"
        form.reset(); // Limpa os campos do formulário
    });

    // Lidar com o cancelamento
    cancelButton.addEventListener('click', function () {
        localStorage.removeItem('savedMessage'); // Remove a mensagem do localStorage
        form.reset(); // Limpa os campos do formulário
        alert('Envio cancelado!');
    });
};
