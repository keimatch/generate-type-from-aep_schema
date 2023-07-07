import type { SchemaType, Property } from "../type/schema";

export const getSchemaLabel = (fieldDom: HTMLElement) => {
  const schemaLabelNode = fieldDom.querySelector(
    '[class ^= "SchemaNode__label__"]'
  );
  return schemaLabelNode?.textContent || "root";
};

export const getSchemaName = (fieldDom: HTMLElement) => {
  const schemaNameNode = fieldDom.querySelector(
    '[class ^= "SchemaNode__name__"]'
  );
  return schemaNameNode?.textContent || "not specified";
};

export const getSchemaType = (fieldDom: HTMLElement): SchemaType => {
  const schemaTypeNode = fieldDom.querySelector(
    '[class ^= "SchemaNode__type__"'
  );
  return (schemaTypeNode?.textContent as SchemaType) || "not specified";
};

export const getProperty = (schema: HTMLElement): Property => {
  return {
    name: getSchemaName(schema),
    type: getSchemaType(schema),
  };
};
