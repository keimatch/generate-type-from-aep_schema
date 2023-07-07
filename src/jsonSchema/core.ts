import {
  quicktype,
  InputData,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} from "quicktype-core";

export async function jsonSchemaToType(
  targetLanguage: string,
  typeName: string,
  jsonSchemaString: string
) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: { "just-types": "true" },
    allPropertiesOptional: false,
  });
}
