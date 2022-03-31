import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    background: var(--secondaryBackground);
    align-items: center;
`

export const LogoImage = styled.img`
    width: 10rem;
    margin-left: 1vw;
    background: var(--secondaryBackground);
`

export const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    font-weight: 500;
    margin-left: 2vw;
`

export const NavLi = styled.li`
    margin-right: 5vw;
    a {
        &:hover {
            color: var(--turquoise);
        }
        &:active {
            color: var(--purple);
        }
    }
    
`