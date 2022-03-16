import React from "react";

export default function SeriesBox(props) {
    return (
        <div>
            <div>
                {props.series.map((serie, index) => (
                    <div key={index}>
                        <img src={serie.imageLink} onClick={props.openModal} alt={serie.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}