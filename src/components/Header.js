import React, { useContext } from "react";
import { StateContext } from "./StateContext";
import styled from "styled-components";
import { color, size } from "./Constants";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const format = "dddd[,] D [de] MMMM [de] YYYY";

const Hero = styled.div`
    background-color: ${color.dark};
    padding: 5%;
    padding-bottom: 2%;
    letter-spacing: 2px;
`;
const H1 = styled.h1`
    color: ${color.primary};
    font-size: ${size.xl};
`;
const P = styled.p`
    color: ${color.light};
    font-size: ${size.l};
    margin: 5px 0px;
`;

const Span = styled.span`
    color: ${color.secondary};
    font-weight: bold;
`;

const Header = () => {
    const [state] = useContext(StateContext);

    const priceText = (price) => {
        switch (price) {
            case "1":
                return "Bajo";
            case "2":
                return "Medio";
            case "3":
                return "Alto";
            case "4":
                return "Muy Alto";
            default:
                return false;
        }
    };
    return (
        <Hero>
            <header>
                <H1>Hoteles</H1>
                {Object.keys(state.dateStart).length === 0 ||
                Object.keys(state.dateEnd).length === 0 ? (
                    <P>
                        {" "}
                        Ingrese una fecha de inicio y una de final para comenzar
                        a buscar{" "}
                    </P>
                ) : (
                    <P>
                        Desde el{" "}
                        <Span>{moment(state.dateStart).format(format)}</Span>{" "}
                        hasta el{" "}
                        <Span>{moment(state.dateEnd).format(format)}</Span>
                    </P>
                )}

                {state.country !== "0" && (
                    <P>
                        En <Span>{state.country}</Span>
                    </P>
                )}

                {state.price !== "0" && (
                    <P>
                        Precio <Span>{priceText(state.price)}</Span>
                    </P>
                )}

                {state.size !== "0" && (
                    <P>
                        Tamaño del hotel <Span>{state.size}</Span>
                    </P>
                )}
            </header>
        </Hero>
    );
};

export default Header;
