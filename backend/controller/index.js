const shortid = require('shortid');

let series = [
    {
        id: shortid.generate(),
        name: 'Euphoria',
        onAir: '2019 - Atual',
        active: 'true',
        synopsis: 'Um grupo de estudantes do ensino médio lida com diferentes situações típicas da idade como drogas, sexo, busca pela identidade, traumas, comportamento nas redes sociais e amizade.',
        imdbNote: 8.5,
        genres: ['Drama', 'Diversidade'],
        origin: 'EUA',
        cast: ['Zendaya', 'Hunter Schafer', 'Alexa Demie', 'Sydney Sweeney'],
        seasons: '3',
        episodes: '8',
        mins: '55min',
        imageLink: 'https://i.pinimg.com/originals/6b/df/dd/6bdfdd082f8fb051d56ce18c8c6725fe.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Skam',
        onAir: '2015 - 2017',
        active: 'false',
        synopsis: 'A série acompanha os escândalos, problemas e rotina de adolescentes de uma conceituada escola em Oslo, Noruega. Cada temporada é focada em um adolescente diferente, sendo eles Eva, Noora, Isak e Sana. Aborda a conscientização sobre diversidade, desigualdade e as peculiaridades da vida adolescente.',
        imdbNote: 8.7,
        genres: ['Drama', 'Diversidade'],
        origin: 'Noruega',
        cast: ['Lisa Teige', 'Josefine Frida', 'Tarjei Sandvik Moe', 'Iman Meskini'],
        seasons: '4',
        episodes: '11',
        mins: '30min',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BMzc5NmE5ZDItZGQxZC00ZTdhLThlYzktYjE0NWIyZDM3OGRlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Genera+ion',
        onAir: '2021',
        active: 'false',
        synopsis: 'Genera+tion acompanha o dia a dia de um grupo de estudantes de uma escola na Califórnia, esboçando um retrato da Geração Z. Na série, eles têm de lidar com famílias disfuncionais, questões de gênero, sexualidade e seu futuro iminente — o que, por si só, é bastante assustador.',
        imdbNote: 6.9,
        genres: ['Drama', 'Comédia', 'Diversidade'],
        origin: 'EUA',
        cast: ['Justice Smith', 'Chase Sui Wonders', 'Nava Mau', 'Chloe East'],
        seasons: '1',
        episodes: '16',
        mins: '30min',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BZDllMzAzOGItYTY0NC00MWM1LThkODYtYzQ5ZTQ5YmJiOWMzXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Scream',
        onAir: '2015 - 2019',
        active: 'false',
        synopsis: 'À solta em uma cidade, um assassino mascarado persegue um grupo de jovens e traz à tona lembranças de um passado sombrio. Assista o quanto quiser. Mestre do terror e diretor da franquia Pânico, Wes Craven foi o produtor executivo desta série.',
        imdbNote: 7.1,
        genres: ['Terror', 'Slasher'],
        origin: 'EUA',
        cast: ['Willa Fitzgerald', 'Audrey Jensen', 'Carlson Young', 'Noah Foster'],
        seasons: '3',
        episodes: '10',
        mins: '40min',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BNjVmY2M3ZTUtMDhkZC00ODk4LTkwMjktNDRjNGRjYTIxZGZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'O Mundo Sombrio de Sabrina',
        onAir: '2018 - 2020',
        active: 'false',
        synopsis: 'A trama acompanha a vida de Sabrina Spellman, uma adolescente que é metade bruxa e metade humana, que só queria viver uma vida normal. No entanto, desde o seu nascimento, ela tem deveres a cumprir com a escuridão e não consegue fugir disso.',
        imdbNote: 7.5,
        genres: ['Terror', 'Sobrenatural', 'Adaptação'],
        origin: 'EUA',
        cast: ['Kiernan Shipka', 'Ross Lynch', 'Miranda Otto', 'Lucy Davis'],
        seasons: '2',
        episodes: '18',
        mins: '55min',
        imageLink: 'https://img.elo7.com.br/product/original/35DB1B1/big-poster-o-mundo-sombrio-de-sabrina-lo01-90x60-cm-quadro.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'My Mad Fat Diary',
        onAir: '2013 - 2015',
        active: 'false',
        synopsis: 'Situada na década de 1990, a história acompanha a vida de Rae, uma jovem obesa de 16 anos que vive em Lincolnshire com a sua mãe. Recém saída de um hospital psiquiátrico, ela vê-se num mundo no qual não se sente à vontade. Sem perder o bom humor e a sua crença no amor, Rae pretende alcançar o seu objectivo.',
        imdbNote: 8.5,
        genres: ['Drama', 'Comédia', 'Adaptação'],
        origin: 'Reino Unido',
        cast: ['Sharon Rooney', 'Nico Mirallegro', 'Jodie Comer', 'Ciara Baxendale'],
        seasons: '3',
        episodes: '6',
        mins: '48min',
        imageLink: 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131252-uau-posters-series-seriado-my-mad-fat-diary.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Glee',
        onAir: '2009 - 2015',
        active: 'false',
        synopsis: 'A história se passa na fictícia William McKinley High School, em Lima, Ohio, e gira em torno de um grupo de estudantes entusiasmados e ambiciosos na sua luta para viver seu cotidiano nos cruéis corredores do colégio.',
        imdbNote: 6.9,
        genres: ['Musical', 'Comédia', 'Drama', 'Diversidade'],
        origin: 'EUA',
        cast: ['Lea Michele', 'Jane Lynch', 'Dianna Agron', 'Chris Colfer'],
        seasons: '6',
        episodes: '22',
        mins: '45min',
        imageLink: 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/1/513320201013-uau-posters-series-glee-2.jpg',
        comment: '',
        type: 'watched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'That 70s show',
        onAir: '1998 - 2006',
        active: 'false',
        synopsis: 'A história se inicia em meados de 1976, e relata o dia-a-dia de um grupo de adolescentes na faixa dos 17 anos. Sem ter muito o que fazer, sua rotina se resume a se reunir no porão da casa de Eric para papear, fazer festas, planejar algo, namorar, e usar certas ervas ilícitas.',
        imdbNote: 8.1,
        genres: ['Comédia'],
        origin: 'EUA',
        cast: ['Topher Grace', 'Laura Prepon', 'Ashton Kutcher', 'Debra Jo Rupp'],
        seasons: '8',
        episodes: '25',
        mins: '25min',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BN2RkZGE0MjAtZGVkOS00MzVhLTg0OWItZTc4OGRjOTQ1ZTM4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Rebelde',
        onAir: '2004 - 2006',
        active: 'false',
        synopsis: 'É uma história de adolescentes que abrem os olhos para a realidade do mundo em um ambiente elitista, onde o poder e os bens materiais são supervalorizados. Eles vão lutar pelo direito de amar, romper as barreiras sociais e pelos ideais nos quais acreditam.',
        imdbNote: 7.5,
        genres: ['Musical', 'Novela'],
        origin: 'México',
        cast: ['Anahí', 'Alfonso Herrera', 'Dulce Maria', 'Maite Perroni'],
        seasons: '3',
        episodes: '120',
        mins: '45min',
        imageLink: 'https://ih1.redbubble.net/image.2547654026.5541/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'De Volta Aos 15',
        onAir: '2022 - Atual',
        active: 'true',
        synopsis: 'Na série De Volta aos 15, aos 30 anos de idade, Anita (Maisa) está extremamente infeliz com o caminho que sua vida tomou. Cansada, ela encontra o primeiro blog que criou, aos 15 anos de idade. Desejando voltar para uma época em que tudo era mais fácil, a jovem adulta fecha os olhos e, ao abrí-los, tem seu desejo realizado, voltando no tempo para o período que tanto queria, porém, com sua mentalidade atual.',
        imdbNote: 6.7,
        genres: ['Comédia', 'Romance'],
        origin: 'Brasil',
        cast: ['Maisa Silva', 'Amanda Azevedo', 'Katie Anne Moy', 'Camila Queiroz'],
        seasons: '1',
        episodes: '6',
        mins: '40min',
        imageLink: 'https://t.ctcdn.com.br/e1kwUlnBiBpdkeKMbyCEvaLNqWo=/1024x0/smart/i550929.jpeg',
        comment: '',
        type: 'watched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'Looking For Alaska',
        onAir: '2019',
        active: 'false',
        synopsis: 'Miles Halter é um adolescente obcecado pelas últimas palavras de pessoas famosas. Cansado da vida monótona e segura que leva em casa, o jovem decide se aventurar em uma nova escola, onde encontra alguém prestes a tirá-lo da mesmisse: a ousada e increvelmente charmosa Alasca Young. Baseado no livro homônimo de John Green.',
        imdbNote: 8.1,
        genres: ['Drama', 'Romance', 'Adaptação'],
        origin: 'EUA',
        cast: ['Charlie Plummer', 'Kristine Froseth', 'Denny Love', 'Jay Lee'],
        seasons: '1',
        episodes: '8',
        mins: '50min',
        imageLink: 'https://i.weltbild.de/p/looking-for-alaska-movie-tie-in-287449558.jpg?v=1&wp=_max',
        comment: '',
        type: 'notWatched',
        opinion: ''
    },
    {
        id: shortid.generate(),
        name: 'The Society',
        onAir: '2019',
        active: 'false',
        synopsis: 'The Society acompanha um grupo de adolescentes que são misteriosamente transportados para um fac-símile de sua cidade, mas sem qualquer vestígio de seus pais. Enquanto tentam descobrir o que aconteceu com eles e como retornar para casa, os jovens devem estabelecer a ordem e formar alianças se quiserem sobreviver.',
        imdbNote: 7.1,
        genres: ['Drama', 'Sci-fi', 'Distopia'],
        origin: 'EUA',
        cast: ['Kathryn Newton', 'Kristine Froseth', 'Sean Berdy', 'Olivia DeJonge'],
        seasons: '1',
        episodes: '10',
        mins: '53min',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BYTYwMWRjNmYtMzAyNy00OTJkLWI1ZjktNTQ1OTM1ODYxNDY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        comment: '',
        type: 'watched',
        opinion: ''
    }
]

const getNotWatched = (_, res) => {
    const notWatched = series.filter(elem => elem.type === 'notWatched');
    return res.json(notWatched);
}

const getNotWatchedOne = (req, res) => {
    const { id } = req.params;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        return res.status(404).json({message: 'Série não encontrada'});
    } else {
        return res.status(200).json(ret);
    }
}

const turnToWatched = (req, res) => {
    const { id } = req.params;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        return res.status(404).json({message: 'Série não encontrada'});
    } else {
        const serie = ret[0];
        if (serie.type === 'watched') {
            return res.status(400).json({message: 'Série já está marcada como assistida'});
        } else {
            serie.type = 'watched';

            series = series.map(elem => {
                if (elem.id === id) elem = serie;
                return elem;
            })

            return res.status(200);
        }
    }
}

const getWatched = (_, res) => {
    const watched = series.filter(elem => elem.type === 'watched');
    return res.status(200).json(watched);
}

const getWatchedOne = (req, res) => {
    const { id } = req.params;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        res.status(404).json({message: 'Série não encontrada'});
    } else {
        res.status(200).json(ret);
    }
}

const turnToNotWatched = (req, res) => {
    const { id } = req.params;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        res.status(404).json({message: 'Série não encontrada'});
    } else {
        const serie = ret[0];
        if (serie.type === 'notWatched') {
            res.status(400).json({message: 'Série já está marcada como não assistida'});
        } else {
            serie.type = 'notWatched';

            series = series.map(elem => {
                if (elem.id === id) elem = serie;
                return elem;
            })

            res.status(200);
        }
    }
}

const addComment = (req, res) => {
    const { id } = req.params;
    const { comment } = req.comment;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        res.status(404).json({message: 'Série não encontrada'});
    } else {
        const serie = ret[0];
        serie.comment = comment;

        series = series.map(elem => {
            if (elem.id === id) elem = serie;
            return elem;
        })

        res.status(200);
    }
}

const getComment = (req, res) => {
    const {id} = req.params;

    const ret = series.filter(elem => elem.id === id);

    if (ret.length === 0) {
        res.status(404).json({message: 'Série não encontrada'});
    } else {
        res.status(200).json(ret[0].comment);
    }
}

const getGenres = (_, res) => {
    const genres = [];

    for (i = 0; i < series.length; i++) {
        for (j = 0; j < series[i].genres.length; j++) {
            if (!genres.includes(series[i].genres[j])) {
                genres.push(series[i].genres[j]);
            }
        }
    }

    return res.status(200).json(genres);
}

const getNotWatchedByGenre = (req, res) => {
    const { genre } = req.params;

    const ret = series.filter(elem => elem.type === 'notWatched' && elem.genres.includes(genre));

    res.status(200).json(ret);
}

const getNotWatchedByStatus = (req, res) => {
    const { status } = req.params;

    const ret = series.filter(elem => elem.type === 'notWatched' && elem.active === status);

    res.status(200).json(ret);
}

const getNotWatchedByNote = (_, res) => {
    const notWatched = series.filter(elem => elem.type === 'notWatched');

    const ret = notWatched.sort(function (a, b) {
        if (a.imdbNote < b.imdbNote) {
            return 1;
        }
        if (a.imdbNote > b.imdbNote) {
            return -1;
        }
        return 0;
    })

    res.status(200).json(ret);
}

const getWatchedByOpinion = (req, res) => {
    const { opinion } = req.params;
    const watched = series.filter(elem => elem.type === 'watched');

    const ret = watched.filter(elem => elem.opinion === opinion);

    res.status(200).json(ret);
}

const changeOpinion = (req, res) => {
    const { id, opinion } = req.params;
    const watched = series.filter(elem => elem.id === id);
    
    if (watched.length === 0) {
        res.status(404).json({message: 'Série não encontrada'});
    } else {
        const serie = watched[0];
        serie.opinion = opinion;

        series = series.map(elem => {
            if (elem.id === id) elem = serie;
            return elem;
        })

        res.status(200);
    }
}

const empty = (_, res) => {
    const notWatched = series.filter(elem => elem.type === 'notWatched');

    const ret = notWatched.filter(elem => elem.active === 'no');

    res.status(200).json(ret);
}

module.exports = {
    getNotWatched,
    getNotWatchedOne,
    turnToWatched,
    getWatched,
    getWatchedOne,
    turnToNotWatched,
    addComment,
    getComment,
    getGenres,
    getNotWatchedByGenre,
    getNotWatchedByStatus,
    getNotWatchedByNote,
    getWatchedByOpinion,
    changeOpinion,
    empty
}