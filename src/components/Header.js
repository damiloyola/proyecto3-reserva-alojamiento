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
const P = styled.span`
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
                return "bajo";
            case "2":
                return "medio";
            case "3":
                return "alto";
            case "4":
                return "muy alto";
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
                    <P> Estas viendo todos los hoteles disponibles </P>
                ) : (
                    <P>
                        Estas buscando hoteles desde el{" "}
                        <Span>{moment(state.dateStart).format(format)}</Span>{" "}
                        hasta el{" "}
                        <Span>{moment(state.dateEnd).format(format)} </Span>
                    </P>
                )}

                {state.country !== "0" && (
                    <P>
                        en <Span>{state.country} </Span>
                    </P>
                )}

                {state.price !== "0" && (
                    <P>
                        a un precio <Span>{priceText(state.price)} </Span>
                    </P>
                )}

                {state.size !== "0" && (
                    <P>
                        con un tamaño <Span>{state.size} </Span>
                    </P>
                )}
            </header>
        </Hero>
    );
};

export default Header;
