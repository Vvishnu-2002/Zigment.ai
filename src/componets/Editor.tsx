import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ onSchemaChange }: { onSchemaChange: (schema: string) => void }) => {
  const [editorValue, setEditorValue] = useState(
    JSON.stringify(
      {
        formTitle: "Project Requirements Survey",
        formDescription: "Please fill out this survey about your project needs",
        fields: [
          {
            id: "name",
            type: "text",
            label: "Full Name",
            required: true,
            placeholder: "Enter your full name",
          },
          {
            id: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "you@example.com",
            validation: {
              pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
              message: "Please enter a valid email address",
            },
          },
          {
            id: "companySize",
            type: "select",
            label: "Company Size",
            required: true,
            options: [
              { value: "1-50", label: "1-50 employees" },
              { value: "51-200", label: "51-200 employees" },
              { value: "201-1000", label: "201-1000 employees" },
              { value: "1000+", label: "1000+ employees" },
            ],
          },
        ],
      },
      null,
      2
    )
  );

  const handleEditorChange = (value: string | undefined) => {
    setEditorValue(value || '');
    onSchemaChange(value || '');
  };

  return (
    <div style={{ height: '100%' }}>
      <MonacoEditor
        language="json"
        value={editorValue}
        onChange={handleEditorChange}
        options={{ theme: 'vs-dark', minimap: { enabled: false } }}
      />
    </div>
  );
};

export default Editor;
