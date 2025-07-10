import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate the form live
  useEffect(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("📝 Form submitted:", formData);
    alert("Form submitted! Check console.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">📬 Contact Us</h2>

      <div>
        <FormInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          error={errors.name}
        />
      </div>

      <div>
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          error={errors.email}
        />
      </div>

      <FormTextarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full ${
          isFormValid
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        } text-white py-2 rounded transition-all`}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
