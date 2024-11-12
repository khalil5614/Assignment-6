import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import { contactLinks } from "./../constants";

const ContactDetails = () => {
  return (
    <div
      id="contact"
      className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md"
    >
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">
        Contact Details
      </h1>

      {/* Email Section */}
      <div className="flex items-center mb-6">
        <FaEnvelope className="text-blue-600 mr-4" size={28} />
        <div>
          <p className="text-lg font-semibold">Email</p>
          <a
            href="mailto:khalil5614@gmail.com"
            className="text-blue-500 hover:underline"
          >
            khalil5614@gmail.com
          </a>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex items-center mb-6">
        <FaPhone className="text-blue-600 mr-4" size={28} />
        <div>
          <p className="text-lg font-semibold">Phone</p>
          <p className="text-gray-700">+8801719434061</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-6">
        <p className="text-lg font-semibold">Connect with Me</p>
        <div className="flex space-x-4 mt-2">
          {/* <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaMedium size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTwitter size={28} />
          </a> */}
          {contactLinks.map((el) => (
            <a
              href={el.link}
              className="mr-5 cursor-pointer mt-8 hover:scale-125"
              key={el.link}
            >
              <img className="w-10 h-10" alt="" src={el.url} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
