import React, { createContext, useContext, useState } from "react";
import { formDataType } from "../components/DemoForm";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextValue {
  data: formDataType[];
  handleData: (newData: formDataType) => void;
}

// Providing a default value directly here for better type assurance
const defaultContextValue: UserContextValue = {
  data: [],
  handleData: () => {} // This is a no-op function (does nothing)
};

export const UserContext = createContext<UserContextValue>(defaultContextValue);

export const useUserContext = () => useContext(UserContext);

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<formDataType[]>([]);

  const handleData = (newData: formDataType) => {
    setData((prevData) => [...prevData, newData]);
  };  

  const value: UserContextValue = { data, handleData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
