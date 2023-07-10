import fs from "fs";
import type { SchemaNode } from "../type/schema";
import data from "../../input/data.json" assert { type: "json" };
import { schemaToJsonSchema } from "./conversion";

const main = async () => {
  const testData = data as unknown as SchemaNode;
  const out = schemaToJsonSchema(testData);

  fs.writeFile("./out/data.json", JSON.stringify(out), "utf-8", () => {});
};

main();
