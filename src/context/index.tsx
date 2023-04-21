import React from "react";
import { User } from "../types";

interface UserContextProps {
  user?: User;
  handleUserName(name: string): void;
  handleRecord(total: number): void;
  upgradeLevel(): void;
}

const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps
);
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const UserProvider = ({ children }: Props) => {
  // state
  const [user, setUser] = React.useState<User>();
  // handlers
  const handleUserName = React.useCallback((name: string) => {
    setUser({
      name,
      record: 0,
      level: 1,
    });
  }, []);
  const handleRecord = React.useCallback((total: number) => {
    console.log("total", total);
    setUser((prev) => ({
      ...prev,
      record: (prev?.record ?? 0) + total,
    }));
  }, []);
  const upgradeLevel = React.useCallback(() => {
    setUser((prev) => ({ ...prev, level: (prev?.level ?? 0) + 1 }));
  }, []);
  // side effects
  // provider
  return (
    <UserContext.Provider
      value={{
        user,
        handleUserName,
        handleRecord,
        upgradeLevel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
