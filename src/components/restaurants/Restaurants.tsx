import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Restaurant } from "../../types/restaurant";
import Typography from "../typography/Typography";
import RestaurantList from "./RestaurantList";
import { Container } from "./styles";

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    api
      .get("/restaurants", { params: { limit: 10, page: 1 } })
      .then((response) => {
        setRestaurants(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Typography size={1.5} fontWeight={700}>
        Restaurantes
      </Typography>
      <RestaurantList restaurants={restaurants} />
    </Container>
  );
};

export default Restaurants;
