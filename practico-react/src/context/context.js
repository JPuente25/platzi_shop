import React from "react";
import { useGetUserSession } from "../utils/hooks/useGetUserSession";
import { useInitialValue } from "../utils/hooks/useInitialState";

export const Context = React.createContext();

const Provider = ({children}) => {   
   return (
      <Context.Provider value={useInitialValue()}>
         {children}
      </Context.Provider>
   );
}

export { Provider };