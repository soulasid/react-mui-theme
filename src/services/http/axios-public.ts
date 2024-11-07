import axios, { AxiosResponse } from "axios";
import * as Auth from "@models/auth/APIDataSource";

import { API_URL } from "@/utils/api";
import { getRefreshToken } from "../cache";
const baseInstance = axios.create({
  baseURL: API_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  responseType: "json",
});
axios.defaults.headers.post["Content-Type"] = "application/json";
export const getNewRefreshToken = async () => {
  const response: AxiosResponse<Auth.RefreshTokenDataRes> =
    await baseInstance.post(
      "/v1/admin/auth/token",
      {
        token: getRefreshToken(),
      },
      {
        headers: {
          Authorization: "",
        },
      }
    );
  return response.data;
};
export default baseInstance;
