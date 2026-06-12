"use client"

import {useSuspenseQuery} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";

export const Client = () => {
   const trpc = useTRPC();
   const {data} = useSuspenseQuery(trpc.hello.queryOptions({text: "client"}));

   return (
      <div>{JSON.stringify(data)}</div>
   )
}