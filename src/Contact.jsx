import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <section
      id="contact"
      className=" py-16 px-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12">
        Contact Me
      </h2>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-3xl" />
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:akhilkailas2001@gmail.com"
              className="text-white hover:underline font-semibold"
            >
              akhilkailas2001@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-3xl" />
          <p className="text-lg">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/akhilkailas017"
              className="text-white hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/akhilkailas017
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FaGithub className="text-3xl" />
          <p className="text-lg">
            GitHub:{" "}
            <a
              href="https://github.com/akhilkailas017"
              className="text-white hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/akhilkailas017
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
