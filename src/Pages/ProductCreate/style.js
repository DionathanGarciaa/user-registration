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
    padding-top: 60px;
    padding-bottom: 65px;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 700px;
    border-radius: 10px;
    background-color: #393e46;
    box-shadow: 0 0 10px 0px #000;
`;


export const CardExt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
    background-color: #00adb5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Card = styled.div`
    display:flex;
    height: 70%;
    width: 100%;
    background-color: #393e46;
    color: #000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

form{
    display: flex;
    flex-direction: column;
    width: 55%;
}

label{
    display: flex;
    align-items: center;
    margin: 10px 0 2px 25px ;
    {text-shadow: 0.1em 0.1em 0.05em #333};
    color: #fff;
}

input{
    border-radius: 7px;
    border: none;
    outline: 0;
    margin: 5px 0 2px 25px ;
    padding: 5px;
   
    ::-webkit-file-upload-button {
        border-radius: 7px;
        outline: 0;
        cursor: pointer;
    }

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
    flex-direction: column;
    align-items: center;
    margin: 5px 0 2px 25px ;
    padding: 5px;
    background-color: #fff;
    border-radius: 8px;
    color: #00aeb5;
    outline: 0;
    cursor: pointer;
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