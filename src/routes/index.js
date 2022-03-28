const express = require('express')
const router = express.Router()

const AppController = require('../controller/appController');

//Pega todas as séries ainda não assistidas
router.get('/nwd', AppController.getNotWatched);

//Pega a série não assistida pelo id para abrir o modal
router.get('/seriesNotWatched/:id', AppController.getNotWatchedOne);

//Marca a série como assistida e registra uma opinião sobre ela
router.put('/seriesNotWatched/:id', AppController.turnToWatched);

//Pega os gêneros das séries não assistidas
router.get('/seriesNotWatched/genre', AppController.getGenres);

//Pega as séries não assistidas pelo gênero
router.get('/seriesNotWatched/genre/:genre', AppController.getNotWatchedByGenre);

//Pega as séries de acordo com o status (ativa ou inativa)
router.get('/seriesNotWatched/status/:status', AppController.getNotWatchedByStatus);

//Pega as séries em ordem da mais bem avaliada para a menos
router.get('/seriesNotWatched/note', AppController.getNotWatchedByNote);

//Pega as séries já assistidas
router.get('/seriesWatched', AppController.getWatched);

//Pega a série assistida pelo id para abrir o modal
router.get('/seriesWatched/:id', AppController.getWatchedOne);

//Marca a série como não assistida
router.put('/seriesWatched/:id', AppController.turnToNotWatched);

//Faz um comentário em uma série assistida
router.post('/seriesWatched/:id', AppController.addComment);

//Pega o comentário de uma série assistida
router.get('/seriesWatched/:id/comment', AppController.getComment);

//Pega as séries assistidas de acordo com a opinião do usuário
router.get('/seriesWatched/opinion/:opinion', AppController.getWatchedByOpinion);

//Pega as séries assistidas de acordo com a opinião do usuário
router.put('/seriesWatched/:id/opinion/:opinion', AppController.changeOpinion);

module.exports = router