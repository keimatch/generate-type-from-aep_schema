export type PureSchemaType =
  | "String"
  | "Boolean"
  | "Byte"
  | "Short"
  | "Double"
  | "Long"
  | "Int64"
  | "Date"
  | "Time"
  | "Datetime"
  | "Datetimenotz"
  | "Timespan"
  | "Memo"
  | "Blob"
  | "Object"
  | "array[]"
  | "not specified";

export type UiSchemaType = "Integer" | "DateTime";
export type SchemaType = PureSchemaType | UiSchemaType;

export type SchemaNode = {
  name: string;
  path: string;
  type: SchemaType;
  value?: string;
  leaves?: SchemaNode[];
  groups?: SchemaNode[];
  array?: SchemaNode[];
};

export type Property = {
  name: string;
  type: SchemaType;
};
