import React, { useContext } from "react";
import data from "../assets/scripts/data";
import Card from "./Card";
import { StateContext } from "./StateContext";
import moment from "moment";

const Cards = () => {
    const [state, setState] = useContext(StateContext);

    const validator = (item) => {
        const itemDateStart = moment(item.availabilityFrom).format(
            "YYYY-MM-DD"
        );
        const itemDateEnd = moment(item.availabilityTo).format("YYYY-MM-DD");
        const stateStart = moment(state.dateStart).format("YYYY-MM-DD");
        const stateEnd = moment(state.dateEnd).format("YYYY-MM-DD");
        const today = moment().format("YYYY-MM-DD");
        const oneWeek = moment().add(1, "d").format("YYYY-MM-DD");
        console.log();
        // debugger;
        if (stateStart == today || stateStart >= itemDateStart) {
            if (stateEnd == oneWeek || stateEnd <= itemDateEnd) {
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
        }
    };

    const result = data.filter((item) => validator(item));
    console.log(result);
    return result.map((i) => <Card key={i.slug} data={i} />);
};
export default Cards;
