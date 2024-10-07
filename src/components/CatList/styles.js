import styled from "styled-components";

const DivButton = styled.div`
     display: flex;
     justify-content: center;
`;

const AppButton = styled.button`
        padding: 10px 20px;
        background-color: ${props => props.theme.colors.primary};    
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Luckiest Guy", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 2rem;
        color: #ffffff;

        &:hover{
            color: #1c3a1d;
        }
`;

const DescriptionP = styled.p`
    font-family: "Luckiest Guy", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 2rem;
        color: #ffffff;
`;
const Images = styled.img`
        width: 30rem;
        border-radius: 5px;
`;

const CatsArticle = styled.article`
    display: block;
    text-align: center;
`

export { AppButton, DivButton, DescriptionP, Images, CatsArticle };