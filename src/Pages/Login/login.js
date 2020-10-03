import React, { useState, useEffect } from 'react';
import { Container, FirstContent, FirstColumn, Remember, Forgot, CreateAcount, SecondColumn } from  './style';
import { ImUser } from 'react-icons/im';

function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [checkbox, setCheckbox] = useState('');

    return (

        <Container>

            <FirstContent>
                
                     <FirstColumn>
                        <h2>Welcome</h2>
                        
                        <form>
                            <label htmlFor="login"></label>
                             
                                <input
                                 id="login"
                                 icon={ImUser}
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

                               <button>Sign in</button>
                               
                                <Forgot>
                                 <span>Forgot</span>
                                 <a href="#">Username / password?</a>
                                </Forgot>

                                <CreateAcount>
                                <span>Create an account?</span>
                                <a href="#">Sign up</a>

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