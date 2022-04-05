import styled from "styled-components";

export const ModalArea = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: var(--forModal);
    align-items: center;
    justify-content: center;
    z-index: 2000;
`

export const ModalContainer = styled.div`
    display: grid;
    grid-template-areas:
        'img info'
        'img info'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm'
        'btm btm';
    background: var(--secondaryBackground);
    width: 80vw;
    height: 90vh;
    z-index: 2001;
    border-radius: 20px;
`

export const ModalImageGrid = styled.div`
    grid-area: img;
`

export const ModalImage = styled.img`
    width: 22.5vw;
    height: 60vh;
    object-fit: cover;
    margin: 4vh 2vw;
`

export const ModalInfos = styled.div`
    margin: 4vh 2vw 0 2vw;
    grid-area: info;
`

export const ModalInfosTop = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
`

export const ModalPrincipalInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

`

export const ModalSerieName = styled.div`
    font-size: 4rem;
    font-weight: 300;
`

export const ModalSecondaryInfos = styled.div`
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 1vh;
`

export const ModalNoteVisibility = styled.div`
    display: grid;
    grid-template-columns: 400fr 0.5fr;
`

export const ModalImdbNote = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -2vh;
`

export const ModalSerieNoteImdb = styled.div`
    font-size: 1.5rem;
    margin: 0 0.2vw 1vh 0.5vw;
`

export const ModalSerieNote = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    margin-right: 0.3vw;
`

export const ModalCloseButton = styled.div`
    display: flex;
    justify-content: end;
    cursor: pointer;
    width: 0.5vw;
    height: 1vh;
    margin: -2vh -2vw 0 0;

    &:hover {
        color: var(--turquoise);
    }
`

export const ModalChangeSeen = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 3vw;

    div {
        margin-left: 0.5vw;
    }

    &:hover {
        color: var(--turquoise);
    }
`

export const ModalInfosGenres = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3vh 0;
`

export const ModalGenres = styled.div`
    display: flex;
    margin-top: 1vh;
`

export const ModalGenre = styled.div`
    padding: 3px 10px;
    background: var(--purple);
    border-radius: 5px;
    margin-right: 1vw;
    font-weight: 300;
`

export const ModalInfosSynopsis = styled.div`
    display: flex;
    flex-direction: column;
    height: 25vh;
`

export const ModalSynopsis = styled.div`
    margin-top: 1vh;
    font-weight: 100;
`

export const ModalInfosCast = styled.div`
    display: flex;
    flex-direction: column;
`

export const ModalCast = styled.div`
    display: flex;
    margin-top: 1vh;
`

export const ModalAct = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    margin-right: 5vh;
`

export const ModalInfosBottom = styled.div`
    grid-area: btm;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const ModalSeasons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalSeasonName = styled.div`
    font-size: 2rem;
    font-weight: 300;
    padding: 4vh 0;
`

export const ModalSeasonValue = styled.div`
    font-size: 3.5rem;
    font-weight: 100;
`

export const ModalEps = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalMins = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

//Não assistidas

export const ModalContainerNWTC = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--secondaryBackground);
    width: 80vw;
    height: 90vh;
    z-index: 2001;
    border-radius: 20px;
`

export const ContainerNWTCTop = styled.div`
    display: flex;
    height: 70vh;
    width: 100%;
`