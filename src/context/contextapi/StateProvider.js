import React,{createContext, useContext, useReducer } from "react";

export const StateContext = createContext();//data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// hook which let us pull information from the data layer
export const useStateValue = () => useContext(StateContext);