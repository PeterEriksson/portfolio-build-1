import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [isMenuComponentVisible, setIsMenuComponentVisible] = useState(false);

  /*   const [width, setWidth] = useState(undefined); */

  //https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      /* setWidth(window.innerWidth); */

      /* md: == 768px */
      window.innerWidth >= 768 && setIsMenuComponentVisible(false);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

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
