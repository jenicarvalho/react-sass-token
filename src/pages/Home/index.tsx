import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './home.scss'

const Home  = () => {

  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)
  
  const [logado, setLogado] = useState(false)

  const Cadastrar = () => {
    const request = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value
    }

   axios.post('http://localhost:4000/users', request)
        .then(resposta => {
          localStorage.setItem("token", resposta.data.accessToken)
          setLogado(true)
        })
  }

  return (
      <div className="header">
        <h2>Meu Logo</h2>

        <div className="formulario">
          <p>Faça o cadastro</p>
          <div>
            <input type="text" placeholder="E-mail" ref={emailInput} />
            <input type="password" placeholder="Senha" ref={passwordInput} />
            <button onClick={Cadastrar}>Enviar</button>
          </div>
          {logado && <Redirect to="/produtos" />}
        </div>
      </div>
  );
}

export default Home;