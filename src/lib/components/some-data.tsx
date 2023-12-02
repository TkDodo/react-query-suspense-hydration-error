"use client";

import { useSomeData } from "@/hooks/use-some-data";
import { useIsRestoring } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

type Props = {
  header: ReactNode;
  inSuspense?: boolean;
};

export const SomeData: FC<Props> = ({ header, inSuspense }) => {
  const { data, status } = useSomeData();
  const isRestoring = useIsRestoring();

  console.log(inSuspense ? "in suspense" : "not in suspense", {
    status,
    data,
    isRestoring,
  });

  if (status === "pending") {
    return <main>loading</main>;
  }

  if (status === "error") {
    return <main>error</main>;
  }

  return (
    <main className="border border-red-500 p-10 flex flex-col relative">
      <span className="text-red-500 text-sm absolute top-0 left-0 p-1">
        {header}
      </span>

      {data.message}
    </main>
  );
};
