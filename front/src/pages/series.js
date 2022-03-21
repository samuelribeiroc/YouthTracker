import React, { useState, useEffect } from "react";
import api from "../services/api";

import SeriesBox from "../components/seriesBox";

export default function Series() {
    const [seriesNotWatched, setSeriesNotWatched] = useState([]);

    useEffect(() => {
        api.get('/seriesNotWatched').then((res) => {
            setSeriesNotWatched(res.data);
        })
    }, [])

    return (
        <>
            <h1>Este é seu mostruário!</h1>
            <h2>Aqui você encontra todas as séries que já viu para marcá-las como vistas e conhece novas</h2>
            <SeriesBox
             series={seriesNotWatched}
             type={'notWatched'} 
            />
        </>
    )
}