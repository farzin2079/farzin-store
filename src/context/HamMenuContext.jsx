import { createContext, useContext, useState } from "react";

const HamMenuContext = createContext();

function HamMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHam() {
    setIsOpen((open) => !open);
  }

  return (
    // @ts-ignore
    <HamMenuContext.Provider value={{ isOpen, toggleHam }}>
      {children}
    </HamMenuContext.Provider>
  );
}

function useHamContext() {
  const context = useContext(HamMenuContext);
  if (context === undefined)
    throw new Error("HamMenuContext using outsid provider");
  return context;
}

export { HamMenuProvider, useHamContext };
