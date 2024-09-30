import React, { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [phonedata, setphonedata] = useState([]);
  const [setfeatures, setsetfeatures] = useState("");
  useEffect(() => {
    console.log(setfeatures);
  }, [setfeatures]);

  return (
    <ThemeContext.Provider value={{ phonedata, setfeatures, setsetfeatures }}>
      {children}
    </ThemeContext.Provider>
  );
};
