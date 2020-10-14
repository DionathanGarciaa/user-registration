import React, { useState } from 'react';
import { IoIosAddCircleOutline, IoMdCreate, IoMdCloseCircleOutline } from "react-icons/io";
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card, CardText, CardLogo, CardIcons, Icons } from './style';


const Home = () => {
  const [productName, setUProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLogo, setProductLogo] = useState('');
  const [productId, setProductId] = useState('');

  
  // CADASTRAR PRODUTO
    function createProduct() {
      Api.post('/products', {productName, productDescription, productLogo}, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if(response.data.id){
          console.log(response)
        }
        else {
          alert("Preencha os campos corretamente")
        }
      })
    }


    // EDITAR PRODUTO
    function editProduct() {
      const token = sessionStorage.getItem("token")
      const autho = {
        headers:{ Authorization: `Bearer ${token}`}
      };
      const bodyParameters = {
       name: productName, descricao: productDescription, logo: productLogo
      };

      Api.put("/products/id", bodyParameters, autho).then(response => {
        if(response.data.id){
          alert("Item alterado com sucesso")
        }
        else {
          alert("Preencha os campos corretamente")
        }
      })
    }


    // DELETAR PRODUTO
    function deleteProduct() {
      const token = sessionStorage.getItem("token")
      const autho = {
        headers:{ Authorization: `Bearer ${token}`}
      };
      const bodyParameters = {
       id: productId 
      };

      Api.delete("/products/", bodyParameters, autho).then(response => {
        if(response.data.name){
          alert("Item deletado com sucesso")
        }
        else {
          alert("Não foi possivel deletar o produto")
        }
      })
    }



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
                  <button>Listar produto</button>
                </Card>
              </Product>
              
            </ProductInt>
          </ProductExt>




      </Container>
    );
  };

export default Home;