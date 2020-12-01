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
    letter-spacing: 2px;
`;
const H1 = styled.h1`
    color: ${color.primary};
    font-size: ${size.xl};
`;
const P = styled.p`
    color: ${color.light};
    font-size: ${size.l};
`;

const Span = styled.span`
    color: ${color.secondary};
    font-weight: bold;
`;

const Header = () => {
    const [state, setState] = useContext(StateContext);

    return (
        <Hero>
            <header>
                <H1>Hoteles</H1>
                <P>
                    desde el{" "}
                    <Span>{moment(state.dateStart).format(format)}</Span> hasta
                    el <Span>{moment(state.dateEnd).format(format)}</Span>
                </P>
            </header>
        </Hero>
    );
};

export default Header;
