"use strict";
const main = () => {
    const tree = document.querySelector('[class ^= "SchemaTree__tree"]');
    if (!tree)
        return;
    const children = [...tree.childNodes];
    // grouping
    const root = children.find((c) => c.className.includes("SchemaNode__root"));
    const leaves = children.filter((c) => c.className.includes("SchemaLeaf__leaf__"));
    const objL1 = children.filter((c) => {
        return c !== root && !leaves.includes(c);
    });
};
const expand = (element) => {
    const button = element.querySelector('[class ^= "SchemaNode__symbol__"]');
    button?.click();
};
