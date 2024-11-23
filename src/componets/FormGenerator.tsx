import React from 'react';

const FormGenerator = ({ schema }: { schema: any }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const output: Record<string, any> = {};
    formData.forEach((value, key) => {
      output[key] = value;
    });

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(output),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
      <p className="text-gray-600">{schema.formDescription}</p>

      {schema.fields.map((field: any) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === 'text' || field.type === 'email' ? (
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              pattern={field.validation?.pattern}
              className="mt-1 block w-full border rounded-md p-2"
            />
          ) : field.type === 'select' ? (
            <select
              id={field.id}
              name={field.id}
              required={field.required}
              className="mt-1 block w-full border rounded-md p-2"
            >
              {field.options.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
