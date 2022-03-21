import React, { useState, useEffect } from "react";
import api from "../services/api";

import SeriesBox from "../components/seriesBox";

export default function Inventory() {
    const [seriesWatched, setSeriesWatched] = useState([]);

    useEffect(() => {
        api.get('/seriesWatched').then((res) => {
            setSeriesWatched(res.data);
        })
    }, [])

    return (
        <>
            <h1>Este é seu inventário!</h1>
            <h2>Nesta página você encontra todas as séries que já viu e suas classificações</h2>
            <SeriesBox
             series={seriesWatched}
             type={'watched'} 
            />
        </>
    )
}