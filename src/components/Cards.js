import React, { useContext } from "react";
import data from "../assets/scripts/data";
import Card from "./Card";
import { StateContext } from "./StateContext";

const Cards = () => {
    const [state, setState] = useContext(StateContext);

    const validator = (item) => {
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
    };

    const result = data.filter(
        (item) => validator(item)

        //  state.rooms=="chico" ? item.price <= 10: state.size=="mediano"? item.price <= 20 && item.price >=10 : state.size=="grande" ? item.price >=20 :
    );
    console.log(result);
    return result.map((i) => <Card key={i.slug} data={i} />);
};
export default Cards;
