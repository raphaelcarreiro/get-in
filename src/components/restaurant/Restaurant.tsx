import React from "react";
import { Restaurant as RestaurantType } from "../../types/restaurant";
import { StyledRestaurant } from "./styles";

interface RestaurantProps {
  restaurant: RestaurantType;
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <StyledRestaurant>
      <div>{restaurant.name}</div>
    </StyledRestaurant>
  );
};

export default Restaurant;
