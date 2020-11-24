import React, { useContext } from "react";
import { StateContext } from "./StateContext";
import moment from "moment";
import styled, { css } from "styled-components";
import { color, size } from "./Constants";
import { Button } from "./Card";

const Form = styled.form`
    background-color: ${color.primary};
    padding: 5%;
`;

const InputStyles = css`
    display: block;
    width: 100%;
    border: none;
    font-size: ${size.m};
    margin: 15px 0;
    outline: none;
    padding: 1%;
    background-color: ${color.light};
    color: ${color.dark};
    border-radius: 5px;
`;

const Input = styled.input`
    ${InputStyles}
`;

const Select = styled.select`
    ${InputStyles}
`;

// const Button = styled.button`
//     border: none;
//     outline: none;
//     background-color: ${color.secondary};
//     color: ${color.light};
//     padding: 1%;
//     width: 100%;
//     display: block;
//     margin: 0 auto;
//     font-size: ${size.m};
//     border-radius: 5px;

//     @media (min-width: 800px) {
//         width: 40%;
//     }
// `;
const Filters = () => {
    const [state, setState] = useContext(StateContext);

    const handleInput = (e) => {
        let { name, value } = e.target;
        if (name === "dateStart" || name === "dateEnd") {
            value = moment(value);
        }
        console.log(moment(state.dateStart).format("DD-MM-YYYY"));
        const values = { ...state, [name]: value, firstTime: false };
        setState(values);
    };

    return (
        <Form>
            <Input
                name="dateStart"
                default={moment(state.dateStart).format("DD-MM-YYYY")}
                onChange={handleInput}
                type="date"
            />
            <Input name="dateEnd" type="date" onChange={handleInput} />
            <Select name="country" onChange={handleInput}>
                <option default value="0">
                    Cualquier Pais
                </option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </Select>
            <Select name="price" onChange={handleInput}>
                <option default value="0">
                    Cualquier Precio
                </option>
                <option value="1">Precio Bajo</option>
                <option value="2">Precio Medio</option>
                <option value="3">Precio Alto</option>
                <option value="4">Precio Muy Alto</option>
            </Select>
            <Select name="size" onChange={handleInput}>
                <option default value="0">
                    Cualquier Tamaño
                </option>
                <option value="chico">Bajo</option>
                <option value="medio">Medio</option>
                <option value="grande">Grande</option>
            </Select>
            <Button>Reset</Button>
        </Form>
    );
};

export default Filters;
