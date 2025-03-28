import { createContext, useContext, useState } from "react";

export const OrgContext = createContext();

export const OrgProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  return (
    <OrgContext.Provider value={{ post, setPost }}>
      {children}
    </OrgContext.Provider>
  );
};

export const useOrgContext = () => {
  return useContext(OrgContext);
};
