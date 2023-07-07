import type { SchemaNode, SchemaType, Property } from "./types";
import {
  getProperty,
  getRootProperty,
  getSchemaLabel,
  getSchemaName,
  getSchemaType,
} from "./extract";

const tree = document.querySelector('[class ^= "SchemaTree__tree"]');

const toggle = (element: HTMLElement) => {
  const button = element.querySelector(
    '[class ^= "SchemaNode__symbol__"]'
  ) as HTMLElement;
  button?.click();
};

const open = (element: HTMLElement) => {
  toggle(element);
};

const close = (element: HTMLElement) => {
  toggle(element);
};

const isLeaf = () => {
  return true;
};

const groupingDoms = (nodes: HTMLElement[]) => {
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

const getFieldDoms = ({ path, level }: { path: string; level: number }) => {
  const elem = tree?.querySelectorAll(
    `[data-node-path^="${path}"][data-level="${level}"]`
  );
  return elem;
};

const walk = ({
  group,
  path,
  level,
}: {
  group: HTMLElement;
  path: string;
  level: number;
}) => {
  open(group);
  const parentPath = getSchemaName(group);
  const children = getFieldDoms({ path: parentPath, level });
  console.log("level", level);
  console.log("children", children);
};

const enter = ({
  schema,
  groups,
  leaves,
  n = 1,
}: {
  schema: HTMLElement;
  groups: HTMLElement[];
  leaves: HTMLElement[];
  n?: number;
}): SchemaNode => {
  const property = getRootProperty(schema);
  const leafProps = leaves?.map((leaf) => getProperty(leaf));

  const topGroup = groups[0];
  walk({ group: topGroup, path: "", level: n + 1 });

  return { ...property, leaves: leafProps };
};

const main = () => {
  if (!tree) return;
  const elementList = [...tree.childNodes] as HTMLElement[];
  const { root, leaves, groups } = groupingDoms(elementList);
  if (!root) return;
  const res = enter({ schema: root, leaves, groups });
  console.log("res", res);
};

main();
