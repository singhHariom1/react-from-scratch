import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 Form submitted:", formData);
    alert("Form submitted! Check console.");

    // Reset after submit (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">📬 Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
