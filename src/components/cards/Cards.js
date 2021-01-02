import React, { useContext, useState, useEffect } from "react";
import data from "../../assets/scripts/data";
<<<<<<< HEAD
import Error from "../error/Error";
import Card from "./Card";
import { StateContext } from "../misc/StateContext";
import moment from "moment";
import styled from "styled-components";
import { color } from "../misc/Constants";
import FilterModal from "../error/FilterModal";
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 5%;
  background-color: ${color.primary};
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Cards = () => {
  const [state, setState] = useContext(StateContext);
  const [modalOpen, setModal] = useState(true);
  const stateStart = moment(state.dateStart).format("YYYY-MM-DD");
  const stateEnd = moment(state.dateEnd).format("YYYY-MM-DD");

  const dateFilter = (item) => {
    const itemDateStart = moment(item.availabilityFrom).format("YYYY-MM-DD");
    const itemDateEnd = moment(item.availabilityTo).format("YYYY-MM-DD");
    return (
      Object.keys(state.dateStart).length === 0 ||
      Object.keys(state.dateEnd).length === 0 ||
      (stateStart >= itemDateStart && stateEnd <= itemDateEnd)
    );
  };

  const countryFilter = (item) => {
    return (
      state.country === "0" ||
      (state.country === "1" && item.country === "Argentina") ||
      (state.country === "2" && item.country === "Brasil") ||
      (state.country === "3" && item.country === "Chile") ||
      (state.country === "4" && item.country === "Uruguay")
    );
  };

  const priceFilter = (item) => {
    return state.price === "0" || Number(state.price) === item.price;
  };

  const sizeFilter = (item) => {
    return (
      state.size === "0" ||
      (state.size === "1" && item.rooms <= 10) ||
      (state.size === "2" && item.rooms <= 20 && item.rooms >= 10) ||
      (state.size === "3" && item.rooms >= 20)
    );
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

  const closeModal = () => {
    setState({
      dateStart: {},
      dateEnd: {},
      country: "0",
      price: "0",
      size: "0"
    });
    setModal(false);
  };

  useEffect(() => {
    return () => {
      setModal(true);
    };
  }, [state.dateStart]);

  if (result.length === 0) {
    return <Error e="No se encuentra ningun resultado" />;
  } else if (stateEnd < stateStart) {
    return <Error e="la fecha de entrada debe ser menor a la de salida" />;
  } else if (stateStart < moment().format("YYYY-MM-DD")) {
    return <FilterModal handleClose={closeModal} open={modalOpen} />;
  } else
    return (
      <main>
        <Section>
          {result.map((i) => (
            <Card key={i.slug} data={i} />
          ))}
        </Section>
      </main>
    );
=======
import Error from "../Error";
import Card from "./Card";
import { StateContext } from "../StateContext";
import moment from "moment";
import styled from "styled-components";
import { color } from "../Constants";
import FilterModal from "../header/FilterModal";
const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 5%;
    background-color: ${color.primary};
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Cards = () => {
    const [state] = useContext(StateContext);
    const [modalOpen, setModal] = useState(true);
    const stateStart = moment(state.dateStart).format("YYYY-MM-DD");
    const stateEnd = moment(state.dateEnd).format("YYYY-MM-DD");

    const dateFilter = (item) => {
        const itemDateStart = moment(item.availabilityFrom).format(
            "YYYY-MM-DD"
        );
        const itemDateEnd = moment(item.availabilityTo).format("YYYY-MM-DD");
        return (
            Object.keys(state.dateStart).length === 0 ||
            Object.keys(state.dateEnd).length === 0 ||
            (stateStart >= itemDateStart && stateEnd <= itemDateEnd)
        );
    };

    const countryFilter = (item) => {
        return (
            state.country === "0" ||
            (state.country === "1" && item.country === "Argentina") ||
            (state.country === "2" && item.country === "Brasil") ||
            (state.country === "3" && item.country === "Chile") ||
            (state.country === "4" && item.country === "Uruguay")
        );
    };

    const priceFilter = (item) => {
        return state.price === "0" || Number(state.price) === item.price;
    };

    const sizeFilter = (item) => {
        return (
            state.size === "0" ||
            (state.size === "1" && item.rooms <= 10) ||
            (state.size === "2" && item.rooms <= 20 && item.rooms >= 10) ||
            (state.size === "3" && item.rooms >= 20)
        );
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

    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        return () => {
            setModal(true);
        };
    }, [state.dateStart]);

    if (result.length === 0) {
        return <Error e="No se encuentra ningun resultado" />;
    } else if (stateEnd < stateStart) {
        return <Error e="la fecha de entrada debe ser menor a la de salida" />;
    } else if (stateStart < moment().format("YYYY-MM-DD")) {
        return <FilterModal handleClose={closeModal} open={modalOpen} />;
    } else
        return (
            <main>
                <Section>
                    {result.map((i) => (
                        <Card key={i.slug} data={i} />
                    ))}
                </Section>
            </main>
        );
>>>>>>> 35f9a76bbde39bb5a37c0f186a968202471cf0ae
};
export default Cards;
