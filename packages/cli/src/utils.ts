// Node
import { promisify } from "util";
import { promises } from "fs";

// Externals
import rimraf from "rimraf";
import { green, red, yellow } from "chalk";

export const { readdir, mkdir, writeFile, readFile } = promises;

export const rimrafPromise = promisify(rimraf);

export const logger = {
  success: (str: string, extra = ""): void => {
    const colored = green(str) + " " + extra;
    logger.line(colored);
  },
  error: (err: Error): void => {
    logger.line(red("Hurl ERROR"));
    console.error(err);
  },
  warn: (warning: string): void => {
    logger.line(yellow(warning), console.warn);
  },
  line: (str: string, func = console.log): void => {
    func(`\n${str}`);
  },
};
