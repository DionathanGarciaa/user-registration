import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { MdDelete, MdSearch } from 'react-icons/md';
import { Container, Header, HeaderContent, ProductExt, ProductInt, Product, CardAll, CardIcone, Card, CardTop, CardBottom, Buscar, MyButtom, List, Footer } from './style';


const ProductDelete = () => {
   const[id, setId] = useState('');
   const [productList, setProductList] = useState([]);


   // DELETAR PRODUTO
    function deleteProduct() {
        const token = sessionStorage.getItem("token")
        const autho = {
            headers:{ Authorization: `Bearer ${token}`}
        };
        swal({
            title: "Tem certeza que deseja excluir?",
            text: "Após exlcuir não é possível recuperar os dados ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
                if (willDelete) {
                    Api.delete(`/products/${id}`,  autho).then(response => {
                        if(response.data){
                            swal({
                                title: "",
                                text: "Item deletado com sucesso",
                                icon: "success",
                            });
                        }   
                        else {
                            swal({
                                title: "",
                                text: "Não foi possivel deletar o produto",
                                icon: "error",
                        });
                        }
                    })
                }   
            })
    }


   // MOSTRAR PRODUTO

    function listProduct() {
        Api.get(`/products/${id}`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then(response => {
            if(response.statusText === "OK") {
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
                    icon: "success",
                });
            }
        },  err => {
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
                <span>excluir produtos</span>

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
                                <MdDelete  fontSize={50} color="#fff"/>
                            </CardIcone>

                            <Card>
                                <CardTop>
                                    <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
                                    {console.log(id.value)}
                                    <button onClick={deleteProduct}>Deletar</button>
                                </CardTop>

                                <CardBottom>
                                    <Buscar>
                                        <input  placeholder="Pesquisar ID" value={id} type="text" onChange={(event) => setId(event.target.value)}/>
                                        <MyButtom>
                                            <button onClick={listProduct}> <MdSearch fontSize={25} color="#00adb5"/></button>
                                        </MyButtom>
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
                                </CardBottom>

                            </Card>

                        </CardAll>

                    </Product>
                </ProductInt>
            </ProductExt>

            <Footer>
            </Footer>
    
        </Container>
    );
}
 export default ProductDelete;