"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/sonner";

/**
 * Wraps application content with theme and tooltip providers and mounts the global toaster UI.
 *
 * @param children - Application UI to render inside the providers
 * @returns A React element tree that applies theme and tooltip contexts and mounts a `Toaster` for notifications
 */
export function AppProvider({ children }: { children: React.ReactNode }) {
   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
      >
         <TooltipProvider>
            {children}
         </TooltipProvider>
         <Toaster richColors  />
      </ThemeProvider>
   );
}