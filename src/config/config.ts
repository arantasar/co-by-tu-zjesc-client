export const API =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";
export const userRoles = {
  ADMIN: "ADMIN",
  USER: "USER",
};
