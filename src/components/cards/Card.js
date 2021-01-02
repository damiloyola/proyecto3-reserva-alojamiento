import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { color, size } from "../misc/Constants";

const CardContainer = styled.div`
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 4%;
  width: 80%;
  margin: 5% auto;

  background-color: ${color.light};
  border-radius: 10px;
  @media (min-width: 800px) {
    width: 90%;

    justify-content: space-between;
  }
`;

const Img = styled.img`
  width: 100%;
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

const Button = styled.button`
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
   
`;

const P = styled.p`
  text-align: left;
  margin-bottom: 30px;
`;

const Item = styled.div`
  background-color: ${color.dark};
  width: 50%;
  height: 40px;
  margin: 10px auto;
  padding: 2%;
  border-radius: 5px;
  line-height: 30px;
  color: ${color.light};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ItemText = styled.span`
  display: block;
  padding: 5%;
  font-size: 14px;

  line-height: 15px;
`;

const Icon = styled.div``;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = (props) => {
  return (
    <CardContainer>
      <Img
        src={props.data.photo}
        alt={"foto de hotel " + props.data.name}
      ></Img>
      <Text>
        <H1>{props.data.name}</H1>
        <P>{props.data.description}</P>
        <ItemsContainer>
          <Item>
            <Icon>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
            </Icon>
            <ItemText>{props.data.city}</ItemText>
          </Item>
          <Item>
            <Icon>
              <FontAwesomeIcon icon={faBed} color="white" />
            </Icon>
            <ItemText>{props.data.rooms} Habitaciones</ItemText>
          </Item>
          <Item>
            <FontAwesomeIcon
              icon={faDollarSign}
              color={props.data.price >= 1 ? "white" : "#72ABB3"}
              className="size"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              color={props.data.price >= 2 ? "white" : "#72ABB3"}
              className="size"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              color={props.data.price >= 3 ? "white" : "#72ABB3"}
              className="size"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              color={props.data.price >= 4 ? "white" : "#72ABB3"}
              className="size"
            />
          </Item>
        </ItemsContainer>
        <Button>Reservar</Button>
      </Text>
    </CardContainer>
  );
};

export default Card;
