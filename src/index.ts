import { groupingDoms } from "./dom/extract";
import { walk } from "./dom/walk";

const main = () => {
  const tree = document.querySelector('[class ^= "SchemaTree__tree"]');
  if (!tree) {
    console.log(
      "Dom tree is not found. Click any dom element with dev-console"
    );
    return;
  }
  const elementList = [...tree.childNodes] as HTMLElement[];
  const { root } = groupingDoms(elementList);
  if (!root) {
    console.log("Root is not found");
    return;
  }
  console.time();
  console.log("enter");
  const schemaTree = walk({ root: tree, group: root, path: "", level: 1 });
  console.log("Copy this object by right-clicking ▶: ", schemaTree);
  console.timeEnd();
  console.log("Wait until the react process is complete.");
};

main();
