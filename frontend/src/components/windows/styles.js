import styled from "styled-components";

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