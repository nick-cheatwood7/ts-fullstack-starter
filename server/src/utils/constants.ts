import "dotenv-safe/config";
export const __prod__ = process.env.NODE_ENV === "production";
export const CORS_ORIGIN = "http://localhost:3000";
