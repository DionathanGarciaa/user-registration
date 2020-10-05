import React, { useState, } from 'react';
import { Container, FirstContent, FirstColumn, Terms, Log, SecondColumn } from  './style';
import { Link } from 'react-router-dom';

function CreateAccount() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [checkbox, setCheckbox] = useState('');

    return (

        <Container>

            <FirstContent>
                
                    <FirstColumn>
                        {/* imagem */}
                    </FirstColumn>

                    <SecondColumn>
                        <h2>CREATE ACCOUNT</h2>
                        
                        <form>
                            <label htmlFor="username"></label>
                             
                                <input
                                 id="username"
                                 type="text"
                                 placeholder= "Username"
                                 value={username}
                                 onChange={(event) => setUsername(event.target.value)}
                                />

                            <label htmlFor="email"></label>
                                <input
                                 placeholder="E-mail"
                                 id="email"
                                 type="email"
                                 value={email}
                                 onChange={(event) => setEmail(event.target.value)}
                                />

                            <label htmlFor="password"></label>
                                <input
                                 placeholder="Password"
                                 id="password"
                                 type="password"
                                 value={password}
                                 onChange={(event) => setPassword(event.target.value)}
                                />

                            <label htmlFor="repeatPassword"></label>
                                <input
                                 placeholder="Repeat Password"
                                 id="repeatPassword"
                                 type="password"
                                 value={repeatPassword}
                                 onChange={(event) => setRepeatPassword(event.target.value)}
                                />

                                <Terms>
                                    <input 
                                     id="checkbox"
                                     type="checkbox"
                                     value={checkbox}
                                     onChange={(event) => setCheckbox(event.target.value)}
                                    /> 
                                    <label htmlFor="checkbox">I agree to the Terms of user</label>
                                </Terms>

                               <button>Sign up</button>
                               
                               <Log>
                                   
                                    <span>already have an account?</span>
                                    <Link to="/Login">
                                     <strong>log in!</strong>
                                    </Link>
                                </Log>

                        </form>
                    </SecondColumn>

            </FirstContent>

        </Container>
    );
}

export default CreateAccount; 