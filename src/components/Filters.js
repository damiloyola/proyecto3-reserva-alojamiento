import React from "react";
import FilterDate from "./FilterDate";
import FilterPrice from "./FilterPrice";
import FilterSize from "./FilterSize";

const Filters = () => {
    return (
        <div>
            <FilterDate />
            <FilterDate />
            <FilterSize />
            <FilterPrice />
        </div>
    );
};

export default Filters;
