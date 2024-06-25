import React, { createContext, useState, useContext } from 'react';



export type user = {
  usuario: string | null;
  email: string | null;
  senha: string | null;
  username: string | null;
  id: number | null;
}


interface UserContextType {
  usuario: user | null;
  setUsuario: React.Dispatch<React.SetStateAction<user | null>>;
}

const defaultValue: UserContextType = {
  usuario: null,
  setUsuario: () => {},
  
};

export const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<user | null>(null);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);