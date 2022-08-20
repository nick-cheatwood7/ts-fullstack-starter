import { createContext, ReactNode, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

const initialState: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logout: () => undefined,
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    initialState.authenticated
  );
  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
