import React from "react";
import { User } from "../types";

const storageKey = "little-math-game-users";

const initialUser = {
  record: 0,
  level: 1,
  power: 0,
} as Partial<User>;

interface UserContextProps {
  users?: User[];
  user?: User;
  notifyFlash: boolean;
  flashFired: boolean;
  clearUser(): void;
  handleUserSelect(user: User): void;
  handleNewUser(name: string, age: number): void;
  handleRecord(total: number): void;
  handlePower(total: number): void;
  setFlashNotified(value: boolean): void;
  fireFlash(): void;
  resetPower(): void;
  upgradeLevel(): void;
  clearUserData(): void;
  deleteUserProfile(): void;
}

const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps
);
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const UserProvider = ({ children }: Props) => {
  // state
  const [users, setUsers] = React.useState<User[]>();
  const [user, setUser] = React.useState<User>();
  const [flashFired, setFlashFired] = React.useState(false);
  const [flashNotified, setFlashNotified] = React.useState(false);
  // helpers
  const notifyFlash = React.useMemo(() => {
    return user?.power === 100 && !flashNotified;
  }, [user?.power, flashNotified]);
  // handlers
  const handleNewUser = React.useCallback((name: string, age: number) => {
    const newUser = {
      name,
      age,
      ...initialUser,
    } as User;
    setUsers((prev) => {
      const updated = prev ?? [];
      updated.push(newUser);
      return updated;
    });
    setUser(newUser);
  }, []);
  const clearUser = React.useCallback(() => {
    setUser(undefined);
  }, []);
  const handleUserSelect = React.useCallback((user: User) => {
    setUser(user);
  }, []);
  const handleRecord = React.useCallback((total: number) => {
    setUser((prev) => ({
      ...prev!,
      record: (prev?.record ?? 0) + total,
    }));
  }, []);
  const handlePower = React.useCallback((total: number) => {
    setUser((prev) => {
      const power = prev?.power ?? 0;
      return {
        ...prev!,
        power: power < 100 ? power + total : power,
      };
    });
  }, []);
  const upgradeLevel = React.useCallback(() => {
    setUser((prev) => ({ ...prev!, level: (prev?.level ?? 0) + 1 }));
  }, []);
  const fireFlash = React.useCallback(() => {
    setFlashFired(true);
  }, []);
  const resetPower = React.useCallback(() => {
    setFlashFired(false);
    setFlashNotified(false);
    setUser((prev) => ({
      ...prev!,
      power: 0,
    }));
  }, []);
  const clearUserData = React.useCallback(() => {
    setUser((prev) => ({
      ...prev!,
      ...initialUser,
    }));
  }, []);
  const deleteUserProfile = React.useCallback(() => {
    setUsers((prev) => {
      const updated = (prev ?? []).filter(
        (currentUser) => currentUser.name !== user?.name
      );
      return updated;
    });
    setUser(undefined);
  }, [user]);
  // side effects
  React.useEffect(() => {
    const currentData = localStorage.getItem(storageKey);
    if (!currentData) {
      setUsers([]);
    } else {
      setUsers(JSON.parse(currentData));
    }
  }, []);
  React.useEffect(() => {
    if (!user) return;
    setUsers((prev) => {
      const updated = (prev ?? []).map((currentUser) => {
        if (currentUser.name === user.name) return user;
        else return currentUser;
      });
      return updated;
    });
  }, [user]);
  React.useEffect(() => {
    if (!users || users.length === 0) return;
    localStorage.setItem(storageKey, JSON.stringify(users));
  }, [users]);
  // provider
  return (
    <UserContext.Provider
      value={{
        users,
        user,
        notifyFlash,
        flashFired,
        clearUser,
        handleUserSelect,
        handleNewUser,
        handleRecord,
        handlePower,
        setFlashNotified,
        fireFlash,
        resetPower,
        upgradeLevel,
        clearUserData,
        deleteUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
