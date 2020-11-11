import React from "react";

const Card = (props) => {
    const dateStart = new Date(props.data.availabilityFrom);
    console.log(dateStart);
    const dateEnd = new Date(props.data.availabilityTo);
    return (
        <div>
            <img src={props.data.photo}></img>
            <h1>{props.data.name}</h1>
            <p>{props.data.description}</p>
            <div>
                <span>{props.data.city}</span>
            </div>
            <div>
                <span>{props.data.rooms} Habitaciones</span>
            </div>
            <p>{dateStart.toString()}</p>
            <p>{dateEnd.toString()}</p>
            <button>Reservar</button>
        </div>
    );
};

export default Card;
