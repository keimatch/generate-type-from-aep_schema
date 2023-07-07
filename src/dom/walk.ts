import type { SchemaNode } from "../type/index";
import { getFieldDoms, getProperty, getSchemaName } from "./extract";
import { close, open } from "./operation";

export const walk = ({
  root,
  group,
  path,
  level,
}: {
  root: Element;
  group: HTMLElement;
  path: string;
  level: number;
}) => {
  open(group);
  const children = getFieldDoms({
    target: root,
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
      root,
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
