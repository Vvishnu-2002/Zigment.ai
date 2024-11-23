interface ValidationMessagesProps {
    errors: Array<{ message: string }>;
  }
  
  const ValidationMessages = ({ errors }: ValidationMessagesProps) => {
    return (
      <div className="p-4 bg-red-100 text-red-700">
        <h3 className="font-bold">Validation Errors:</h3>
        <ul className="list-disc ml-6">
          {errors.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ValidationMessages;
  