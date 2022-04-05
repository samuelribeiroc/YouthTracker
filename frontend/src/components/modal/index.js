import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { AiFillStar } from 'react-icons/ai';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import { ModalArea, ModalContainer, ModalImage, ModalInfos,
    ModalInfosTop, ModalNoteVisibility, ModalChangeSeen,
    ModalImdbNote, ModalCloseButton, ModalSerieNote,
    ModalSerieNoteImdb, ModalPrincipalInfos, ModalSerieName,
    ModalSecondaryInfos, ModalInfosGenres, ModalGenres,
    ModalGenre, ModalInfosSynopsis, ModalSynopsis,
    ModalInfosCast, ModalCast, ModalAct, ModalInfosBottom,
    ModalImageGrid, ModalSeasons, ModalSeasonName,
    ModalSeasonValue, 
    ModalContainerNWTC,
    ContainerNWTCTop} from "./style";

export default function Modal(props) {
    const [editMode, setEditMode] = useState(false);
    const [comment, setComment] = useState('');
    const [didComment, setDidComment] = useState(false);
    const [opinion, setOpinion] = useState(props.serie.opinion);
    const [seen, setSeen] = useState(props.serie.type);

    async function changeSerieOpinion(opinion) {
        api.put(`/swtc/${props.serie.id}/opinion/${opinion}`);
        setOpinion(opinion);
    }

    async function turnSerieToWatched() {
        api.put(`/nwtc/${props.serie.id}`);
        setSeen('watched');
    }

    async function turnSerieToNotWatched() {
        api.put(`/swtc/${props.serie.id}`);
        setSeen('notWatched');
    }

    async function doComment() {
        const body = {
            comment: comment,
        }
        if (comment !== '') {
            api.post(`/swtc/${props.serie.id}`, body);
            setDidComment(true);
        } else {
            setDidComment(false);
        }
    }
    
    return (
        <ModalArea>
            { props.serie.type === 'notWatched' ?
                <ModalContainer>
                    <ModalImageGrid>
                        <ModalImage src={props.serie.imageLink} alt={props.serie.name} />
                    </ModalImageGrid>
                    <ModalInfos>
                        <ModalInfosTop>
                            <ModalPrincipalInfos>
                                <ModalSerieName>{props.serie.name}</ModalSerieName>
                                <ModalSecondaryInfos>{props.serie.onAir}</ModalSecondaryInfos>
                                <ModalSecondaryInfos>Origem: {props.serie.origin}</ModalSecondaryInfos>
                            </ModalPrincipalInfos>
                            <ModalNoteVisibility>
                                <ModalImdbNote>
                                    <ModalSerieNoteImdb>{props.serie.imdbNote}</ModalSerieNoteImdb>
                                    <ModalSerieNote>/10</ModalSerieNote>
                                    <AiFillStar />
                                </ModalImdbNote>
                                <ModalCloseButton onClick={() => props.setIsModalOpen(false)}><CloseIcon /></ModalCloseButton>
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
                        <ModalInfosGenres>
                            <div style={{ fontSize: '1.5rem' }}>Gêneros</div>
                            <ModalGenres>
                                {props.serie.genres?.map((genre, index) => (
                                    <ModalGenre key={index}>
                                        {genre}
                                    </ModalGenre>
                                ))}
                            </ModalGenres>
                        </ModalInfosGenres>
                        <ModalInfosSynopsis>
                            <div style={{ fontSize: '1.5rem' }}>Sinopse</div>
                            <ModalSynopsis>{props.serie.synopsis}</ModalSynopsis>
                        </ModalInfosSynopsis>
                        <ModalInfosCast>
                            <div style={{ fontSize: '1.5rem' }}>Elenco</div>
                            <ModalCast>
                                {props.serie.cast?.map((act, index) => (
                                    <ModalAct key={index}>
                                        {act}
                                    </ModalAct>
                                ))}
                            </ModalCast>
                        </ModalInfosCast>
                    </ModalInfos>
                    <ModalInfosBottom>
                        <ModalSeasons>
                            <ModalSeasonName>Temporadas</ModalSeasonName>
                            <ModalSeasonValue>{props.serie.seasons}</ModalSeasonValue>
                        </ModalSeasons>
                        <ModalSeasons>
                            <ModalSeasonName>Média de Eps por Temporada</ModalSeasonName>
                            <ModalSeasonValue>{props.serie.episodes}</ModalSeasonValue>
                        </ModalSeasons>
                        <ModalSeasons>
                            <ModalSeasonName>Duração dos Episódios</ModalSeasonName>
                            <ModalSeasonValue>{props.serie.mins}</ModalSeasonValue>
                        </ModalSeasons>
                    </ModalInfosBottom>
                </ModalContainer>
                :
                <ModalContainerNWTC>
                    <ContainerNWTCTop>
                        <div>
                            <ModalImage src={props.serie.imageLink} alt={props.serie.name} />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <ModalSerieName>{props.serie.name}</ModalSerieName>
                                    <ModalSecondaryInfos>{props.serie.onAir}</ModalSecondaryInfos>
                                </div>
                                <div>
                                    <div>
                                        <div>{props.serie.imdbNote}</div>
                                        <div>/10</div>
                                        <AiFillStar />
                                    </div>
                                    <ModalCloseButton onClick={() => props.setIsModalOpen(false)}><CloseIcon /></ModalCloseButton>
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
                            <ModalInfosSynopsis>
                                <div style={{ fontSize: '1.5rem' }}>Sinopse</div>
                                <ModalSynopsis>{props.serie.synopsis}</ModalSynopsis>
                            </ModalInfosSynopsis>
                        </div>
                    </ContainerNWTCTop>
                    <div>
                        { !didComment ?
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
                                    {comment}
                                </div>
                                { editMode ?
                                    <>
                                        <input placeholder="Edite seu comentário sobre o que achou da série"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}/>
                                        <button onClick={() => {
                                            doComment()
                                            setEditMode(false)}}>Editar <EditIcon /></button>
                                    </>
                                    :
                                    <button onClick={() => setEditMode(true)}>
                                        Editar
                                    </button>
                                }
                            </>
                        }  
                    </div>
                </ModalContainerNWTC>
            }
        </ModalArea>
    )
}