'use client'
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useTRPC} from "@/trpc/client";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

export default function Home() {

   const [input, setInput] = useState<string>("");

   const trpc = useTRPC();
   const processTask = useMutation(trpc.task.mutationOptions({
      onSuccess: () => {
         toast.success("Task created");
      }
   }))

   return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <Input value={input} onChange={(e) => setInput(e.target.value)} />
         <Button onClick={() => processTask.mutate({input: input})}  >Ask Ai</Button>
      </div>
   );
}
