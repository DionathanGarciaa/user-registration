import styled from 'styled-components';
import { darken } from 'polished';
import Imagem from '../../Assets/forgot.svg';



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
justify-content: center;
align-items: center;
height: 80%;
width: 80%;
border-radius: 15px;
background-color: #393e46;
box-shadow: 4px 3px 3px ${darken(0.1, "#000")};
`;


// FORGOT PASSWORD

export const FirstColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 40%;
height: 60%;
background-color: #00adb5;
border-radius: 15px;
box-shadow: 4px 3px 3px ${darken(0.1, "#000")};
position: absolute;

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

p{
    font-family: Arial, Helvetica, sans-serif;

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
    margin-bottom: 20px;
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
margin: 0 90px 0 90px;
padding: 8px;

button{
border: none;
cursor: pointer;

}
`;


// LOGIN

export const Login = styled.div`
display: flex;
justify-items: center;
align-items: center;;
padding-top: 20px;

span{
font-size: 12px;
font-weight: bold;
padding-right: 10px;
padding-left: 120px;
}

a{
font-size: 12px;
color: #fff;
text-decoration:none; 
}
`; 


// /* COLUNA IMAGEM */

export const SecondColumn = styled.div`
width: 100%;
height: 100%;
border-radius: 15px;
background-image: url(${Imagem});
background-repeat:;
`;
