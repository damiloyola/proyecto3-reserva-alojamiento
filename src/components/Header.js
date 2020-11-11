import React, { useContext } from "react";
import { StateContext } from "./StateContext";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const format = "dddd[,] D [de] MMMM [de] YYYY";

const Header = () => {
    const [state, setState] = useContext(StateContext);

    return (
        <header>
            <h1>Header</h1>
            <p>
                desde el {moment(state.dateStart).format(format)} hasta el{" "}
                {moment(state.dateEnd).format(format)}
            </p>
        </header>
    );
};

export default Header;
