import React, { useContext } from "react";
import { StateContext } from "./StateContext";
import moment from "moment";

const Filters = () => {
    const [state, setState] = useContext(StateContext);

    const handleInput = (e) => {
        let { name, value } = e.target;
        if (name === "dateStart" || name === "dateEnd") {
            value = moment(value);
        }
        const values = { ...state, [name]: value };
        setState(values);
    };

    return (
        <div>
            <input name="dateStart" onChange={handleInput} type="date" />
            <input name="dateEnd" type="date" onChange={handleInput} />
            <select name="price" id="price_select" onChange={handleInput}>
                <option default value="0">
                    Cualquier Precio
                </option>
                <option value="1">Precio Bajo</option>
                <option value="2">Precio Medio</option>
                <option value="3">Precio Alto</option>
                <option value="4">Precio Muy Alto</option>
            </select>
            <select name="size" id="size_select" onChange={handleInput}>
                <option default value="0">
                    Cualquier Tamaño
                </option>
                <option value="chico">Bajo</option>
                <option value="medio">Medio</option>
                <option value="grande">Grande</option>
            </select>
        </div>
    );
};

export default Filters;
