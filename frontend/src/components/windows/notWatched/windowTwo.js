import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { Categories,
Category,
Box,
BoxSeries,
SerieCard,
SerieImage,
SerieName,
BoxGenres, 
GenresList,
Genre,
SelectedGenre} from "../styles";

import Modal from "../../modal";

export default function ByGenres(props) {
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreSelected, setGenreSelected] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serieOpened, setSerieOpened] = useState({});

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

    async function click(serie) {
        setSerieOpened(serie);
        setIsModalOpen(true);
    }

    return (
        <>
            { isModalOpen && <Modal serie={serieOpened} setIsModalOpen={setIsModalOpen} /> }
            <Categories>
                <Category onClick={() => props.setWindow(0)}>Todas</Category>
                <Category selected onClick={() => props.setWindow(1)}>Gêneros</Category>
                <Category onClick={() => props.setWindow(2)}>Status</Category>
                <Category onClick={() => props.setWindow(3)}>Nota</Category>
            </Categories>
            <Box>
                <BoxGenres>
                    <GenresList>
                        {genres?.map((genre, index) => (
                            <Genre key={index} onClick={() => selectGenre(genre)}>
                                {genre}
                            </Genre>
                        ))}
                    </GenresList>
                    <SelectedGenre>{genreSelected}</SelectedGenre>
                </BoxGenres>
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