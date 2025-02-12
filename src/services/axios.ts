import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "nextauth.token": token } = parseCookies(ctx);

  const instance = axios.create({
    baseURL: "https://laralizhosp-backend.onrender.com/",
  });

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return instance;
}
