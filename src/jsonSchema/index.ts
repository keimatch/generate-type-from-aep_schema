import fs from "fs";
import type { SchemaNode, SchemaType } from "../type/schema";
import { JSONSchema } from "json-schema-to-typescript";
import data from "../../input/data.json" assert { type: "json" };

const toJsonSchemaType: { [k in SchemaType]: any } = {
  String: "string",
  Boolean: "boolean",
  Byte: "string",
  Short: "number",
  Double: "number",
  Long: "bigint",
  Int64: "number",
  Integer: "number",
  Date: "string",
  Time: "string",
  DateTime: "string",
  Datetime: "string",
  Datetimenotz: "string",
  Timespan: "string",
  Memo: "string",
  Blob: "string",
  Object: "object",
  "array[]": "null",
  "not specified": "null",
} as const;

Object.hasOwn(toJsonSchemaType, "");

const makeObject = (schema: SchemaNode) => {
  const leaves = schema.leaves;
  const group = schema.groups;
  const array = schema.array;
  const props: JSONSchema["properties"] = {};
  leaves?.forEach((leaf) => {
    props[leaf.name] = {
      type: Object.hasOwn(toJsonSchemaType, leaf.type)
        ? toJsonSchemaType[leaf.type]
        : "null",
    };
  });
  group?.forEach((obj) => {
    props[obj.name] = makeObject(obj);
  });
  array?.forEach((a) => {
    props[a.name] = {
      type: "array",
      items: makeObject(a),
    };
  });
  const res: JSONSchema = {
    type: "object",
    properties: props,
  };
  return res;
};

const schemaToJsonSchema = (schema: SchemaNode): JSONSchema => {
  return makeObject(schema);
};

const main = async () => {
  const testData = data as unknown as SchemaNode;
  const out = schemaToJsonSchema(testData);

  fs.writeFile("./out/data.json", JSON.stringify(out), "utf-8", () => {});
};

main();
