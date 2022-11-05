import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [UserInfo, setUserInfo] = useState([]);
  return (
    <DataContext.Provider value={{ UserInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  );
};
