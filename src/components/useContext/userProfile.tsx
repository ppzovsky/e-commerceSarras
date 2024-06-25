import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const UserContext = createContext( { usuario: '' } );


export const UserProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    axios.get("https://6675c1f4a8d2b4d072f15c00.mockapi.io/sarras/Usuarios/1")
      .then(res => {
        const { usuario } = res.data;
        setUsuario(usuario);
      })
  }, []);

  return (
    <UserContext.Provider value={{ usuario }}>
      {children}
    </UserContext.Provider>
  );
};