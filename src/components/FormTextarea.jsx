const FormTextarea = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={4}
        className={`w-full border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      ></textarea>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormTextarea;
