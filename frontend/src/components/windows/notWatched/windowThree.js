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

export default function ByStatus(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function selectActives(bool) {
        return api.get(`/status/${bool}`).then((res) => {
            setFilteredSeries(res.data);
        })
    }

    return (
        <>
            <Categories>
                <Category onClick={() => props.setWindow(0)}>Todas</Category>
                <Category onClick={() => props.setWindow(1)}>Gêneros</Category>
                <Category selected onClick={() => props.setWindow(2)}>Status</Category>
                <Category onClick={() => props.setWindow(3)}>Nota</Category>
            </Categories>
            <Box>
                <div>
                    <div onClick={() => selectActives('true')}>Ativas</div>
                    <div onClick={() => selectActives('false')}>Finalizadas</div>
                </div>
                <BoxSeries>
                    {filteredSeries?.map((serie, index) => (
                        <SerieCard key={index}>
                            <SerieImage src={serie.imageLink} alt={serie.name} />
                            <SerieName onClick={() => setIsModalOpen(true)}>{serie.name}</SerieName>
                            { isModalOpen && <Modal serie={serie} setIsModalOpen={setIsModalOpen} /> }
                        </SerieCard>
                    ))}
                </BoxSeries>
            </Box>
        </>
    )
}