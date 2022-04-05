import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import { Categories,
    Category,
    Box,
    BoxSeries,
    SerieCard,
    SerieImage,
    SerieName } from "../styles";

import Modal from "../../modal";

export default function AllWatched(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serieOpened, setSerieOpened] = useState({});

    useEffect(() => {
        api.get('/swtc').then((res) => {
            setFilteredSeries(res.data);
        })

        return () => {
            setIsModalOpen(false);
        }
    }, []);

    async function click(serie) {
        setSerieOpened(serie);
        setIsModalOpen(true);
    }

    return (
        <>
            { isModalOpen && <Modal serie={serieOpened} setIsModalOpen={setIsModalOpen} /> }
            <Categories>
                <Category selected onClick={() => props.setWindow(0)}>Todas</Category>
                <Category onClick={() => props.setWindow(1)}>Favoritas</Category>
                <Category onClick={() => props.setWindow(2)}>Gostei</Category>
                <Category onClick={() => props.setWindow(3)}>Abandonei</Category>
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
    )
}