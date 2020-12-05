import React, { useState, createContext } from "react";
import moment from "moment";

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [state, setState] = useState({
        firstTime: true,
        dateStart: {},
        dateEnd:{},
        country: "0",
        price: "0",
        size: "0",
        
    });

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    );
};
