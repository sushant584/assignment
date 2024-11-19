import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPreviewProps {
  json: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ json }) => {
  const schema = JSON.parse(json);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">{schema.formTitle}</h1>
      <p className="mb-4">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {schema.fields.map((field: any) => (
          <div key={field.id} className="mb-4">
            <label className="block font-semibold mb-1">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                {...register(field.id, { required: field.required })}
                placeholder={field.placeholder}
                className="w-full p-2 border"
              />
            ) : field.type === "select" ? (
              <select
                {...register(field.id, { required: field.required })}
                className="w-full p-2 border"
              >
                {field.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              field.options.map((option: any) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                  />
                  <span className="ml-2">{option.label}</span>
                </div>
              ))
            ) : (
              <input
                type={field.type}
                {...register(field.id, { required: field.required })}
                placeholder={field.placeholder}
                className="w-full p-2 border"
              />
            )}
            {errors[field.id] && (
              <span className="text-red-500">{field.validation?.message || "This field is required"}</span>
            )}
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
