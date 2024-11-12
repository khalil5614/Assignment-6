import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
        Contact Me
      </h1>
      {submitted ? (
        <p className="text-center text-green-600 text-lg">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactMe;
