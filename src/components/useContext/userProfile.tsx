import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Cria o contexto
export const UserContext = createContext();

// Cria o Provider
export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    axios.get("https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Usuarios/")
      .then(res => {
        const { usuario, email, username, senha } = res.data;
        setUsuario(usuario);
        setEmail(email);
        setUsername(username);
        setSenha(senha);
      })
  }, []);

  return (
    <UserContext.Provider value={{ usuario, email, username, senha }}>
      {children}
    </UserContext.Provider>
  );
};