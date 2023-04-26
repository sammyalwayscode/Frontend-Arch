import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../utils/api/api";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getting user"],
    queryFn: getUser,
  });
  return <div>Home</div>;
};

export default Home;
