import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../Services/Api/index';
import { Container, FirstContent, FirstColumn, Remember, MyButton, CreateAccount, SecondColumn } from  './style';


const Login = () => {

    const [login, setLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        loginUser();
    }
   
    function loginUser() {
        Api.post("/sessions", {email: login, password: passwordLogin}).then(response => {
            if(response.data.token){ 
                sessionStorage.setItem("token", response.data.token)
                history.push("/Home")
            }
            else {
                alert("Preencha corretamente os campos")
            }
        }, err => {
                alert("Usuário não encontrado")
            })
    }

    return (
        <Container>
            <FirstContent>
                    <FirstColumn>
                        <h2>Conecte-se</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="login"></label>
                                <input
                                 id="login"
                                 type="email"
                                 placeholder= "E-mail"
                                 value={login}
                                 onChange={(event) => setLogin(event.target.value)}
                                />

                            <label htmlFor="passwordLogin"></label>
                                <input
                                 placeholder="Senha"
                                 id="passwordLogin"
                                 type="password"
                                 value={passwordLogin}
                                 onChange={(event) => setPasswordLogin(event.target.value)}
                                />

                            <Remember>
                                <input 
                                 id="checkbox"
                                 type="checkbox"
                                 value={checkbox}
                                 onChange={(event) => setCheckbox(event.target.value)}
                                /> 
                            <label htmlFor="checkbox">Lembrar</label>
                            </Remember>

                                <MyButton>
                                     <button type="submit">Entrar</button>
                                </MyButton>

                                <CreateAccount>
                                    <span>Criar uma conta?</span>
                                    <Link to="/CreateAccount">
                                     <strong>inscrever-se</strong>
                                    </Link>
                                </CreateAccount>
                        </form>
                    </FirstColumn>

                    <SecondColumn>
                    {/* imagem */}
                    </SecondColumn>

            </FirstContent>
        </Container>
    );
}

export default Login; 