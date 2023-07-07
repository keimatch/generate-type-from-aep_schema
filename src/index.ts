import type { SchemaNode } from "./types";
import { getProperty, getSchemaName } from "./extract";

const tree = document.querySelector('[class ^= "SchemaTree__tree"]');

const toggle = (element: HTMLElement) => {
  const button = element.querySelector(
    '[class ^= "SchemaNode__symbol__"]'
  ) as HTMLElement;
  button?.click();
};

const open = (element: HTMLElement) => {
  if (element.ariaExpanded === "false") toggle(element);
};

const close = (element: HTMLElement) => {
  if (element.ariaExpanded === "true") toggle(element);
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
  if (level === 1) {
    return tree?.querySelectorAll(`[data-level="${level}"]`);
  } else {
    return tree?.querySelectorAll(
      `[data-node-path^="${path}"][data-level="${level}"]`
    );
  }
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
  const children = getFieldDoms({
    path,
    level,
  });

  const property = getProperty(group);
  const abstract: SchemaNode = {
    ...property,
    leaves: [],
    groups: [],
    array: [],
    path,
  };

  children?.forEach((child) => {
    const name = getSchemaName(child as HTMLElement);
    const nextPath = path ? path + "." + name : name;
    const walked = walk({
      group: child as HTMLElement,
      path: nextPath,
      level: level + 1,
    });

    if (walked.type === "Object") {
      abstract.groups?.push(walked);
    } else if (walked.type === "array[]") {
      abstract.array?.push(walked);
    } else {
      abstract.leaves?.push(walked);
    }
  });
  close(group);

  return abstract;
};

const main = () => {
  if (!tree) {
    console.log(
      "Dom tree is not found. Click any dom element with dev-console"
    );
    return;
  }
  const elementList = [...tree.childNodes] as HTMLElement[];
  const { root, leaves, groups } = groupingDoms(elementList);
  if (!root) {
    console.log("Root is not found");
    return;
  }
  console.time();
  console.log("enter");
  const res = walk({ group: root, path: "", level: 1 });
  console.log("res", res);
  console.timeEnd();
};

main();
