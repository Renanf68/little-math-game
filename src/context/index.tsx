import React from "react";
import { User } from "../types";

interface UserContextProps {
  user?: User;
  handleUserName(name: string): void;
  handleLevel(level: number): void;
  handleRecord(toAdd: number): void;
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
  const handleLevel = React.useCallback((level: number) => {
    setUser((prev) => ({ ...prev, level }));
  }, []);
  const handleRecord = React.useCallback((toAdd: number) => {
    setUser((prev) => ({ ...prev, record: (prev?.record ?? 0) + toAdd }));
  }, []);
  // side effects
  // provider
  return (
    <UserContext.Provider
      value={{
        user,
        handleUserName,
        handleLevel,
        handleRecord,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
