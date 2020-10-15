import styled from 'styled-components';
import { darken } from 'polished';



export const Container = styled.div`
    height: 100%;
    background-color: #eeeeee;
`;


export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00adb5;
    padding: 20px;
    text-align: center;

span{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    padding-bottom: 15px;
    {text-shadow: 0.1em 0.1em 0.05em #333};
}
`;


export const HeaderContent = styled.div`
    display: flex;
    position: absolute;
    left: 1350px;

p{
    padding: 0 5px 0 10px;
    color: #fff;
}

a{
    color: #fff;
    text-decoration:none;
    text-transform: uppercase;

strong{
    font-size: 15px;
}
}
`;


export const ProductExt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 655px;
`;


export const ProductInt = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 80%;
    border-radius: 15px;
    background-color: #393e46;
    box-shadow: 4px 3px 3px ${darken(0.1, "#000")};
`;


export const Buscar = styled.div`
    display:flex;
    height: 10%;
    width: 25%;

input{
    border-radius: 7px;
    border: none;
    outline: 0;
    padding-right: 50px;
    margin: 15px 0 1px 15px ;

    
}

button{
    align-items: center;
    margin: 15px 0 1px 15px ;
    padding: 5px;
    background-color: #fff;
    border-radius: 8px;
    color: #00aeb5;
    outline: 0;
    cursor: pointer;
}
`;

export const Listar = styled.div`
    display:flex;
    height: 70%;
    width: 55%;
    margin: 30px 0 0 25px;
    box-shadow: 0 0 10px 0px #000;
    background-color: #00adb5;
    color: #000;
    border-radius: 15px;
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 25%;
    padding-left: px;
    margin: 20px;
    background: #fff;
    border: ridge;
    border-color: #00adb5;
   

span{
   
}
`;