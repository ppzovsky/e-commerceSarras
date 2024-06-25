import React, { createContext, useState, useContext } from 'react';

interface UserContextType {
  usuario: string | null;
  setUsuario: React.Dispatch<React.SetStateAction<string | null>>;
}

const defaultValue: UserContextType = {
  usuario: null,
  setUsuario: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);