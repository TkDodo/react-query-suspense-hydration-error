import { SomeData } from "@/components/some-data";
import { QueryProvider } from "@/providers/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <SomeData header={<>Outside Suspense <strong>(does not throw hydration error)</strong></>}/>

          {children}

          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
};

export default Layout;
