const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const lista = [];

function getTesteProduto(req, res) {
    res.send(lista);
}

function criandoTesteProduto(req, res) {
    const produto = req.body;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id === produto.id);
    if (!produtoPesquisado) {
        lista.push(produto);
        res.send('Produto inserido => [SUCESSO]');
    } else {
        res.send(`Não é possível inserir, já existe um produto com o id ${produto.id}`);
    }
}

function getTesteProdutoById(req, res) {
    const produtoId = req.params.id;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id == produtoId);
    if(!produtoPesquisado){
        res.send(`Não existe um produto com o id ${produtoId}`)
    } else {
        res.send(produtoPesquisado);
    }
}

function deleteTesteProduto(req, res) {
    const produtoId = req.params.id;
    lista = lista.filter((produto) => produto.id != produtoId);
    res.send(`Produto de id ${produtoId} foi removido com sucesso!`);
}

function putTesteProduto(req, res) {
    const produtoId = req.params.id;
    const produto = req.body;
    const produtoPesquisado = lista.find((produtoNaLista) => produtoNaLista.id == produtoId);
    if(!produtoPesquisado){
        res.send(`Não existe um produto com o id ${produtoId}`)
    } else {
        produtoPesquisado.id = produto.id;
        produtoPesquisado.nome = produto.nome;
        produtoPesquisado.preco = produto.preco;
        produtoPesquisado.categoria = produto.categoria;
        produtoPesquisado.descricao = produto.descricao;
        res.send(`Produto de id ${produtoId} alterado com sucesso!`);
    }
}

app.get('/produto', getTesteProduto);
app.get('/produto/:id', getTesteProdutoById);
app.post('/produto', criandoTesteProduto);
app.delete('/produto/:id', deleteTesteProduto);
app.put('/produto/:id', putTesteProduto);

app.listen(3000);