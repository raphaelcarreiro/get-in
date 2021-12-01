import type { NextPage } from "next";
import { Header } from "../components/Header";
import Restaurants from "../components/restaurants/Restaurants";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Restaurants />
    </>
  );
};

export default Home;
