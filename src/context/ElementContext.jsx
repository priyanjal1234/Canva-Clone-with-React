import React, { createContext, useEffect, useState } from "react";

export const ElementDataContext = createContext(null);

const ElementContext = ({ children }) => {
  const [currentElement, setcurrentElement] = useState(() => {
    let savedCurrentElement = localStorage.getItem("currentElement");
    return savedCurrentElement ? savedCurrentElement : "";
  });

  const [showTextToolbar, setshowTextToolbar] = useState(() => {
    let savedShowTextToolbar = localStorage.getItem("showTextToolbar");
    return savedShowTextToolbar && currentElement === "text" ? savedShowTextToolbar : false;
  });

  useEffect(() => {
    localStorage.setItem("currentElement", JSON.stringify(currentElement));
  }, [currentElement]);

  useEffect(() => {
    localStorage.setItem("showTextToolbar", JSON.stringify(showTextToolbar));
  }, [showTextToolbar]);

  return (
    <ElementDataContext.Provider
      value={{
        currentElement,
        setcurrentElement,
        showTextToolbar,
        setshowTextToolbar,
      }}
    >
      {children}
    </ElementDataContext.Provider>
  );
};

export default ElementContext;
