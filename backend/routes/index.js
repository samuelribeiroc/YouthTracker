const express = require('express')
const router = express.Router()

const AppController = require('../controller/index');

//Pega todas as séries ainda não assistidas
router.get('/nwtc', AppController.getNotWatched);

//Pega a série não assistida pelo id para abrir o modal
router.get('/nwtc/:id', AppController.getNotWatchedOne);

//Marca a série como assistida e registra uma opinião sobre ela
router.put('/nwtc/:id', AppController.turnToWatched);

//Pega os gêneros das séries não assistidas
router.get('/genre', AppController.getGenres);

//Pega as séries não assistidas pelo gênero
router.get('/genre/:genre', AppController.getNotWatchedByGenre);

//Pega as séries de acordo com o status (ativa ou inativa)
router.get('/status/:status', AppController.getNotWatchedByStatus);

//Pega as séries em ordem da mais bem avaliada para a menos
router.get('/note', AppController.getNotWatchedByNote);

//Pega as séries já assistidas
router.get('/swtc', AppController.getWatched);

//Pega a série assistida pelo id para abrir o modal
router.get('/swtc/:id', AppController.getWatchedOne);

//Marca a série como não assistida
router.put('/swtc/:id', AppController.turnToNotWatched);

//Faz um comentário em uma série assistida
router.post('/swtc/:id', AppController.addComment);

//Pega o comentário de uma série assistida
router.get('/comment/:id', AppController.getComment);

//Pega as séries assistidas de acordo com a opinião do usuário
router.get('/opinion/:opinion', AppController.getWatchedByOpinion);

//Pega as séries assistidas de acordo com a opinião do usuário
router.put('/swtc/:id/opinion/:opinion', AppController.changeOpinion);

//Retorna um array vazio de séries
router.get('/empty', AppController.empty);

module.exports = router