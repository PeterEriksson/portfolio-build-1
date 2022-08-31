import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [isMenuComponentVisible, setIsMenuComponentVisible] = useState(false);

  return (
    <Context.Provider
      value={{
        isMenuComponentVisible,
        setIsMenuComponentVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
