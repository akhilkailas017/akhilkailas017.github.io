import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
    >
      <h2 className="text-5xl font-extrabold text-center mb-12 text-[#fafafa] drop-shadow-neon">
        Contact Me
      </h2>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-3xl text-[#fafafa]" />
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:akhilkailas2001@gmail.com"
              className="text-white font-semibold"
            >
              akhilkailas2001@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-3xl text-[#fafafa]" />
          <p className="text-lg">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/akhilkailas017"
              className="text-white font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/akhilkailas017
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FaGithub className="text-3xl text-[#fafafa]" />
          <p className="text-lg">
            GitHub:{" "}
            <a
              href="https://github.com/akhilkailas017"
              className="text-white font-semibold"
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

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
`}</style>
