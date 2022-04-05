import React, { useState } from "react";
import api from "../../../services/api";

import { Categories,
Category,
Box,
BoxSeries,
SerieCard,
SerieImage,
SerieName, 
BoxActiveInactive,
ActiveInactive} from "../styles";

import Modal from "../../modal";

export default function ByStatus(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serieOpened, setSerieOpened] = useState({});

    async function selectActives(bool) {
        return api.get(`/status/${bool}`).then((res) => {
            setFilteredSeries(res.data);
        })
    }

    async function click(serie) {
        setSerieOpened(serie);
        setIsModalOpen(true);
    }

    return (
        <>
            { isModalOpen && <Modal serie={serieOpened} setIsModalOpen={setIsModalOpen} /> }
            <Categories>
                <Category onClick={() => props.setWindow(0)}>Todas</Category>
                <Category onClick={() => props.setWindow(1)}>Gêneros</Category>
                <Category selected onClick={() => props.setWindow(2)}>Status</Category>
                <Category onClick={() => props.setWindow(3)}>Nota</Category>
            </Categories>
            <Box>
                <BoxActiveInactive>
                    <ActiveInactive onClick={() => selectActives('true')}>Ativas</ActiveInactive>
                    <ActiveInactive onClick={() => selectActives('false')}>Finalizadas</ActiveInactive>
                </BoxActiveInactive>
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