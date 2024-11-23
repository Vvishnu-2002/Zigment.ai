export interface Field {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    validation?: { pattern: string; message: string };
  }
  
  export interface Schema {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  
