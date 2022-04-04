import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { Categories,
Category,
Box,
BoxSeries,
SerieCard,
SerieImage,
SerieName } from "../styles";

import Modal from "../../modal";

export default function AllNotWatched(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serieOpened, setSerieOpened] = useState({});

    useEffect(() => {
        api.get('/nwtc').then((res) => {
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
                <Category onClick={() => props.setWindow(1)}>Gêneros</Category>
                <Category onClick={() => props.setWindow(2)}>Status</Category>
                <Category onClick={() => props.setWindow(3)}>Nota</Category>
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