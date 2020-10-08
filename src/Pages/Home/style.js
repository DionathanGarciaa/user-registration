import styled from 'styled-components';
import { darken } from 'polished';



export const Container = styled.div`
height: 100%;
background-color: #eeeeee;
`;


export const Header = styled.div`
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


export const ProductExt = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 655px;
`;


export const Product = styled.div`
display: flex;
height: 70%;
width: 80%;
border-radius: 15px;
background-color: #393e46;
box-shadow: 4px 3px 3px ${darken(0.1, "#000")};
text-align: center;

span{
    text-align: center;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    text-decoration: underline;
    padding-top: 15px;
}

`;













