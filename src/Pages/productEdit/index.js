import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdSearch } from 'react-icons/md';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, CardAll, CardIcone, Card, CardLeft, CardRight, Buscar, List, Footer } from './style';

const ProductEdit = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [id, setId] = useState('');
  const [productList, setProductList] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        editProduct();
    }

    // EDITAR PRODUTO
    function editProduct() {
        const token = sessionStorage.getItem("token")
        const autho = {
            headers:{ Authorization: `Bearer ${token}`}
        };
        const bodyParameters = {
            id: id, name: productName, descricao: productDescription
        };
  
        Api.put(`/products/${id}`, bodyParameters, autho).then(response => {
            if(response.data.id){
                swal({
                    title: "Parabéns!",
                    text: "Item alterado com sucesso",
                    icon: "success",
                  });
            }
            else {
                swal({
                    title: "Ops",
                    text: "Preencha os campos corretamente",
                    icon: "error",
                  });
            }
        }, err => {
                swal({
                    title: "Ops!",
                    text: "Preencha os campos corretamente",
                    icon: "error",
                });
            })
    }
    

    // MOSTRAR PRODUTO
    function listProduct() {
        Api.get(`/products/${id}`, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then(response => {
            if(response.statusText === "OK") {
                setProductList(response.data)
                swal({
                    title: "",
                    text: "Produto encontrado",
                    icon: "success",
                  });
            } else {
                swal({
                    title: "",
                    text: "Produto não encontrado",
                    icon: "success",
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

    return (
        <Container>
            <Header>
                <span>editar produtos</span>

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
                            <CardIcone>
                                <MdModeEdit  fontSize={50} color="#fff"/>
                            </CardIcone>

                            <Card>
                                <CardLeft>
                                    <form onSubmit={handleSubmit}>

                                    <label htmlFor="pesquisar"><strong>ID</strong></label>
                                    <input value={id} type="text" onChange={(event) => setId(event.target.value)}/>
                                    
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

                                        <button type="submit">Enviar</button>
                                    </form>
                                </CardLeft>


                                <CardRight>
                                    <Buscar>
                                        <input  placeholder="Pesquisar ID" value={id} type="text" onChange={(event) => setId(event.target.value)}/>
                                        <button onClick={listProduct}> <MdSearch fontSize={26} color="#00adb5"/></button>
                                    </Buscar>
                                        {productList.map((list) => {
                                            return (
                                                <List>
                                                    <span>Id: {list.id} </span>
                                                    <span> Produto: {list.name} </span>
                                                    <span> Descrição: {list.descricao} </span>
                                                </List>
                                            )
                                        })}
                                </CardRight>
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

export default ProductEdit;