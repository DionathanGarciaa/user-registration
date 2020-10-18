import styled from 'styled-components';


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
    height: 610px;
    
`;


export const ProductInt = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 70%;
    width: 50%;
    border-radius: 15px;
    background-color: #eeeeee;
`;


export const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;


export const CardAll = styled.div`
    height: 500px;
    width: 700px;
    border-radius: 10px;
    background-color: #393e46;
    box-shadow: 0 0 10px 0px #000;
`;


export const CardIcone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;
    background-color: #00adb5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const Card = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;


export const CardTop = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    color: #000;
    background-color: #393e46;

input{
    border-radius: 7px;
    border: none;
    outline: 0;
    margin: 5px 0 10px 0 ;
    padding: 5px 100px 5px 0;

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
    width: 15%;
    border-radius: 8px;
    margin: 0 0 2px 25px ;
    padding: 5px;
    background-color: #fff;
    color: #00aeb5;
    outline: 0;
    cursor: pointer;
}
`;


export const CardBottom = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    color: #000;
    background-color: #393e46;

`;


export const Buscar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    width: 100%;

input{
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    border: none;
    outline: 0;
    padding: 5px 5px 5px 30px;
    
    ::-webkit-input-placeholder{
    color: #00aeb5;
    text-align: center;
    }

    ::-moz-placeholder {
    color: #00aeb5;
    text-align: center;
    }
}
`;

export const MyButtom = styled.div`
button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;    
    border: none;
    outline: 0;
    cursor: pointer;
    background: #fff;
}
`;


export const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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