import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [group, setGroup] = useState({});

  async function setGroup(newgroup) {
    setGroup(newgroup);
  }

  return <DataContext.Provider value={{ group, setGroup }}>{children}</DataContext.Provider>;
};
