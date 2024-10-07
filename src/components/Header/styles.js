import styled from "styled-components";

const HeaderStyle = styled.div`
text-align: center;
`;

const TitleHeader = styled.div`
     display: flex;
    justify-content: center;
    font-family: "Luckiest Guy", cursive;
    font-weight: 300;
    font-style: normal;
    color: #5eeb5e;
    font-size: 1.5rem;
`
const NavDiv = styled.div`
   text-align: center;
`
const NavLink = styled.a`
text-decoration: none;
    color: #5eeb5e;
    font-family: "Luckiest Guy", cursive;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;

    &:hover{
        color: #ffffff;
    }
`


export {HeaderStyle,TitleHeader,NavDiv,NavLink};