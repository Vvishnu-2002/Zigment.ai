// src/utils/validation.ts

import Ajv, { JSONSchemaType } from "ajv";

// Initialize AJV (Another JSON Schema Validator)
const ajv = new Ajv();

// Define a function to validate the JSON schema
export const validateJSONSchema = async (schema: JSONSchemaType<object>): Promise<boolean> => {
  try {
    // Compile the schema into a validation function
    const validate = ajv.compile(schema);

    // Validate the schema and await the result if it's a Promise
    const isValid = await validate(schema);

    // Return true if schema is valid, otherwise false
    return isValid;
  } catch (error) {
    // Handle any errors that occur during validation
    console.error("Error compiling schema:", error);
    return false;  // Return false if validation fails
  }
};
