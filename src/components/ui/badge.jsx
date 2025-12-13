import * as React from "react";
import  badgeVariants from "./badgeVariants";

import { cn } from "@/components/ui/utils";


function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
