import { ChangeEvent } from "react";


interface InputPassProps {
  label: string;
  inputName: string;
  placeholder?: string;
  value?: string;
  id: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function InputPass({
  label,
  inputName,
  placeholder,
  value,
  id,
  onChange,
  error,
}: InputPassProps) {
  return (
    <div className="flex flex-col w-full mb-3">
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="password"
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-md bg-white px-3 py-2 outline-none transition-all duration-200 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
