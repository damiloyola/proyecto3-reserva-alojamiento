import React, { useContext, useEffect } from "react";
import data from "../assets/scripts/data";
import Error from "./Error";
import Card from "./Card";
import { StateContext } from "./StateContext";
import moment from "moment";
import styled from "styled-components";
import { color } from "./Constants";

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${color.primary};
    @media (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const Cards = () => {
    const [state, setState] = useContext(StateContext);

    const stateStart = moment(state.dateStart).format("YYYY-MM-DD");
    const stateEnd = moment(state.dateEnd).format("YYYY-MM-DD");

    const validator = (item) => {
        const itemDateStart = moment(item.availabilityFrom).format(
            "YYYY-MM-DD"
        );
        const itemDateEnd = moment(item.availabilityTo).format("YYYY-MM-DD");

        if (
            state.firstTime === true ||
            (stateEnd <= itemDateEnd && stateStart >= itemDateStart)
        ) {
            if (state.country == "0" || state.country == item.country) {
                if (state.price == "0" || item.price == state.price) {
                    switch (state.size) {
                        case "chico":
                            if (item.rooms <= 10) {
                                return true;
                            }
                            break;

                        case "medio":
                            if (item.rooms <= 20 && item.rooms >= 10) {
                                return true;
                            }
                            break;

                        case "grande":
                            if (item.rooms >= 20) {
                                return true;
                            }
                            break;

                        case "0":
                            return true;
                        default:
                            return false;
                    }
                }
            }
        }
    };

    const result = data.filter((item) => validator(item));

    console.log(result);
    if (result.length === 0) {
        return <Error e="No se encuentra ningun resultado" />;
    } else if (stateEnd < stateStart) {
        return (
            <Error e="Debe seleccionar una fecha de inicio menor a la fecha de fin " />
        );
    } else
        return (
            <CardsContainer>
                {result.map((i) => (
                    <Card key={i.slug} data={i} />
                ))}
            </CardsContainer>
        );
};
export default Cards;
