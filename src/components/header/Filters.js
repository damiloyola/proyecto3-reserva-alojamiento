import React, { useContext } from "react";
<<<<<<< HEAD
import { StateContext } from "../misc/StateContext";
import moment from "moment";
import styled, { css } from "styled-components";
import { color, size } from "../misc/Constants";
=======
import { StateContext } from "../StateContext";
import moment from "moment";
import styled, { css } from "styled-components";
import { color, size } from "../Constants";
>>>>>>> 35f9a76bbde39bb5a37c0f186a968202471cf0ae

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignInAlt,
    faSignOutAlt,
    faFlag,
    faBed,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const Form = styled.div`
    background-color: ${color.primary};
    padding: 3% 5%;
`;

const InputStyles = css`
    display: block;
    width: 100%;
    border: none;
    font-size: ${size.m};

    outline: none;
    padding: 1%;
    background-color: ${color.light};
    color: ${color.dark};
`;

const Input = styled.input`
    ${InputStyles}
`;

const Select = styled.select`
    ${InputStyles}
`;
const InputContainer = styled.div`
    background-color: ${color.light};
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 5px 15px;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 1%;
    margin: 0 auto;
    display: block;
    margin-top: 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${color.secondary};
    border: 2px solid ${color.secondary};
    color: ${color.light};
    font-size: ${size.l};
    transition: 0.3s;

    &:hover {
        /* background-color: ${color.light};
        color: ${color.secondary}; */
        box-shadow: 5px 5px 0px -1px rgba(55, 151, 164, 1);
    }
    &:active {
        position: relative;
        top: 2px;
        left: 2px;
        box-shadow: none;
    }
    @media (min-width: 800px) {
        width: 30%;
    }
`;

const Filters = () => {
    const [state, setState] = useContext(StateContext);

    const handleInput = (e) => {
        let { name, value } = e.target;
        if (name === "dateStart" || name === "dateEnd") {
            value = moment(value);
        }

        const values = { ...state, [name]: value, firstTime: false };
        setState(values);
    };

    const handleReset = () => {
        setState({
            dateStart: {},
            dateEnd: {},
            country: "0",
            price: "0",
            size: "0",
        });
    };

    return (
        <Form>
            <InputContainer>
                <FontAwesomeIcon icon={faSignInAlt} color="#3797a4" />

                <Input
                    name="dateStart"
                    type="date"
                    onChange={handleInput}
                    value={
                        Object.keys(state.dateStart).length === 0
                            ? {}
                            : moment(state.dateStart).format("YYYY[-]MM[-]DD")
                    }
                />
            </InputContainer>
            <InputContainer>
                <FontAwesomeIcon icon={faSignOutAlt} color="#3797a4" />

                <Input
                    value={
                        Object.keys(state.dateEnd).length === 0
                            ? {}
                            : moment(state.dateEnd).format("YYYY[-]MM[-]DD")
                    }
                    name="dateEnd"
                    type="date"
                    onChange={handleInput}
                />
            </InputContainer>
            <InputContainer>
                <FontAwesomeIcon icon={faFlag} color="#3797a4" />

                <Select
                    id="country"
                    name="country"
                    onChange={handleInput}
                    value={state.country}
                >
                    <option default value="0">
                        Cualquier Pais
                    </option>
                    <option value="1">Argentina</option>
                    <option value="2">Brasil</option>
                    <option value="3">Chile</option>
                    <option value="4">Uruguay</option>
                </Select>
            </InputContainer>
            <InputContainer>
                <FontAwesomeIcon icon={faDollarSign} color="#3797a4" />

                <Select name="price" onChange={handleInput} value={state.price}>
                    <option default value="0">
                        Cualquier Precio
                    </option>
                    <option value="1">Precio Bajo</option>
                    <option value="2">Precio Medio</option>
                    <option value="3">Precio Alto</option>
                    <option value="4">Precio Muy Alto</option>
                </Select>
            </InputContainer>
            <InputContainer>
                <FontAwesomeIcon icon={faBed} color="#3797a4" />

                <Select name="size" onChange={handleInput} value={state.size}>
                    <option default value="0">
                        Cualquier Tamaño
                    </option>
                    <option value="1">Bajo</option>
                    <option value="2">Medio</option>
                    <option value="3">Grande</option>
                </Select>
            </InputContainer>
            <Button onClick={handleReset}>Reset</Button>
        </Form>
    );
};

export default Filters;
