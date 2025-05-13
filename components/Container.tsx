import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-3 md:px-10 mx-auto border border-black/20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
