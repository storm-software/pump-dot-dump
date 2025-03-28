/* -------------------------------------------------------------------

                ⚡ Storm Software - Pump Dot Dump

 This code was released as part of the Pump Dot Dump project. Pump Dot Dump
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/pump-dot-dump
 Documentation:   https://stormsoftware.com/projects/pump-dot-dump/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/pump-dot-dump/license

 ------------------------------------------------------------------- */

"use client";

import { getQueryClient } from "@/query/get-query-client";
import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type * as React from "react";

export function QueryClientProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      {process.env.NEXT_PUBLIC_VERCEL_ENV === "development" && (
        <ReactQueryDevtools />
      )}
    </ReactQueryClientProvider>
  );
}
