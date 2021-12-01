import React from "react";
import { Restaurant } from "../../types/restaurant";
import Typography from "../typography/Typography";
import { StyledRestaurantItem } from "./styles";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`} passHref>
      <StyledRestaurantItem backgroundUrl={restaurant.image}>
        <div className="restaurant-cover" />
        <Typography className="restaurant-name">{restaurant.name}</Typography>
      </StyledRestaurantItem>
    </Link>
  );
};

export default RestaurantItem;
