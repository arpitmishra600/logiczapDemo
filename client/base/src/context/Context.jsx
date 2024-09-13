import React, { createContext, useState, useContext } from 'react';

// Create a Context with a default value
const MyContext = createContext();

// Create a Provider component
const Context = ({ children }) => {
    const [poppup, setPoppup] = useState(false);
    return (
        <MyContext.Provider value={{poppup, setPoppup }}>
            {children}
        </MyContext.Provider>
    );
};

export default Context
// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
