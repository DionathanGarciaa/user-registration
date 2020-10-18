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
    left: 1200px;

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
    padding-top: 60px;
    padding-bottom: 65px;
`;


export const ProductInt = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 70%;
    width: 60%;
    border-radius: 15px;
    background-color: #eeeeee;
`;


export const Product = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;


export const Card = styled.div`
    height: 300px;
    width: 180px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    background-color: #393e46;
    margin-left: 25px;
`;


export const CardIcone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
    background-color: #00adb5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const CardConteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    {text-shadow: 0.1em 0.1em 0.05em #333};
    color: #fff;

a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-decoration:none;
    color: #fff;
}
`;


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00adb5;
    padding: 15px;
    text-align: center;
    `;