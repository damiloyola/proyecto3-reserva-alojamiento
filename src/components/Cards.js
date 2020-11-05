import React from "react";
import data from "../assets/scripts/data";
import Card from "./Card";

const Cards = () => {
    return data.map((i) => <Card key={i.slug} data={i} />);
};
export default Cards;
