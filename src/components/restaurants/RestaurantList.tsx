import React from "react";
import { Restaurant as RestaurantType } from "../../types/restaurant";
import Restaurant from "./Restaurant";
import { Container } from "./styles";

interface RestaurantListProps {
  restaurants: RestaurantType[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
