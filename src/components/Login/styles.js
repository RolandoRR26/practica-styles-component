import styled from "styled-components";


const LoginTitle = styled.h1`
text-align: center;
    font-family: "Luckiest Guy", cursive;
    font-weight: 300;
    font-style: normal;
    color: ${props => props.theme.colors.secondary};
    font-size: 4rem;`;

    const LoginForm = styled.form`
     text-align: center;
    font-family: "Luckiest Guy", cursive;
    font-weight: 300;
    font-style: normal;
    color: ${props => props.theme.colors.secondary};
    font-size: 1.4rem;
    `;

    const LoginInput = styled.input`
    border-radius: 5px;
        width: 10rem;
        height: 1.3rem;
    `;

    const LoginButton = styled.button`
    padding: 10px 20px;
        margin-top: 1rem;
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




export {LoginTitle,LoginForm,LoginButton,LoginInput};