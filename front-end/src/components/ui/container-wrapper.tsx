import { ReactNode } from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    variant: {
      container: "max-w-7xl px-2",
      fluid: "px-2",
    },
  },
  defaultVariants: {
    variant: "container",
  },
});

const ContainerWrapper = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant?: VariantProps<typeof containerVariants>["variant"];
  children: ReactNode;
}) => {
  return (
    <div className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
