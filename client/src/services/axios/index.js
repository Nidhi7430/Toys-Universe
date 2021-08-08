import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${window.location.origin}/toys_universe`
      : "http://localhost:5000/toys_universe",
});
