'use client'

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReduxToolkitProvider from "./ReduxToolkitProvider";

export default function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(
    () => new QueryClient(),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxToolkitProvider>{children}</ReduxToolkitProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}