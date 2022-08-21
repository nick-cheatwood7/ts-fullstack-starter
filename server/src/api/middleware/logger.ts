import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

function getRequestDurationInMilliseconds(start: [number, number]): number {
  const NS_PER_SEC = 1e9; // Convert to nanoseconds
  const NS_TO_MS = 1e6; // Convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}

export async function logger(req: Request, res: Response, next: NextFunction) {
  const method = req.method;
  const endpoint = req.path;

  let request = "";
  switch (method) {
    case "GET":
      request = chalk.bgBlue("GET");
      break;
    case "POST":
      request = chalk.bgGreen("POST");
      break;
    case "PUT":
      request = chalk.bgYellow("PUT");
      break;
    case "DELETE":
      request = chalk.bgRed("DELETE");
      break;
    default:
      request = chalk.bgWhite("OTHER");
      break;
  }

  const start = process.hrtime();

  res.on("finish", () => {
    const durationInMilliseconds = getRequestDurationInMilliseconds(start);
    const log = `[${chalk.blue(
      new Date().toISOString()
    )}]: ${request} ${endpoint} - ${res.statusCode} ${chalk.red(
      durationInMilliseconds + "ms"
    )}`;
    console.log(log);
  });

  return next();
}
