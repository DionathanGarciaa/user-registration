import React, { useState } from 'react';
import { IoIosAddCircleOutline, IoMdCreate, IoMdCloseCircleOutline } from "react-icons/io";
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card, CardText, CardLogo, CardIcons, Icons } from './style';


const Home = () => {
  const [productName, setUProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLogo, setProductLogo] = useState('');
  // const [productManual, setProductManual] = useState('');
  const [productId, setProductId] = useState('');


  // LOGO
  const ProductLogo  = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function(e) {
      setProductLogo(reader.result);
    }
    reader.readAsDataURL(file);
  }

  // MANUAL
  // const ProductManual = (event) => {
  //   let file = event.target.files[0];
  //   let reader = new FileReader();
  //   reader.onloadend = function(e) {
  //     setProductManual(reader.result);
  //   }
  //   reader.readAsDataURL(file);
  // }


  // CRIAR PRODUTO
    function createProduct() {
      const token = sessionStorage.getItem("token")
      const autho = {
        headers:{ Authorization: `Bearer ${token}`}
      };
      const bodyParameters = {
       name: productName, descricao: productDescription, logo: productLogo
      };

      Api.post("/products", bodyParameters, autho).then(response => {
        if(response.data.name){
          alert("Item cadastrado")
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
        if(response.data.name){
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
              <span>Lista de produtos</span>
              
              <Product>
                <Card>

                  <CardLogo>
                    <label htmlFor="productLogo"> <strong>Logo</strong> </label>
                      <input
                        id="productLogo"
                        type="file"
                        accept="image/*"
                        name="productLogo"
                        placeholder="Logo"
                        onChange={(event) => {
                        productLogo(event);
                        }}
                      />
                  </CardLogo>

                  <CardText>
                    <form>
                      <label htmlFor="productName"><strong>Produto</strong></label>    
                        <input
                          id="productName"
                          type="text"
                          value={productName}
                          onChange={(event) => setUProductName(event.target.value)}   
                        />

                      <label htmlFor="productDescription"><strong>Descrição</strong></label>
                        <textarea
                          id="productDescription"
                          type="text"
                          value={productDescription}
                          onChange={(event) => setProductDescription(event.target.value)}   
                        />
                    </form>
                  </CardText>

                  <CardIcons>
                    <Icons>
                        <IoIosAddCircleOutline onClick={createProduct} fontSize={25} color='#fff'/>
                    </Icons>

                    <Icons>
                        <IoMdCreate onclick={editProduct} fontSize={25} color='#fff'/>
                    </Icons>

                    <Icons>
                        <IoMdCloseCircleOutline onclick={deleteProduct}  fontSize={25} color='#fff'/>
                    </Icons>
                  </CardIcons>

                </Card>
              </Product>
              
            </ProductInt>
          </ProductExt>

      </Container>

    );
  };

export default Home;