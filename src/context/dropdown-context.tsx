import { createContext } from 'react';
interface DropdownContextProps {
  children: React.ReactNode;
}

export const DropdownContext = createContext({});

function DropdownProvider({ children }: DropdownContextProps) {
  return (
    <DropdownContext.Provider value={{}}>{children}</DropdownContext.Provider>
  );
}

export { DropdownProvider };
