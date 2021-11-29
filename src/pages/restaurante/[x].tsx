import type { NextPage } from "next";
import { useRouter } from "next/router";

const Restaurant: NextPage = () => {
  const { query } = useRouter();

  console.log(query.x);

  return <h1>One</h1>;
};

export default Restaurant;
