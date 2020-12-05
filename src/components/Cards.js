import React, { useContext, useEffect } from "react";
import data from "../assets/scripts/data";
import Error from "./Error";
import Card from "./Card";
import { StateContext } from "./StateContext";
import moment from "moment";
import styled from "styled-components";
import { color } from "./Constants";
import Filters from "./Filters";

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

    const dateFilter = (item) => {
        const itemDateStart = moment(item.availabilityFrom).format(
            "YYYY-MM-DD"
        );
        const itemDateEnd = moment(item.availabilityTo).format("YYYY-MM-DD");
        if (
            Object.keys(state.dateStart).length === 0 || Object.keys(state.dateEnd).length === 0 ||
            (stateStart >= itemDateStart && stateEnd <= itemDateEnd)
        ) {
            return true;
        }
    };

    const countryFilter = (item) => {
        if (state.country === "0" || state.country === item.country)
            return true;
    };

    const priceFilter = (item) => {
        if (state.price === "0" || Number(state.price) === item.price)
            return true;
    };

    const sizeFilter = (item) => {
        if (
            state.size === "0" ||
            (state.size === "chico" && item.rooms <= 10) ||
            (state.size === "medio" && item.rooms <= 20 && item.rooms >= 10) ||
            (state.size === "grande" && item.rooms >= 20)
        )
            return true;
    };

    const validator = (hotel) => {
        return (
            priceFilter(hotel) &&
            countryFilter(hotel) &&
            dateFilter(hotel) &&
            sizeFilter(hotel)
        );
    };

    const result = data.filter(validator);

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
