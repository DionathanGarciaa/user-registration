import React  from 'react';
import { MdAddShoppingCart, MdModeEdit, MdDelete, MdFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card, CardIcone, CardConteudo } from './style';


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

            {/* CADASTRAR PRODUTO */}
            <Card>
              <CardIcone>
                <MdAddShoppingCart fontSize={30} color="#fff"/>
              </CardIcone>
              <CardConteudo>
                <Link to="/CreateProduct">
                  <span>cadastrar produto</span>
                </Link>
              </CardConteudo>
            </Card>

            {/* EDITAR PRODUTO */}
            <Card>
              <CardIcone>
                <MdModeEdit fontSize={30} color="#fff"/>
              </CardIcone>
              <CardConteudo>
                <Link to="/Productedit">
                  <span>editar produto</span>
                </Link>
              </CardConteudo>
            </Card>
            
            {/* EXCLUIR PRODUTO */}
            <Card>
              <CardIcone>
                <MdDelete fontSize={30} color="#fff"/>
              </CardIcone>
              <CardConteudo>
                <Link to="/Productedit">
                  <span>excluir produto</span>
                </Link>
              </CardConteudo>
            </Card>

            {/* LISTAR PRODUTOS */}
            <Card>
              <CardIcone>
                <MdFormatListBulleted fontSize={30} color="#fff"/>
              </CardIcone>
              <CardConteudo>
                <Link to="/ProductList">
                  <span>listar produtos</span>
                </Link>
              </CardConteudo>
            </Card>

          </Product>
        </ProductInt>
      </ProductExt>
          
    </Container>
  );
};

export default Home;