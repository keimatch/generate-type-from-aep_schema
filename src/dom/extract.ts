import type { SchemaType, Property } from "../type/index";

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

export const getRootProperty = (schema: HTMLElement): Property => {
  return {
    name: getSchemaLabel(schema),
    type: "Object",
  };
};

export const groupingDoms = (nodes: HTMLElement[]) => {
  // grouping
  const root = nodes.find((c) => c.className.includes("SchemaNode__root"));
  const leaves = nodes.filter((c) =>
    c.className.includes("SchemaLeaf__leaf__")
  );
  const groups = nodes.filter((c) => {
    return c !== root && !leaves.includes(c);
  }) as HTMLElement[];

  return { root, leaves, groups };
};

export const getFieldDoms = ({
  target,
  path,
  level,
}: {
  target: Element | null;
  path: string;
  level: number;
}) => {
  if (level === 1) {
    return target?.querySelectorAll(`[data-level="${level}"]`);
  } else {
    return target?.querySelectorAll(
      `[data-node-path^="${path}"][data-level="${level}"]`
    );
  }
};
