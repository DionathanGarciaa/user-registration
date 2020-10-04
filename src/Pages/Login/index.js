import React, { useState, useEffect } from 'react';
import { Container, FirstContent, FirstColumn, Remember, Forgot, CreateAcount, SecondColumn } from  './style';
import { Link } from 'react-router-dom';

function Login() {

    const [login, setLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [checkbox, setCheckbox] = useState('');

       return (

        <Container>

            <FirstContent>
                
                    <FirstColumn>
                        <h2>Login</h2>
                        
                        <form>
                            <label htmlFor="login"></label>
                             
                                <input
                                 id="login"
                                 type="email"
                                 placeholder= "Username"
                                 value={login}
                                 onChange={(event) => setLogin(event.target.value)}
                                />

                            <label htmlFor="passwordLogin"></label>
                                <input
                                 placeholder="********"
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
                                 <label htmlFor="checkbox">Remember</label>
                                </Remember>

                               <button to="/Home">Sign in</button>
                               
                                <Forgot>
                                    <span>Forgot</span>
                                    <Link to="#">
                                     <strong>Username / password?</strong>
                                    </Link>
                                </Forgot>

                                <CreateAcount>
                                    <span>Create an account?</span>
                                    <Link to="/CreateAccount">
                                     <strong>Sign up</strong>
                                    </Link>
                                </CreateAcount>
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