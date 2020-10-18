import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, CardAll, CardExt, Card, Footer } from './style';


const Home = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLogo, setProductLogo] = useState('');
  const [productManual, setProductManual] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    createProduct();
  }
  
  // function limpar() {
  //   if(document.getElementById('productName').value!="") {
  //   document.getElementById('productName').value="";
  //   document.getElementById('productDescription').value="";
  //   document.getElementById('productLogo').value="";
  //   document.getElementById('productManual').value="";
  //   }
  //   }


  // CADASTRAR PRODUTO
  function createProduct() {
    Api.post('/products', {name: productName, descricao: productDescription, logo: productLogo, manual: productManual}, {
      headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
    }).then(response => {
      if (response.data){
        swal({
          title: "Parabéns!",
          text: "Produto cadastrado",
          icon: "success",
        });
      }
        else {
          swal({
            title: "Ops",
            text: "Produto já existe",
            icon: "error",
          });
        }

      }, err => {
        swal({
          title: "Ops!",
          text: "Produto já existe",
          icon: "error",
        });
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

            <CardAll>

              <CardExt>
                <MdAddShoppingCart  fontSize={50} color="#fff"/>
              </CardExt>

              <Card>
                <form onSubmit={handleSubmit}>

                  <label htmlFor="productName"><strong>Nome</strong></label>    
                  <input
                    id="productName"
                    type="text"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    required
                    />

                  <label htmlFor="productDescription"><strong>Descrição</strong></label>
                    <input
                      id="productDescription"
                      type="text"
                      value={productDescription}
                      onChange={(event) => setProductDescription(event.target.value)} 
                      required
                    />

                  <label htmlFor="productLogo"><strong>Imagem</strong></label>
                    <input
                      id="productLogo"
                      type="file"
                      value={productLogo}
                      onChange={(event) => setProductLogo(event.target.value)}
                      required
                    />

                  <label htmlFor="productManual"><strong>Manual</strong></label>
                    <input
                      id="productManual"
                      type="file"
                      value={productManual}
                      onChange={(event) => setProductManual(event.target.value)}
                      required
                    />

                  <button type="submit">Enviar</button>
                  {/* <button onClick={limpar}>Limpar</button> */}

                </form>
              </Card>

            </CardAll>

          </Product>
        </ProductInt>
      </ProductExt>

      <Footer>
      </Footer>
      
    </Container>
  );
};

export default Home;