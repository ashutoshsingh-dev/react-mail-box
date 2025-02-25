import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { LoginFormSchema, LoginFormTypes } from "./login-schema";
import { Loader } from "@/components/ui/loading";
import { useLogin } from "./hooks/use-login";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const login = useLogin();

  const form = useForm<LoginFormTypes>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin@gmail.com",
    },
  });

  const onSubmit = async (data: LoginFormTypes) => {
    startTransition(() => {
      login.mutate(data);
    });
  };

  return (
    <>
      <div className={cn("grid gap-6")}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="email"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="password"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isPending}>
                {isPending && <Loader />}
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
