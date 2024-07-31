import { connection, authenticate } from './config/database.js'
import { Cliente } from './models/Cliente.js'
import { Endereco } from './models/Endereco.js'
import { Pet } from './models/Pet.js'
import express from 'express'

authenticate(connection).then(() => {
  connection.sync() // Sincroniza os Models no banco de dados
  
  // OBS.: connection.sync({force: true}) 
  // force: true -> irá dropar tudo e criar do zero novamente. Deixar ativa na fase de desenvolvimento é útil, mas é perigoso deixar sempre ativa. RECOMENDADO APENAS DURANTE O DESENVOLVIMENTO!!!
})

// Definir a aplicação backend em Express
// Já tem recursos pré-configurados
const app = express()

// Definir os endpoints do backend
// Métodos: GET (leotura), POST (inserção), PUT (alteração), DELETE (remoção)
app.get('/hello', (req, res) => { // função manipuladora de rota
  res.send('Hello, World!') // envio da resposta para quem solicitou
})

// Listagem de todos os clientes
app.get('/clientes', async (req, res) => {
  const listaClientes = await Cliente.findAll() // = SELECT * FROM cliente
  res.json(listaClientes) // resposta em JSON
})

// Listagem de um cliente específico (ID = ?)
// :id = parâmetro de rota
app.get('/clientes/:id', async (req, res) => {
  const cliente = await Cliente.findOne({
    where: { id: req.params.id }, // = SELECT * FROM cliente WHERE id = ?
    include: [Endereco] // juntar os dados do cliente com seu endereco (JOIN)
  }) 
  if(cliente) {
    res.json(cliente)
  } else {
    res.status(404).json({ message: 'Cliente não encontrado!' })
  }
})

// Rodar a aplicação backend
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/')
})
