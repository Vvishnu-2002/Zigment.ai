import React, { useState } from 'react';
import Editor from '../components/Editor';
import FormGenerator from '../components/FormGenerator';

const Home = () => {
  const [schema, setSchema] = useState({
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [],
  });

  const handleSchemaChange = (newSchema: string) => {
    try {
      const parsedSchema = JSON.parse(newSchema);
      setSchema(parsedSchema);
    } catch (error) {
      console.error("Invalid JSON");
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="border-r">
        <Editor onSchemaChange={handleSchemaChange} />
      </div>
      <div className="p-4">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default Home;
