import React, { useContext } from "react";
import Filters from "../header/Filters";
<<<<<<< HEAD
import { StateContext } from "../misc/StateContext";
import styled from "styled-components";
import { color, size } from "../misc/Constants";
=======
import { StateContext } from "../StateContext";
import styled from "styled-components";
import { color, size } from "../Constants";
>>>>>>> 35f9a76bbde39bb5a37c0f186a968202471cf0ae
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const format = "dddd[,] D [de] MMMM [de] YYYY";

const Hero = styled.header`
<<<<<<< HEAD
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
  const priceEnum = {
    BAJO: 1,
    MEDIO: 2,
    ALTO: 3,
    MUY_ALTO: 4
  };
  const priceText = (price) => {
    switch (price) {
      case `${priceEnum.BAJO}`:
        return "bajo";
      case `${priceEnum.MEDIO}`:
        return "medio";
      case `${priceEnum.ALTO}`:
        return "alto";
      case `${priceEnum.MUY_ALTO}`:
        return "muy alto";
      default:
        return false;
    }
  };

  const sizeEnum = {
    CHICO: 1,
    MEDIO: 2,
    GRANDE: 3
  };
  const sizeText = (size) => {
    switch (size) {
      case `${sizeEnum.CHICO}`:
        return "chico";
      case `${sizeEnum.MEDIO}`:
        return "medio";
      case `${sizeEnum.GRANDE}`:
        return "grande";

      default:
        return false;
    }
  };

  const countryEnum = {
    ARG: 1,
    BR: 2,
    CH: 3,
    UR: 4
  };
  const countryText = (country) => {
    switch (country) {
      case `${countryEnum.ARG}`:
        return "Argentina";
      case `${countryEnum.BR}`:
        return "Brasil";
      case `${countryEnum.CH}`:
        return "Chile";
      case `${countryEnum.UR}`:
        return "Uruguay";
      default:
        return false;
    }
  };
  return (
    <header>
      <Hero>
        <H1>Hoteles</H1>
        {Object.keys(state.dateStart).length === 0 ||
        Object.keys(state.dateEnd).length === 0 ? (
          <P> Estas viendo todos los hoteles disponibles </P>
        ) : (
          <P>
            Estas buscando hoteles desde el{" "}
            <Span>{moment(state.dateStart).format(format)}</Span> hasta el{" "}
            <Span>{moment(state.dateEnd).format(format)} </Span>
          </P>
        )}

        {state.country !== "0" && (
          <P>
            en <Span>{countryText(state.country)} </Span>
          </P>
        )}

        {state.price !== "0" && (
          <P>
            a un precio <Span>{priceText(state.price)} </Span>
          </P>
        )}

        {state.size !== "0" && (
          <P>
            con un tamaño <Span>{sizeText(state.size)} </Span>
          </P>
        )}
      </Hero>
      <Filters />
    </header>
  );
=======
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
    const sizeText = (size) => {
        switch (size) {
            case "1":
                return "chico";
            case "2":
                return "medio";
            case "3":
                return "grande";

            default:
                return false;
        }
    };
    const countryText = (country) => {
        switch (country) {
            case "1":
                return "Argentina";
            case "2":
                return "Brasil";
            case "3":
                return "Chile";
            case "4":
                return "Uruguay";
            default:
                return false;
        }
    };
    return (
        <header>
            <Hero>
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
                        en <Span>{countryText(state.country)} </Span>
                    </P>
                )}

                {state.price !== "0" && (
                    <P>
                        a un precio <Span>{priceText(state.price)} </Span>
                    </P>
                )}

                {state.size !== "0" && (
                    <P>
                        con un tamaño <Span>{sizeText(state.size)} </Span>
                    </P>
                )}
            </Hero>
            <Filters />
        </header>
    );
>>>>>>> 35f9a76bbde39bb5a37c0f186a968202471cf0ae
};

export default Header;
