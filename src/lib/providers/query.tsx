"use client";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { FC, ReactNode, useState } from "react";

type Props = {
  children: ReactNode
};

export const QueryProvider: FC<Props> = ({ children }) => {
  const [{ queryClient, persister }] = useState(() => {
    const qc = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    });

    const qcp = createAsyncStoragePersister({
      storage: typeof window === "undefined" ? undefined : window.localStorage,
    });

    return { queryClient: qc, persister: qcp };
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};
