import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Buscar, Listar, Card } from './style';


const List = () => {
  const [productList, setProductList] = useState([]);
  const [id, setId] = useState('');
 

  // LISTAR PRODUTOS
  function listProduct() {
    if(id == null){
      Api.get('/products', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if(response.statusText === "OK"){
          setProductList(response.data)
          alert("Produtos encontrado")
        } else {
            alert("Produtos não encontrado")
          }
      })
    } else {
      Api.get(`/products/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
          if(response.statusText === "OK"){
            setProductList(response.data)
            alert("Produto encontrado")
          } else {
             alert("Produto não encontrado")
            }
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
          
         <Buscar>
            <input value={id} type="text" onChange={(event) => setId(event.target.value)}/>
            <button onClick={listProduct}>Pesquisar</button>
          </Buscar>
            
          <Listar>
            <Card>
                {productList.map((list) => 
                  <span> Produto: {list.name} </span>
                )}
                
              
            </Card>
          </Listar>
          
         
          
              
        </ProductInt>
      </ProductExt>




    </Container>
  );
};

export default List;