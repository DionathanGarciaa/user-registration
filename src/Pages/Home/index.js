import React from 'react';
import { Container, Header, Product, ProductExt, Footer, } from './style';


function Home() {

    return (

      <Container>

        <Header>
            <span>product</span>
        </Header>

        <ProductExt>

          <Product>
            <span>product list</span>
          </Product>

        </ProductExt>

      </Container>

    );
  };
export default Home;