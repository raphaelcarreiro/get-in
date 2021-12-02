import React from "react";
import { Header } from "./styles";
import NextImage from "next/image";
import { Restaurant } from "../../types/restaurant";
import Typography from "../typography/Typography";
import NextLink from "next/link";
import { ChevronLeft } from "../../assets/icons/ChevronLeft";

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ restaurant }) => {
  return (
    <Header restaurantImage={restaurant.image}>
      <NextLink href="/">
        <a className="back-link">
          <ChevronLeft />
          Voltar
        </a>
      </NextLink>
      <div className="header-cover" />
      <div className="content">
        <div className="restaurant-logo-wrapper">
          <NextImage
            width={110}
            height={110}
            src={restaurant.logo}
            alt={restaurant.name}
            className="restaurant-logo"
          />
        </div>
        <div className="restaurant-data">
          <Typography className="restaurant-name" size={2}>
            {restaurant.name}
          </Typography>
          <Typography size={0.9} fontWeight={200}>
            {restaurant.formattedPhone}
          </Typography>
          <Typography size={0.9} fontWeight={200}>
            {restaurant.website}
          </Typography>
        </div>
      </div>
    </Header>
  );
};

export default RestaurantHeader;
