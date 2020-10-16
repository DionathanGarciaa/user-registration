import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, Card, CardText, CardLogo, CardIcons, Icons } from './style';


const ProductEdit = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [id, setId] = useState('');

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
                alert("Item alterado com sucesso")
            }
            else {
                alert("Preencha os campos corretamente")
            }
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
                        <Card>

                            <form onSubmit={handleSubmit}>

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
                        </Card>
                    </Product>
                </ProductInt>
            </ProductExt>
        </Container>
    );
};

export default ProductEdit;