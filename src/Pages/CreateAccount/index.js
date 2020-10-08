import React, { useState } from 'react';
import Api from '../../Services/Api/index';
import { Link, useHistory } from 'react-router-dom';
import { Container, FirstContent, FirstColumn, Terms, Log, SecondColumn } from  './style';


const CreateAccount = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        createUser();
    }

    function createUser() {
        Api.post("/users", {name: username, email, password}).then(res => {
            if(res.data.id){
                history.push("/Login")
            }
            else {
                alert("It was not possible to register the user")
            }
        }, err => {
                alert("E-mail already exists")
            })
    }

    
    return (

        <Container>

            <FirstContent>
                
                    <FirstColumn>
                        {/* imagem */}
                    </FirstColumn>

                    <SecondColumn>
                        <h2>CREATE ACCOUNT</h2>
                        
                        <form onSubmit={handleSubmit}>

                            <label htmlFor="username"></label>
                             
                                <input
                                 id="username"
                                 type="text"
                                 placeholder= "Username"
                                 value={username}
                                 onChange={(event) => setUsername(event.target.value)}
                                 required
                                />

                            <label htmlFor="email"></label>
                                <input
                                 id="email"
                                 type="email"
                                 placeholder="E-mail"
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