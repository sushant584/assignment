import React from "react";
import MonacoEditor from "react-monaco-editor";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <MonacoEditor
      height="90vh"
      language="json"
      theme="vs-dark"
      value={value}
      options={{ automaticLayout: true }}
      onChange={(newValue) => onChange(newValue)}
    />
  );
};

export default Editor;
