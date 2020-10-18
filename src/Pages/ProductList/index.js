import React, { useState, useEffect } from 'react';
import Api from '../../Services/Api/index';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { MdFormatListBulleted  } from "react-icons/md";
import { Container, Header, HeaderContent, ProductExt, ProductInt, Buscar, Listar, CardAll, CardIcone, Card, Footer } from './style';


const List = () => {
  const [productList, setProductList] = useState([]);
  const [id, setId] = useState('');

  // LISTAR PRODUTOS
  function listProduct() {
    if(id == null){
      Api.get('/products', {
        headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token')}
      }).then(response => {
          if(response.statusText === "OK"){
            setProductList(response.data)
              swal({
                title: "",
                text: "Produtos encontrado",
                icon: "sucess",
              });
          } 
            else {
              swal({
                title: "",
                text: "Produtos não encontrado",
                icon: "error",
              });
            }
        }, err => {
          swal({
            title: "Ops!",
            text: "Produtos não encontrado ",
            icon: "error",
          });
        })
      }
      
      else {
        Api.get(`/products/${id}`, {
          headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token')}
      }).then(response => {
          if(response.statusText === "OK"){
            setProductList(response.data)
            swal({
              title: "",
              text: "Produto encontrado",
              icon: "success",
            });
          } 
          
          else {
            swal({
              title: "",
              text: "Produto não encontrado",
              icon: "error",
            });
          }  
          
        }, err => {
            swal({
              title: "Ops!",
              text: "Produto não encontrado",
              icon: "error",
            });
          })
        }
  }

  return (
    <Container>
      <Header>
        <span>lista de produtos</span>
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

          <CardAll>

            <CardIcone>
            <MdFormatListBulleted  fontSize={50} color="#fff"/>
            </CardIcone>

            <Buscar>
              <input value={id} type="text" onChange={(event) => setId(event.target.value)}/>
              <button onClick={listProduct}>Pesquisar</button>
            </Buscar>
              
            <Listar>
                  
              {productList.map((list) => {
                return(
                  <Card>
                    <span>Id: {list.id} </span>
                    <span> Produto: {list.name} </span>
                    <span> Descrição: {list.descricao} </span>
                  </Card>
              )
              })}
                  
            </Listar>
          </CardAll>
        </ProductInt>
      </ProductExt>
     
     <Footer>
     </Footer>

    </Container>
  );
}

export default List;