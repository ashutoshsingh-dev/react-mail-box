import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import axios from "@/lib/axios-config";
import { LoginFormTypes } from "../login-schema";
import { useAuth } from "@/context/auth-context";

export interface LoginAPIResponseSchema {
  user: User;
  token: string;
}

export interface User {
  id: number;
  username: string;
}

interface ErrorResponse {
  message: string;
}

export const useLogin = () => {
  const { setCredentials } = useAuth();

  return useMutation<
    LoginAPIResponseSchema,
    AxiosError<ErrorResponse>,
    LoginFormTypes
  >({
    mutationFn: async (user) => {
      const { data } = await axios.post("/login", { user });
      return data;
    },
    onSuccess: (data) => {
      setCredentials({ accessToken: data.token });
    },
  });
};
