const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
