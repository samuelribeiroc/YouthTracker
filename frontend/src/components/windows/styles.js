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
    flex-direction: column;
    justify-content: center;
    width: 91vw;
    height: 65vh;
    border-radius: 10px;
    overflow-y: scroll;
    background: var(--box);
`

export const BoxSeries = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    height: 100%;
    width: 100%;
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
    margin: 20px;
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
    height: 8vh;
    align-items: center;
    justify-content: space-between;
`

export const GenresList = styled.div`
    display: flex;
    margin-left: 1.2vw;
`

export const Genre = styled.div`
    padding: 3px 10px;
    background: var(--purple);
    border-radius: 5px;
    font-weight: 300;
    cursor: pointer;
    margin-right: 1vw;

    &:hover {
        background: var(--hoverPurple);
    }
`

export const SelectedGenre = styled.div`
    margin-right: 1.2vw;
    color: var(--turquoise);
    font-weight: 700;
`

export const BoxActiveInactive = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: center;
`

export const ActiveInactive = styled.div`
    padding: 3px 10px;
    background: var(--purple);
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    margin: 0 7vw;

    &:hover {
        background: var(--hoverPurple);
    }
`