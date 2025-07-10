const FormTextarea = ({ name, value, onChange, placeholder, error }) => {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
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
