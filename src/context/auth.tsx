import { ReactNode, createContext, useContext } from "react";

interface IUser {
  name: string;
  taxId: string;
  password: string;
}

interface ChildrenProvider {
  children: ReactNode;
}

interface Auth {
  logout: () => void;
  isAuthenticated: () => boolean;
  getUser: () => IUser | undefined;
}

export const AuthContext = createContext<Auth>({} as Auth);

export const AuthProvider = ({ children }: ChildrenProvider) => {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  function isAuthenticated() {
    const hasToken = localStorage.getItem("token");

    if (hasToken) {
      return true;
    }

    return false;
  }

  function getUser(): IUser | undefined {
    const user = localStorage.getItem("user");
    if (!user) return;

    const obj: IUser = JSON.parse(user);
    return obj;
  }

  return (
    <AuthContext.Provider value={{ logout, isAuthenticated, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
