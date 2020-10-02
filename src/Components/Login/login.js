import React, { useState, useEffect } from 'react';

function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <container className="container">
          
            <div className="content first-content">

                <div className="first-column">
                    <h2 className="title">Seja bem-vindo</h2>
                    <p className="description">para se manter conectado conosco</p>
                    <p className="description">por favor faça login com suas informações pessoais</p>
                     <button className="btn">sign in</button>
                </div>

                <div className="second-column">
                    <h2 className="title">Criar Conta</h2>
                        <form>
                            <label htmlFor="nome">Nome</label>
                             <input
                             id="nome"
                             type="text"
                             value={nome}
                             onChange={(event) => setNome(event.target.value)}
                            />
                            {/* <p>{nome}</p>   */}

                            <label htmlFor="email">E-mail</label>
                             <input
                             id="email"
                             type="email"
                             value={email}
                             onChange={(event) => setEmail(event.target.value)}
                            />
                            {/* <p>{email}</p> */}

                            <label htmlFor="password">Password</label>
                             <input
                             id="password"
                             type="password"
                             value={password}
                             onChange={(event) => setPassword(event.target.value)}
                            />
                            {/* <p>{password}</p>   */}

                            <button className="btn">sign up</button>
                        </form>
                </div>
            </div>


            <div className="content second-content">

                <div className="first-column">
                    <h2 className="title">Entrar</h2>
                        <form>
                            <label htmlFor="email">E-mail</label>
                             <input
                             id="email"
                             type="email"
                             value={email}
                             onChange={(event) => setEmail(event.target.value)}
                            />
                            {/* <p>{email}</p> */}

                            <label htmlFor="password">Password</label>
                             <input
                             id="password"
                             type="password"
                             value={password}
                             onChange={(event) => setPassword(event.target.value)}
                            />
                            {/* <p>{password}</p>   */}

                            <a href="#">Esqueceu sua senha?</a>

                            <button className="btn">sign in</button>
                        </form>
                </div>


                        <div className="second-column">
                            <h2 className="title">Olá, amigo</h2>
                            <p className="description">insira seus dados pessoais</p>
                            <p className="description">e comece a jornada conosco</p>
                            <button className="btn">sign up</button>
                        </div>

            </div>

        </container>
    );
}

export default Login; 