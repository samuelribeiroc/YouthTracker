import React, { useState, useEffect } from "react";
import api from "../../services/api";

import SeriesBox from "../../components/seriesBox";

import { Title,
Subtitle } from "./style";

export default function Series() {
    const [seriesNotWatched, setSeriesNotWatched] = useState([]);

    useEffect(() => {
        api.get('/nwtc').then((res) => {
            setSeriesNotWatched(res.data);
        });
    }, []);

    return (
        <>
            <Title>Este é o mostruário</Title>
            <Subtitle>Aqui você encontra todas as séries que já viu para marcá-las como vistas e conhecer novas</Subtitle>
            <SeriesBox
             series={seriesNotWatched}
             type={'notWatched'} 
            />
        </>
    )
}