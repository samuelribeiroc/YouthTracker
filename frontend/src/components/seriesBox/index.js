import React, { useState } from "react";

import { Container } from "./style";

import AllNotWatched from "../windows/notWatched/windowOne";
import ByGenres from "../windows/notWatched/windowTwo";
import ByStatus from "../windows/notWatched/windowThree";
import ByNotes from "../windows/notWatched/windowFour";

import AllWatched from "../windows/watched/windowOne";
import Favorites from "../windows/watched/windowTwo";
import LikedOnes from "../windows/watched/windowThree";
import AbandonedOnes from "../windows/watched/windowFour";

export default function SeriesBox(props) {
    const [window, setWindow] = useState(0);

    return (
        <>
            { props.type === 'notWatched' ?
                <Container>
                    { window === 0 && <AllNotWatched setWindow={setWindow} /> }
                    { window === 1 && <ByGenres setWindow={setWindow} /> }
                    { window === 2 && <ByStatus setWindow={setWindow} /> }
                    { window === 3 && <ByNotes setWindow={setWindow} /> }
                </Container>
                :
                <Container>
                    { window === 0 && <AllWatched setWindow={setWindow} /> }
                    { window === 1 && <Favorites setWindow={setWindow} /> }
                    { window === 2 && <LikedOnes setWindow={setWindow} /> }
                    { window === 3 && <AbandonedOnes setWindow={setWindow} /> }
                </Container>
            }
        </>
    )
}