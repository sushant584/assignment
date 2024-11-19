import React, { useState } from "react";
import Editor from "./components/Editor";
import FormPreview from "./components/FormPreview"; // Correct import
import { validateJSONSchema } from "./utils/validateJson";

const App: React.FC = () => {
  const [json, setJson] = useState<string>(`{
    "formTitle": "Project Requirements Survey",
    "formDescription": "Please fill out this survey about your project needs",
    "fields": []
  }`);
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = (value: string) => {
    setJson(value);
    const validationError = validateJSONSchema(value);
    setError(validationError);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* JSON Editor */}
      <div className="w-full md:w-1/2 p-4 border-r">
        <Editor value={json} onChange={handleJsonChange} />
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>

      {/* Form Preview */}
      <div className="w-full md:w-1/2 p-4">
        {!error ? <FormPreview json={json} /> : <p className="text-gray-500">Fix JSON to preview the form.</p>}
      </div>
    </div>
  );
};

export default App;
