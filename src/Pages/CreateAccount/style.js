import styled from 'styled-components';
import { darken } from 'polished';
import Imagem from '../../Assets/create.svg';



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

// COLUNA LOGIN

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
    font-size: 50px;
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

button{

    border-radius: 7px;
    border: none;
    cursor: pointer;
    margin: 0 80px 0 80px;
    padding: 8px;
    margin-top: 5px;
}
`;

// REMEMBER

export const Terms = styled.div`
display: flex;
align-items: center;


label{
font-size: 12px;
padding-bottom: 4px;
color: #fff;
}
`;

// FORGOT

export const Log = styled.div`
display: flex;
justify-items: center;
align-items: center;;
padding-top: 40px;

span{
font-size: 12px;
padding-right: 10px;
padding-left: 65px;
}

a{
font-size: 12px;
color: #fff;
text-decoration:none; 
}
`;

/* COLUNA IMAGEM */

export const SecondColumn = styled.div`
width: 50%;
height: 100%;
border-radius: 15px;
background-image: url(${Imagem});
background-repeat: no-repeat;
position: absolute;
top: 111px;
left: 640px;
`;
