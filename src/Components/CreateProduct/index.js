import React from 'react'

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

  export default createProduct;
