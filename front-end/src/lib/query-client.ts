import {
  mutationErrorHandler,
  queryErrorHandler,
} from "@/services/error-handler";
import { QueryClient, MutationCache, QueryCache } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
  mutationCache: new MutationCache({
    onError: mutationErrorHandler,
  }),
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});

export default queryClient;
