import React, { useState, useContext } from "react";
import { StateContext } from "./StateContext";

const Header = () => {
    const [state, setState] = useContext(StateContext);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    const formatDateEnd = new Date(state.dateEnd);
    const formatDateStart = new Date(state.dateStart);
    console.log(state.dateStart);
    return (
        <header>
            <h1>Header</h1>
            <p>
                desde el {formatDateStart.toLocaleDateString("es-ES", options)},
                hasta el {formatDateEnd.toLocaleDateString("es-ES", options)}
            </p>
        </header>
    );
};

export default Header;
