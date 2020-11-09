import React, { useContext } from "react";
import data from "../assets/scripts/data";
import Card from "./Card";
import { StateContext } from "./StateContext";

const Cards = () => {
    const [state, setState] = useContext(StateContext);

    const validator = (item) => {
        const stateDateStart = new Date(state.dateStart);
        const stateDateEnd = new Date(state.dateEnd);
        const itemDateStart = new Date(item.availabilityFrom);
        const itemDateEnd = new Date(item.availabilityTo);
        const today = new Date(Date.now());

        console.log(today);

        if (state.dateStart == today || stateDateStart >= itemDateStart) {
            if (state.dateEnd == today || stateDateEnd <= itemDateEnd) {
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
    return result.map((i) => <Card key={i.slug} data={i} />);
};
export default Cards;
