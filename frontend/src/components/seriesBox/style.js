import styled from "styled-components";

//Parte do modal
export const Modal = styled.div`
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
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 1fr;
    background: var(--secondaryBackground);
    width: 80vw;
    height: 90vh;
    z-index: 2001;
    border-radius: 20px;
`

export const ModalImage = styled.img`
    width: 22.5vw;
    height: 60vh;
    object-fit: cover;
    margin: 4vh 0 0 2vw;
`

export const ModalInfos = styled.div`
    margin: 4vh 2vw 0 0;
`

export const ModalInfosTop = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`

export const ModalNoteVisibility = styled.div`
    display: grid;
    grid-template-columns: 400fr 0.5fr;
`

export const ModalImdbNote = styled.div`
    display: flex;
    align-items: center;
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

//Parte do componente
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4vh 4vw;
`

export const Categories = styled.div`
    display: flex;
    margin-left: 3vw;
`

export const Category = styled.div`
    padding: 10px 12px;
    margin-right: 30px;
    border-radius: 15px 15px 0 0;
    background: var(--turquoise);
    cursor: pointer;
    
    &:hover {
        background: var(--hoverTurquoise);
    }

    ${props => props.selected && `
        background: var(--purple);

        &:hover {
            background: var(--hoverPurple);
        }
    `}
`

export const Box = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 65vh;
    border-radius: 10px;
    overflow-y: scroll;
    background: var(--box);
`

export const BoxSeries = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 4vh;
    width: 100%;
    margin: 4vh 2vw;
`

export const SerieCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 250px;
    height: 350px;
    border-radius: 5px;
    cursor: pointer;
`

export const SerieImage = styled.img`
    position: absolute;
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
`

export const SerieName = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 100;
    font-size: 2rem;
    background: var(--hoverImage);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0;
    transition: 0.5s;

    &:hover {
        opacity: 1;
        transition: 0.5s;
    }
`

export const BoxGenres = styled.div`
    display: flex;
    width: 100%;
    height: 2vh;
    align-items: center;
`