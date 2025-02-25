import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";
import ContainerWrapper from "@/components/ui/container-wrapper";
import RegisterForm from "./register-form";

const RegitsterPage = () => {
  return (
    <>
      <div className="relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            React Mail Box
          </div>
        </div>
        <div className="grid place-items-center h-full">
          <ContainerWrapper className="sm:w-[420px] space-y-6 px-6 ">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details to create your account
              </p>
            </div>
            <RegisterForm />
          </ContainerWrapper>
        </div>
      </div>
    </>
  );
};

export default RegitsterPage;
