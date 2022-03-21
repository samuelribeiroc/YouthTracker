import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Modal from "../modal";

export default function SeriesBox(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serieOpened, setSeriesOpened] = useState({});
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [genres, setgenres] = useState([]);
    const [window, setWindow] = useState(0);

    useEffect(() => {
        setFilteredSeries(props.series)
    }, [props.series])

    useEffect(() => {
        api.get('/seriesNotWatched/genre').then((res) => {
            setgenres(res.data);
        })
    })

    function setSerie(serie) {
        return new Promise(setSeriesOpened(serie));
    }

    function setModal() {
        return new Promise(setIsModalOpen(true));
    }

    function setWindowNumber(number) {
        return new Promise (setWindow(number));
    }

    function setToAll() {
        return new Promise (setFilteredSeries(props.series));
    }

    function selectgenre(genre) {
        api.get(`/seriesNotWatched/genre/${genre}`).then((res) => {
            setFilteredSeries(res.data);
        })
    }

    function selectActives(bool) {
        api.get(`/seriesNotWatched/status/${bool}`).then((res) => {
            setFilteredSeries(res.data);
        })
    }

    function selectNotes() {
        return new Promise(api.get('/seriesNotWatched/note').then((res) => {
            setFilteredSeries(res.data);
        }))
    }

    async function click(serie) {
        await setSerie(serie);
        await setModal();
    }

    async function changeFilterNotWatched(number) {
        switch(number) {
            case 0:
                await setToAll();
                await setWindowNumber(0);
                break;
            case 1:
                setWindow(1);
                setFilteredSeries(props.series);
                break;
            case 2:
                setWindow(2);
                setFilteredSeries(props.series);
                break;
            case 3:
                await selectNotes();
                await setWindowNumber(3);
                break;
            default:
                await setToAll();
                await setWindowNumber(0);
        }
    }

    function watchedByOpinion(opinion) {
        return new Promise(api.get(`/seriesWatched/opinion/${opinion}`).then((res) => {
            setFilteredSeries(res.data);
        }))
    }

    async function changeFilterWatched(number) {
        switch(number) {
            case 0:
                await setToAll();
                await setWindowNumber(0);
                break;
            case 1:
                await watchedByOpinion('favorite');
                await setWindowNumber(1);
                break;
            case 2:
                await watchedByOpinion('liked');
                await setWindowNumber(2);
                break;
            case 3:
                await watchedByOpinion('abandoned');
                await setWindowNumber(3);
                break;
            default:
                await setToAll();
                await setWindowNumber(0);
        }
    }

    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} serie={serieOpened} type={props.type}>
            { props.type === 'watched' ?
                <>
                    { window === 0 && (
                        <>
                            <div>
                                <div onClick={changeFilterNotWatched(0)}>Todas</div>
                                <div onClick={changeFilterNotWatched(1)}>Gêneros</div>
                                <div onClick={changeFilterNotWatched(2)}>Status</div>
                                <div onClick={changeFilterNotWatched(3)}>Nota</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 1 && (
                        <>
                            <div>
                                <div onClick={changeFilterNotWatched(0)}>Todas</div>
                                <div onClick={changeFilterNotWatched(1)}>Gêneros</div>
                                <div onClick={changeFilterNotWatched(2)}>Status</div>
                                <div onClick={changeFilterNotWatched(3)}>Nota</div>
                            </div>
                            <div>
                                <div>
                                    {genres.map((genre, index) => (
                                        <div key={index}>
                                            <div onClick={selectgenre(genre)}>{genre}</div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 2 && (
                        <>
                            <div>
                                <div onClick={changeFilterNotWatched(0)}>Todas</div>
                                <div onClick={changeFilterNotWatched(1)}>Gêneros</div>
                                <div onClick={changeFilterNotWatched(2)}>Status</div>
                                <div onClick={changeFilterNotWatched(3)}>Nota</div>
                            </div>
                            <div>
                                <div>
                                    <div onClick={selectActives(true)}>Ativas</div>
                                    <div onClick={selectActives(false)}>Finalizadas</div>
                                </div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 3 && (
                        <>
                            <div>
                                <div onClick={changeFilterNotWatched(0)}>Todas</div>
                                <div onClick={changeFilterNotWatched(1)}>Gêneros</div>
                                <div onClick={changeFilterNotWatched(2)}>Status</div>
                                <div onClick={changeFilterNotWatched(3)}>Nota</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </>
                :
                <>
                    { window === 0 && (
                        <>
                            <div>
                                <div onClick={changeFilterWatched(0)}>Todas</div>
                                <div onClick={changeFilterWatched(1)}>Favoritas</div>
                                <div onClick={changeFilterWatched(2)}>Gostei</div>
                                <div onClick={changeFilterWatched(3)}>Abandonei</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 1 && (
                        <>
                            <div>
                                <div onClick={changeFilterWatched(0)}>Todas</div>
                                <div onClick={changeFilterWatched(1)}>Favoritas</div>
                                <div onClick={changeFilterWatched(2)}>Gostei</div>
                                <div onClick={changeFilterWatched(3)}>Abandonei</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 2 && (
                        <>
                            <div>
                                <div onClick={changeFilterWatched(0)}>Todas</div>
                                <div onClick={changeFilterWatched(1)}>Favoritas</div>
                                <div onClick={changeFilterWatched(2)}>Gostei</div>
                                <div onClick={changeFilterWatched(3)}>Abandonei</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    { window === 3 && (
                        <>
                            <div>
                                <div onClick={changeFilterWatched(0)}>Todas</div>
                                <div onClick={changeFilterWatched(1)}>Favoritas</div>
                                <div onClick={changeFilterWatched(2)}>Gostei</div>
                                <div onClick={changeFilterWatched(3)}>Abandonei</div>
                            </div>
                            <div>
                                <div>
                                    {filteredSeries.map((serie, index) => (
                                        <div key={index}>
                                            <img src={serie.imageLink} onClick={() => {
                                                click(serie)
                                                }} alt={serie.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </>
            }
            
        </Modal>
    )
}