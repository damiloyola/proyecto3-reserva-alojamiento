import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [state, setState] = useState({
        dateStart: "hoy",
        dateEnd: "2",
        price: "0",
        size: "0",
    });

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    );
};
