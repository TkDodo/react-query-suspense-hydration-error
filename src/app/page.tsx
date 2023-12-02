import { SomeData } from "@/components/some-data";
import { FC } from "react";

const Page: FC = () => {
  return (
    <SomeData inSuspense header={<>In Suspense <strong>(throws hydration error)</strong></>}/>
  );
};

export default Page;
