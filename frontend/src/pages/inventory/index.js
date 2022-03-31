import React, { useState, useEffect } from "react";
import api from "../../services/api";

import SeriesBox from "../../components/seriesBox";

import { Title,
Subtitle } from "./style";

export default function Inventory() {
    const [seriesWatched, setSeriesWatched] = useState([]);

    useEffect(() => {
        api.get('/swtc').then((res) => {
            setSeriesWatched(res.data);
        })
    }, [])

    return (
        <>
            <Title>Este é seu inventário</Title>
            <Subtitle>Nesta página você encontra todas as séries que já viu e suas classificações</Subtitle>
            <SeriesBox
             series={seriesWatched}
             type={'watched'} 
            />
        </>
    )
}