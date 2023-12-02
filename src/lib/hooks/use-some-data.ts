"use client";

import { useQuery } from "@tanstack/react-query";

const getSomeData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return {
    message: "We got a message!",
  };
};

export const useSomeData = () => {
  return useQuery({
    queryKey: ["some", "data"],
    queryFn: () => getSomeData(),
  });
};
