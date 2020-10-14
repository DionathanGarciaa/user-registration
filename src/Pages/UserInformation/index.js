import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io'
import Api from '../../Services/Api/index';
import { Container, FirstContent, FirstColumn, MyButton, Back, SecondColumn } from  './style';


const UserInformation = () => {

    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        confirm();
    }
   

    function confirm() {
        
    const token = sessionStorage.getItem("token")
    const autho = {
        headers:{ Authorization: `Bearer ${token}`}
    };
    const bodyParameters = {
        name: nameUser, email: emailUser, password: passwordUser
    };

        Api.put("/users", bodyParameters, autho).then(response => {
            if(response.data.name){
                alert("Cadastro atualizado")
            }
            else {
                alert("Preencha os campos corretamente")
            }
        })
    }

    
    return (
        
        <Container>
            <FirstContent>
                <FirstColumn>
                    <h2>Informações Pessoais</h2>
                        
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nameUser"></label>
                            <input
                                id="nameUser"
                                type="text"
                                placeholder= "Nome"
                                value={nameUser}
                                onChange={(event) => setNameUser(event.target.value)}
                            />

                        <label htmlFor="emailUser"></label>
                            <input
                                id="emailUser"
                                type="email"
                                placeholder="E-mail"
                                value={emailUser}
                                onChange={(event) => setEmailUser(event.target.value)}
                            />

                        <label htmlFor="passwordUser"></label>
                            <input
                                id="passwordUser"
                                type="password"
                                placeholder="Senha"
                                value={passwordUser}
                                onChange={(event) => setPasswordUser(event.target.value)}
                             />

                        <MyButton>
                            <button type="submit">Enviar</button>
                        </MyButton>

                        <Back>
                            <Link to="/Home">
                                <IoIosHome font-size={25}>Home</IoIosHome>
                            </Link>
                        </Back>
                        
                    </form>
                </FirstColumn>

                <SecondColumn>
                 {/* imagem */}
                </SecondColumn>

            </FirstContent>
        </Container>
    );
}

export default UserInformation; 