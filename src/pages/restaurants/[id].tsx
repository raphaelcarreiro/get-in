import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Restaurant from "../../components/restaurant/Restaurant";
import api from "../../services/api";
import { Restaurant as RestaurantType } from "../../types/restaurant";

interface RestaurantPageProps {
  restaurant: RestaurantType;
}

const RestaurantPage: NextPage<RestaurantPageProps> = ({ restaurant }) => {
  return <Restaurant restaurant={restaurant} />;
};

export default RestaurantPage;

export const getServerSideProps: GetServerSideProps<RestaurantPageProps> =
  async ({ query }) => {
    const response = await api.get(`/restaurants/${query.id}`);

    return {
      props: {
        restaurant: response.data.data,
      },
    };
  };
