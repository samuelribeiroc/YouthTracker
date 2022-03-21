import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import api from '../../services/api';

export default function Modal (props) {
    const [watched, setWatched] = useState(props.type);
    const [comment, setComment] = useState();
    const [opinion, setOpinion] = useState(props.serie.opinion);

    useEffect(() => {
        api.get(`/seriesWatched/${props.serie.id}/comment`).then((res) => {
            setComment(res.data);
        })
    })

    function changeSerieOpinion(opinion) {
        api.put(`/seriesWatched/${props.serie.id}/opinion/${opinion}`);
        setOpinion(opinion);
    }

    function turnSerieToWatched() {
        api.put(`/seriesNotWatched/${props.serie.id}`);
        setWatched(true);
    }

    function turnSerieToNotWatched() {
        api.put(`/seriesWatched/${props.serie.id}`);
        setWatched(false);
    }

    return (
        <>
            { props.isModalOpen &&
                <div onClick={props.setIsModalOpen(false)}>
                    { props.type === 'notWatched' ?
                        <div>
                            <div>
                                <img src={props.serie.imageLink} alt={props.serie.name} />
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>{props.serie.name}</div>
                                        <div>{props.serie.onAir}</div>
                                        <div>Origem: {props.serie.origin}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>{props.serie.imdbNote}</div>
                                            <div>/10</div>
                                        </div>
                                        <div>
                                            { watched === 'watched' ?
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
                                    <div>Gêneros</div>
                                    {props.serie.genres.map((genre, index) => (
                                        <div key={index}>
                                            <div>{genre}</div>
                                        </div>
                                    ))}
                                </div>
                                <div>{props.serie.synopsis}</div>^
                                <div>
                                    <div>Elenco</div>
                                    {props.serie.cast.map((act, index) => (
                                        <div key={index}>
                                            <div>{act}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div>Temporadas</div>
                                <div>Média de Eps por Temporada</div>
                                <div>Duração dos Episódios</div>
                                <div>{props.serie.seasons}</div>
                                <div>{props.serie.episodes}</div>
                                <div>{props.serie.mins}</div>
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <img src={props.serie.imageLink} alt={props.serie.name} />
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>{props.serie.name}</div>
                                        <div>{props.serie.onAir}</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>{props.serie.imdbNote}</div>
                                            <div>/10</div>
                                        </div>
                                        <div>
                                            { watched === 'watched' ?
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
                                        <div onClick={changeSerieOpinion('favorite')}>Favorita</div>
                                        <div onClick={changeSerieOpinion('liked')}>Gostei</div>
                                        <div onClick={changeSerieOpinion('abandoned')}>Abandonei</div>
                                    </div>
                                </div>
                                <div>{props.serie.synopsis}</div>
                                { comment === '' ?
                                    <>
                                        <input placeholder="Escreva um comentário sobre o que achou da série"/>
                                        <button>Comentar</button>
                                    </>
                                    :
                                    <>
                                        <div>
                                            Seu Comentário
                                        </div>
                                        <div>
                                            {comment}
                                        </div>
                                        <button>
                                            Editar
                                        </button>
                                    </>
                                }  
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}