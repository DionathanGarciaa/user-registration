import styled from 'styled-components';
import { darken } from 'polished';
import Imagem from '../../Assets/imagem4.svg';



// EXTERNO

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
background-color: #eeeeee;
`;


// INTERNO

export const FirstContent = styled.div`
display: flex;
height: 80%;
width: 80%;
border-radius: 15px;
background-color: #393e46;
box-shadow: 4px 3px 3px ${darken(0.1, "#000")};
`;


// COLUNA INFORMAÇÕES PESSOAIS

export const FirstColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
height: 100%;
background-color: #00adb5;
border-radius: 15px;
box-shadow: 4px 3px 3px ${darken(0.1, "#000")};

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    padding-bottom: 15px;
    {text-shadow: 0.1em 0.1em 0.05em #333};
}

form{
    display: flex;
    flex-direction: column;
    width: 55%;
}

label{
    display: flex;
    align-items: center;
    margin: 8px;
}

input{
    border-radius: 7px;
    border: none;
    outline: 0;
    margin-bottom: 8px;
    padding: 10px;
    

    ::-webkit-input-placeholder{
    color:#000;
    text-align: center;
    }

    ::-moz-placeholder {
    color:#000;
    text-align: center;
    }
}
`;


// BUTTON

export const MyButton = styled.button`
border-radius: 7px;
border: none;
cursor: pointer;
margin: 15px 80px 0 80px;
padding: 8px;
outline: 0;


button{
width: 100%;
border: none;
cursor: pointer;
outline: 0;
}
`;

export const Back = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 20px;

a{
text-decoration:none;
color: #fff;
}
`;


/* COLUNA IMAGEM */

export const SecondColumn = styled.div`
width: 50%;
height: 100%;
border-radius: 15px;
background-image: url(${Imagem});
background-repeat: no-repeat;
position:;
top: 500px;
left: 750px;
margin-left: 15px;
`;
