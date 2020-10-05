import React, { useState } from 'react';
import { Container, FirstContent, FirstColumn, MyButton, Forgot, Login, SecondColumn } from  './style';
import { Link } from 'react-router-dom';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    

       return (

        <Container>

            <FirstContent>
                
                    <FirstColumn>
                        <h2>forgot password?</h2>
                        
                        <p>Enter your E-mail to help us identify you.</p>
                       
                        <form>
                            <label htmlFor="email"></label>
                             
                                <input
                                 id="email"
                                 type="email"
                                 placeholder= "Email"
                                 value={email}
                                 onChange={(event) => setEmail(event.target.value)}
                                />

                                <MyButton>
                                     <button>Submit</button>
                                </MyButton>

                                <Login>
                                    <span>Return to</span>
                                    <Link to="/Login">
                                     <strong>Sign in</strong>
                                    </Link>
                                </Login>
                        </form>
                    </FirstColumn>

                    <SecondColumn>
                    {/* imagem */}
                    </SecondColumn>

            </FirstContent>

        </Container>
    );
}

export default ForgotPassword; 