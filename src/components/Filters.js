import React, { useState, useContext } from "react";
import { StateContext } from "./StateContext";

const Filters = () => {
    const [state, setState] = useContext(StateContext);

    const handleInput = (e) => {
        const { name, value } = e.target;
        const values = { ...state, [name]: value };
        setState(values);
    };
    return (
        <div>
            <input name="dateStart" onChange={handleInput} type="date" />
            <input name="dateEnd" type="date" onChange={handleInput} />
            <select name="price" id="price_select" onChange={handleInput}>
                <option value="bajo">Bajo</option>
                <option value="medio">Medio</option>
                <option value="alto">Alto</option>
            </select>
            <select name="size" id="size_select" onChange={handleInput}>
                <option value="bajo">Bajo</option>
                <option value="medio">Medio</option>
                <option value="alto">Alto</option>
            </select>
        </div>
    );
};

export default Filters;
