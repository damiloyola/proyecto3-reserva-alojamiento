import React from "react";
import FilterDate from "./FilterDate";
import FilterPrice from "./FilterPrice";
import FilterSize from "./FilterSize";

const Filters = () => {
    return (
        <div>
            <h1>Filters</h1>
            <FilterDate />
            <FilterDate />
            <FilterSize />
            <FilterPrice />
        </div>
    );
};

export default Filters;
