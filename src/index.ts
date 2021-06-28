import fs from "fs/promises";
import glob from "globby";
import path from "path";

import { Directory } from "./directory";
import { parseYAML } from "./parser";

const BLOCK_CLASSES = ["primary", "second", "minor"];
const PATH_PREFIX = path.join(__dirname, "../blocks");

const loadBlocks = async (type: string): Promise<Directory> => {
  const files = await glob(`${PATH_PREFIX}/${type}/**/*.yml`);
  const fileContents = await Promise.all(
    files.map((fileName) => fs.readFile(fileName, "utf8"))
  );

  const verifier = new Directory();
  files.forEach((filename, i) =>
    verifier.addBlock(
      path.basename(filename).replace(/\.yml$/, ""),
      parseYAML(fileContents[i])
    )
  );
  return verifier;
};

const initDirectories = async (): Promise<Record<string, Directory>> => {
  const directories = await Promise.all(BLOCK_CLASSES.map(loadBlocks));
  return Object.fromEntries(
    BLOCK_CLASSES.map((prefix, i) => [prefix, directories[i]])
  );
};

export { BLOCK_CLASSES, initDirectories };