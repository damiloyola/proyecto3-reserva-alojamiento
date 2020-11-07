import React, { useState, useContext } from "react";
import { StateContext } from "./StateContext";

const Header = () => {
    const [state, setState] = useContext(StateContext);
    return (
        <header>
            <h1>Header</h1>
            <p>
                desde el {state.dateStart} hasta el {state.dateEnd}
            </p>
        </header>
    );
};

export default Header;
