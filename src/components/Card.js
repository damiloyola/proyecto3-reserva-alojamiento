import React from "react";
import styled from "styled-components";
import { color, size } from "./Constants";

const CardContainer = styled.div`
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2%;
    width: 80%;
    margin-top: 3%;
    background-color: ${color.light};
    border-radius: 10px;
    @media (min-width: 800px) {
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Img = styled.img`
    width: 100%;
    align-self: center;
    @media (min-width: 800px) {
        width: 450px;
        height: 300px;
    }
`;

const Text = styled.div`
    padding: 2%;
    padding-right: 0;
    color: ${color.dark};
`;

const H1 = styled.h1`
    font-size: ${size.xl};
    color: ${color.dark};
    margin: 0;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 1%;
    margin: 0 auto;
    display: block;
    margin-top: 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${color.secondary};
    border: 2px solid ${color.secondary};
    color: ${color.light};
    font-size: ${size.l};
    transition: 0.3s;

    &:hover {
        /* background-color: ${color.light};
        color: ${color.secondary}; */
        box-shadow: 5px 5px 0px -1px rgba(55, 151, 164, 1);
    }
    &:active {
        position: relative;
        top: 2px;
        left: 2px;
        box-shadow: none;
    }
    @media (min-width: 800px) {
        width: 30%;
    }
`;

const P = styled.p`
    text-align: left;
    margin-bottom: 30px;
`;

const Item = styled.div`
    background-color: ${color.dark};
    width: 30%;
    max-height: 60px;
    padding: 1%;
    border-radius: 5px;
    line-height: 30px;
    color: ${color.light};
`;

const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Card = (props) => {
    const dateStart = new Date(props.data.availabilityFrom);

    const dateEnd = new Date(props.data.availabilityTo);
    return (
        <CardContainer>
            <Img src={props.data.photo}></Img>
            <Text>
                <H1>{props.data.name}</H1>
                <P>{props.data.description}</P>
                <ItemsContainer>
                    <Item>
                        <span>{props.data.city}</span>
                    </Item>
                    <Item>
                        <span>{props.data.rooms} Habitaciones</span>
                    </Item>
                    <Item>$$$$</Item>
                </ItemsContainer>
                <Button>Reservar</Button>
            </Text>
        </CardContainer>
    );
};

export default Card;
