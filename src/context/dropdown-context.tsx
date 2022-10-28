import { createContext, useContext } from 'react';

interface DropdownContextProps {
  children: React.ReactNode;
}

export const DropdownContext = createContext({});

function DropdownProvider({ children }: DropdownContextProps) {
  return (
    <DropdownContext.Provider value={{}}>{children}</DropdownContext.Provider>
  );
}

function useDropdown() {
  const context = useContext(DropdownContext);

  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
}

export { DropdownProvider, useDropdown };
