"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
import Homepage from "./homepage/page";

// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {/* <TooltipProvider> */}
        {/* <Toaster /> */}
        <Homepage />
        
      {/* </TooltipProvider> */}
    </QueryClientProvider>
  );
}