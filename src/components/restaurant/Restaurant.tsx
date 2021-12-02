import React from "react";
import { Restaurant as RestaurantType } from "../../types/restaurant";
import { Container } from "./styles";
import RestaurantHeader from "./RestaurantHeader";
import Typography from "../typography/Typography";

interface RestaurantProps {
  restaurant: RestaurantType;
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <Container>
      <RestaurantHeader restaurant={restaurant} />
      <div className="content">
        <Typography className="label">Descrição</Typography>
        <Typography size={1.375}>{restaurant.description}</Typography>
        <div className="prices">
          <Typography className="label">Faixa de preço</Typography>
          <Typography>{restaurant.price_range}</Typography>
        </div>
        <div className="opening-hours">
          <Typography className="label">Horários de funcionamento</Typography>
          <Typography>{restaurant.opening_hours}</Typography>
        </div>
        <div>
          <Typography className="label">Formas de pagamento</Typography>
          <Typography>{restaurant.payment_methods}</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Restaurant;
