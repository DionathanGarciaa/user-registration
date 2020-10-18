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
    height: 625px;
`;


export const ProductInt = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;
    border-radius: 15px;
    background-color: #eeeeee;
`;


export const CardAll = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 700px;
    border-radius: 10px;
    background-color: #393e46;
    box-shadow: 0 0 10px 0px #000;
`;


export const CardIcone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 100%;
    background-color: #00adb5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const Buscar = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 25%;

input{
    border-radius: 7px;
    border: none;
    outline: 0;
    padding-top: 15px;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80%;
    width: 95%;
    margin: 30px 0 0 25px;
    background-color: #393e46;
    color: #000;
    border-radius: 15px;
    overflow: scroll;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
    width: 15px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #00aeb5;
    border-radius: 5px;
  }
`;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 300px;
    margin: 10px;
    background: #00adb5;
    color: #fff;
    border: ridge;
    border-color: #fff;
`;


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00adb5;
    padding: 15px;
    text-align: center;
`;