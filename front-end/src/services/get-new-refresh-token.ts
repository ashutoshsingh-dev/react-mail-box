import axios from "@/lib/axios-config";
import { getAccessToken } from "../lib/token-handler";

export const getNewRefreshToken = async (): Promise<{
  token: string;
}> => {
  const { data } = await axios.post(`/refresh-token`, {
    token: getAccessToken(),
  });
  return data;
};
