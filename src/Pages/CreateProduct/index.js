import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card, CardText, CardLogo, CardIcons, Icons } from './style';


const Home = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLogo, setProductLogo] = useState('');
  const [productManual, setProductManual] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    createProduct();
}
  
  // CADASTRAR PRODUTO
    function createProduct() {
      Api.post('/products', {name: productName, descricao: productDescription, logo: productLogo, manual: productManual}, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if(response.data.id){
          alert("Produto cadastrado")
        }
        else {
          alert("Preencha os campos corretamente")
        }
      })
    }


    return (
      <Container>

          <Header>
            <span>cadastrar produtos</span>

            <HeaderContent>

              <Link to="/Home">
                <strong>Menu</strong>
              </Link>

              <p>/</p>
              
              <Link to="/Login">
                <strong>Sair</strong>
              </Link>

            </HeaderContent>
          </Header>

          <ProductExt>
            <ProductInt>
              
              <Product>
                <Card>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="productName"><strong>Nome</strong></label>    
                      <input
                        id="productName"
                        type="text"
                        value={productName}
                        onChange={(event) => setProductName(event.target.value)}   
                      />

                    <label htmlFor="productDescription"><strong>Descrição</strong></label>
                      <input
                        id="productDescription"
                        type="text"
                        value={productDescription}
                        onChange={(event) => setProductDescription(event.target.value)}   
                      />

                    <label htmlFor="productLogo"><strong>Imagem</strong></label>
                      <input
                        id="productLogo"
                        type="file"
                        value={productLogo}
                        onChange={(event) => setProductLogo(event.target.value)}
                      />

                    <label htmlFor="productManual"><strong>Manual</strong></label>
                      <input
                        id="productManual"
                        type="file"
                        value={productManual}
                        onChange={(event) => setProductManual(event.target.value)}
                      />
                      <button type="submit">Enviar</button>
                  </form>
                </Card>
              </Product>
              
            </ProductInt>
          </ProductExt>




      </Container>
    );
  };

export default Home;