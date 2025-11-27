const express = require('express'); // importa o express para dentro do arquivo

const app = express(); // chama as funções do express por meio da variável app

const PORT = 3000; // define a porta onde a aplicação vai rodar

// IMPLEMENTAÇÃO DAS ROTAS
app.get('/', (req, res) => {
    console.log(`Entrou na Raiz!`);
    res.send(`Bem-vindo à página inicial!`);
});

app.post('/post', (req, res) => {
    console.log(`Entrou na rota POST!`);
    res.send('Enviando o método POST, para inserir dados!');
});

app.put('/put', (req, res) => {
    console.log(`Entrou na rota PUT!`);
    res.send('Enviando o método PUT, para atualizar dados!');
});

app.delete('/delete', (req, res) => {
    console.log(`Entrou na rota DELETE!`);
    res.send('Enviando o método DELETE, para deletar dados!');
});


// função que fica 'ouvindo' tudo que acontece na porta definida
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});