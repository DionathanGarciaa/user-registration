import React from 'react';
import { Container, Header, Product, ProductExt, Footer, } from './style';


function Home() {

    return (

      <Container>

        <Header>
            <span>Bem-Vindo</span>
        </Header>

        <ProductExt>

          <Product>
            <span>Lista de produtos</span>
          </Product>

        </ProductExt>

      </Container>

    );
  };
export default Home;