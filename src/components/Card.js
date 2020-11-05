import React from "react";

const Card = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.description}</p>
            <div>
                <span>{props.data.city}</span>
            </div>
            <div>
                <span>{props.data.rooms} Habitaciones</span>
            </div>
            <button>Reservar</button>
        </div>
    );
};

export default Card;
