import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { Categories,
Category,
Box,
BoxSeries,
SerieCard,
SerieImage,
SerieName,
BoxGenres } from "../styles";

import Modal from "../../modal";

export default function ByGenres(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreSelected, setGenreSelected] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        api.get('/genre').then((res) => {
            setGenres(res.data);
        })

        return () => {
            setFilteredSeries([]);
            setGenreSelected('');
            setIsModalOpen(false);
        }
    }, [])

    async function selectGenre(genre) {
        return api.get(`/genre/${genre}`).then((res) => {
            setFilteredSeries(res.data);
            setGenreSelected(genre);
        })
    }

    return (
        <>
            <Categories>
                <Category onClick={() => props.setWindow(0)}>Todas</Category>
                <Category selected onClick={() => props.setWindow(1)}>Gêneros</Category>
                <Category onClick={() => props.setWindow(2)}>Status</Category>
                <Category onClick={() => props.setWindow(3)}>Nota</Category>
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