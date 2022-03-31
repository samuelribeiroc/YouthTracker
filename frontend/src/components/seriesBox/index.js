import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { AiFillStar } from 'react-icons/ai';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

import { SerieImage,
Container, 
Categories,
Category,
Box,
BoxSeries,
SerieName,
SerieCard,
BoxGenres,
Modal,
ModalContainer,
ModalImage,
ModalInfos,
ModalInfosTop,
ModalNoteVisibility,
ModalChangeSeen,
ModalImdbNote,
ModalCloseButton,
ModalSerieNote,
ModalSerieNoteImdb} from "./style";

export default function SeriesBox(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [genres, setGenres] = useState([]);
    const [window, setWindow] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [genreSelected, setGenreSelected] = useState('');

    const [serieOpened, setSerieOpened] = useState({});
    const [comment, setComment] = useState(serieOpened.comment);
    const [opinion, setOpinion] = useState(serieOpened.opinion);
    const [seen, setSeen] = useState(serieOpened.type);

    useEffect(() => {
        setFilteredSeries(props.series)

        return () => {
            setFilteredSeries([]);
        }
    }, [props.series])

    useEffect(() => {
        api.get('/genre').then((res) => {
            setGenres(res.data);
        })

        return () => {
            setGenres([]);
        }
    }, [])

    function changeSerieOpinion(opinion) {
        api.put(`/swtc/${serieOpened.id}/opinion/${opinion}`);
        setOpinion(opinion);
    }

    function turnSerieToWatched() {
        api.put(`/nwtc/${serieOpened.id}`);
        setSeen('watched');
    }

    function turnSerieToNotWatched() {
        api.put(`/swtc/${serieOpened.id}`);
        setSeen('notWatched');
    }

    function doComment() {
        if (comment !== '') {
            api.post(`/swtc/${serieOpened.id}`, comment);
        }
    }

    function setToAll() {
        return (
            setFilteredSeries(props.series)
        )
    }

    async function selectGenre(genre) {
        return api.get(`/genre/${genre}`).then((res) => {
            setFilteredSeries(res.data);
            setGenreSelected(genre);
        })
    }

    function selectActives(bool) {
        return api.get(`/status/${bool}`).then((res) => {
            setFilteredSeries(res.data);
        })
    }

    function click(serie) {
        setSerieOpened(serie);
        setIsModalOpen(true);
    }

    function getSeriesByGenresAndStatus() {
        setFilteredSeries([]);
    }

    function getSeriesByNotes() {
        api.get('/note').then((res) => {
            setFilteredSeries(res.data);
        })
        setWindow(3)
    }

    async function changeFilterNotWatched(number) {
        if (number === 0) {
            setToAll();
            setWindow(0)
        } else if (number === 1) {
            getSeriesByGenresAndStatus()
            setWindow(1);
        } else if (number === 2) {
            getSeriesByGenresAndStatus()
            setWindow(2);
        } else if (number === 3) {
            getSeriesByNotes();
        }
    }

    function watchedByOpinion(opinion) {
        return (api.get(`/opinion/${opinion}`).then((res) => {
            setFilteredSeries(res.data);
        }))
    }

    async function changeFilterWatched(number) {
        if (number === 0) {
            setToAll();
            setWindow(0)
        } else if (number === 1) {
            watchedByOpinion('favorite');
            setWindow(1);
        } else if (number === 2) {
            watchedByOpinion('liked');
            setWindow(2);
        } else if (number === 3) {
            watchedByOpinion('abandoned');
            setWindow(3);
        }
    }

    return (
        <>
            { props.type === 'notWatched' ?
                <>
                    <Container>
                        { window === 0 && (
                            <>
                                <Categories>
                                    <Category selected onClick={() => changeFilterNotWatched(0)}>Todas</Category>
                                    <Category onClick={() => changeFilterNotWatched(1)}>Gêneros</Category>
                                    <Category onClick={() => changeFilterNotWatched(2)}>Status</Category>
                                    <Category onClick={() => changeFilterNotWatched(3)}>Nota</Category>
                                </Categories>
                                <Box>
                                    <div></div>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                        { window === 1 && (
                            <>
                                <Categories>
                                    <Category onClick={() => changeFilterNotWatched(0)}>Todas</Category>
                                    <Category selected onClick={() => changeFilterNotWatched(1)}>Gêneros</Category>
                                    <Category onClick={() => changeFilterNotWatched(2)}>Status</Category>
                                    <Category onClick={() => changeFilterNotWatched(3)}>Nota</Category>
                                </Categories>
                                <Box>
                                    <BoxGenres>
                                        {genres?.map((genre, index) => (
                                            <div key={index}>
                                                <div onClick={() => selectGenre(genre)}>{genre}</div>
                                            </div>
                                        ))}
                                        <div>{genreSelected}</div>
                                    </BoxGenres>
                                    <div style={{ display: 'flex'}}>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                    </div>
                                </Box>
                            </>
                        )}
                        { window === 2 && (
                            <>
                                <div>
                                    <div onClick={() => changeFilterNotWatched(0)}>Todas</div>
                                    <div onClick={() => changeFilterNotWatched(1)}>Gêneros</div>
                                    <div onClick={() => changeFilterNotWatched(2)}>Status</div>
                                    <div onClick={() => changeFilterNotWatched(3)}>Nota</div>
                                </div>
                                <div>
                                    <div>
                                        <div onClick={() => selectActives('true')}>Ativas</div>
                                        <div onClick={() => selectActives('false')}>Finalizadas</div>
                                    </div>
                                    <div>
                                        {filteredSeries?.map((serie, index) => (
                                            <div key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                        { window === 3 && (
                            <>
                                <Categories>
                                    <Category onClick={() => changeFilterNotWatched(0)}>Todas</Category>
                                    <Category onClick={() => changeFilterNotWatched(1)}>Gêneros</Category>
                                    <Category onClick={() => changeFilterNotWatched(2)}>Status</Category>
                                    <Category selected onClick={() => changeFilterNotWatched(3)}>Nota</Category>
                                </Categories>
                                <Box>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                    </Container>
                </>
                :
                <>
                    <Container>
                        { window === 0 && (
                            <>
                                <Categories>
                                    <Category selected onClick={() => changeFilterWatched(0)}>Todas</Category>
                                    <Category onClick={() => changeFilterWatched(1)}>Favoritas</Category>
                                    <Category onClick={() => changeFilterWatched(2)}>Gostei</Category>
                                    <Category onClick={() => changeFilterWatched(3)}>Abandonei</Category>
                                </Categories>
                                <Box>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                        { window === 1 && (
                            <>
                                <Categories>
                                    <Category onClick={() => changeFilterWatched(0)}>Todas</Category>
                                    <Category selected onClick={() => changeFilterWatched(1)}>Favoritas</Category>
                                    <Category onClick={() => changeFilterWatched(2)}>Gostei</Category>
                                    <Category onClick={() => changeFilterWatched(3)}>Abandonei</Category>
                                </Categories>
                                <Box>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                        { window === 2 && (
                            <>
                                <Categories>
                                    <Category onClick={() => changeFilterWatched(0)}>Todas</Category>
                                    <Category onClick={() => changeFilterWatched(1)}>Favoritas</Category>
                                    <Category selected onClick={() => changeFilterWatched(2)}>Gostei</Category>
                                    <Category onClick={() => changeFilterWatched(3)}>Abandonei</Category>
                                </Categories>
                                <Box>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                        { window === 3 && (
                            <>
                                <Categories>
                                    <Category onClick={() => changeFilterWatched(0)}>Todas</Category>
                                    <Category onClick={() => changeFilterWatched(1)}>Favoritas</Category>
                                    <Category onClick={() => changeFilterWatched(2)}>Gostei</Category>
                                    <Category selected onClick={() => changeFilterWatched(3)}>Abandonei</Category>
                                </Categories>
                                <Box>
                                    <BoxSeries>
                                        {filteredSeries?.map((serie, index) => (
                                            <SerieCard key={index}>
                                                <SerieImage src={serie.imageLink} alt={serie.name} />
                                                <SerieName onClick={() => click(serie)}>{serie.name}</SerieName>
                                            </SerieCard>
                                        ))}
                                    </BoxSeries>
                                </Box>
                            </>
                        )}
                    </Container>
                </>
            }
            { isModalOpen ? 
                <Modal>
                    { props.type === 'notWatched' ?     
                        <ModalContainer>
                            <div>
                                <ModalImage src={serieOpened.imageLink} alt={serieOpened.name} />
                            </div>
                            <ModalInfos>
                                <ModalInfosTop>
                                    <div>
                                        <div>{serieOpened.name}</div>
                                        <div>{serieOpened.onAir}</div>
                                        <div>Origem: {serieOpened.origin}</div>
                                    </div>
                                    <ModalNoteVisibility>
                                        <ModalImdbNote>
                                            <ModalSerieNoteImdb>{serieOpened.imdbNote}</ModalSerieNoteImdb>
                                            <ModalSerieNote>/10</ModalSerieNote>
                                            <AiFillStar />
                                        </ModalImdbNote>
                                        <ModalCloseButton onClick={() => setIsModalOpen(false)}><CloseIcon /></ModalCloseButton>
                                        <div>
                                            { seen === 'watched' ?
                                                <ModalChangeSeen onClick={turnSerieToNotWatched}>
                                                    <VisibilityOffIcon />
                                                    <div>Assistido</div>
                                                </ModalChangeSeen>
                                                :
                                                <ModalChangeSeen onClick={turnSerieToWatched}>
                                                    <VisibilityIcon />
                                                    <div>Assistido</div>
                                                </ModalChangeSeen>
                                            }
                                        </div>
                                    </ModalNoteVisibility>
                                </ModalInfosTop>
                                <div>
                                    <div>Gêneros</div>
                                    {serieOpened.genres?.map((genre, index) => (
                                        <div key={index}>
                                            <div>{genre}</div>
                                        </div>
                                    ))}
                                </div>
                                <div>{serieOpened.synopsis}</div>^
                                <div>
                                    <div>Elenco</div>
                                    {serieOpened.cast?.map((act, index) => (
                                        <div key={index}>
                                            <div>{act}</div>
                                        </div>
                                    ))}
                                </div>
                            </ModalInfos>
                            <div>
                                <div>Temporadas</div>
                                <div>Média de Eps por Temporada</div>
                                <div>Duração dos Episódios</div>
                                <div>{serieOpened.seasons}</div>
                                <div>{serieOpened.episodes}</div>
                                <div>{serieOpened.mins}</div>
                            </div>
                        </ModalContainer>
                        :
                        <ModalContainer>
                            <div>
                                <ModalImage src={serieOpened.imageLink} alt={serieOpened.name} />
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>{serieOpened.name}</div>
                                        <div>{serieOpened.onAir}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>{serieOpened.imdbNote}</div>
                                            <div>/10</div>
                                        </div>
                                        <div>
                                            { props.type === 'watched' ?
                                                <>
                                                    <AiFillStar />
                                                    <div onClick={turnSerieToNotWatched}>Assistido</div>
                                                </>
                                                :
                                                <>
                                                    <AiFillStar />
                                                    <div onClick={turnSerieToWatched}>Assistido</div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>Sua opinião sobre a série</div>
                                    <div>
                                        <div onClick={() => changeSerieOpinion('favorite')}>Favorita</div>
                                        <div onClick={() => changeSerieOpinion('liked')}>Gostei</div>
                                        <div onClick={() => changeSerieOpinion('abandoned')}>Abandonei</div>
                                    </div>
                                </div>
                                <div>{serieOpened.synopsis}</div>
                                { serieOpened.comment === '' ?
                                    <>
                                        <input placeholder="Escreva um comentário sobre o que achou da série"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}/>
                                        <button onClick={doComment}>Comentar</button>
                                    </>
                                    :
                                    <>
                                        <div>
                                            Seu Comentário
                                        </div>
                                        <div>
                                            {serieOpened.comment}
                                        </div>
                                        { editMode ?
                                            <>
                                                <input placeholder="Edite seu comentário sobre o que achou da série"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}/>
                                                <button onClick={() => {
                                                    doComment()
                                                    setEditMode(false)}}>Editar</button>
                                            </>
                                            :
                                            <button onClick={() => setEditMode(true)}>
                                                Editar
                                            </button>
                                        }
                                        
                                    </>
                                }  
                            </div>
                        </ModalContainer>
                    }
                </Modal>
                :
                <></>
            }
        </>
    )
}