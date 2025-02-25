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

import { RegisterFormTypes, RegisterFormSchema } from "./register-schema";
import { Loader } from "@/components/ui/loading";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterFormTypes>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "ashutosh.s@soniinfo.com",
      password: "ashutosh.s@soniinfo.com",
    },
  });

  async function onSubmit(data: RegisterFormTypes) {
    startTransition(() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log(data);
          resolve();
        }, 1000);
      });
    });
  }

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

export default RegisterForm;
