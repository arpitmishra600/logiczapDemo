import React, { createContext, useState, useContext } from 'react';

// Create a Context with a default value
const MyContext = createContext();

// Create a Provider component
const Context = ({ children }) => {
    const [poppup, setPoppup] = useState(false);
    const [formSteps, setFormSteps] = useState(0);
    const [expdialog,setExpdialog]=useState(false)
    const [edudialog,setEdudialog]=useState(false)
    const [proDialog,setProDialog]=useState(false)
    return (
        <MyContext.Provider value={{poppup, setPoppup,formSteps, setFormSteps,expdialog,setExpdialog,edudialog,setEdudialog,proDialog,setProDialog}}>
            {children}
        </MyContext.Provider>
    );
};

export default Context
// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
