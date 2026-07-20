import pino from "pino";
import env from "./env.js";

const logger = pino({
  level: "info",
  transport:
    env.NODE_ENV === "development"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined, // if NODE_ENV is not development, don't use pino-pretty
});

export default logger;