import React  from 'react';
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card } from './style';


const Home = () => {

  return (

      <Container>


          <Header>
            <span>Bem-Vindo</span>

            <HeaderContent>

              <Link to="/UserInformation">
                <strong>Informações Pessoais</strong>
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
                  <Link to="/CreateProduct">
                  <button>Cadastrar produto</button>
                  </Link>
                </Card>

                <Card>
                  <button>Editar produto</button>
                </Card>

                <Card>
                  <button>Excluir produto</button>
                </Card>

                <Card>
                  <Link to="/ProductList">
                    <button>Listar produto</button>
                  </Link>
                </Card>
              </Product>
              
            </ProductInt>
          </ProductExt>
          
      </Container>
    );
  };

export default Home;