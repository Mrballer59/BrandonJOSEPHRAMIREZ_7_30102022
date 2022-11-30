import { createContext, useState } from "react";
import mockedData from "../config/MOCK_DATA.json";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <DataContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  );
};
