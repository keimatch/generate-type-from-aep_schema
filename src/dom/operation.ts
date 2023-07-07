const toggle = (element: HTMLElement) => {
  const button = element.querySelector(
    '[class ^= "SchemaNode__symbol__"]'
  ) as HTMLElement;
  button?.click();
};

export const open = (element: HTMLElement) => {
  if (element.ariaExpanded === "false") toggle(element);
};

export const close = (element: HTMLElement) => {
  if (element.ariaExpanded === "true") toggle(element);
};
