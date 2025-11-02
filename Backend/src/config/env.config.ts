import { getKey } from "../utility/get-env";

export const ENV = {
    NODE_ENV: getKey("NODE_ENV","develpoment"),
    PORT:getKey("PORT", "8000"),
    MONGO_URI:getKey("MONGO_URI"),
    JWT_SECRET: getKey("JWT_SECRET", "secret_jwt"),
    JWT_EXPIRES_IN: getKey("JWT_EXPIRES_IN", "15m"),
    FRONTEND_ORIGIN: getKey("FRONTEND_ORIGIN", "http://localhost:5173"),

    CLOUDINARY_CLOUD_NAME: getKey("CLOUDINARY_CLOUD_NAME"),
    CLOUDINARY_API_KEY: getKey("CLOUDINARY_API_KEY"),
    CLOUDINARY_API_SECRET: getKey("CLOUDINARY_API_SECRET"),
} as const ;