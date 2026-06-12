import {getQueryClient, trpc} from "@/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {Client} from "@/app/client";
import {Suspense} from "react";

export default function Home() {

   const queryClient = getQueryClient();
   void queryClient.prefetchQuery(trpc.hello.queryOptions({text: "server"}))

   return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<p>Loading</p>}>
               <Client/>
            </Suspense>
         </HydrationBoundary>
      </div>
   );
}
