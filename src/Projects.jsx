import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import certidappimg from "./assets/certidapp.png";
import tripimg from "./assets/tripmateimg.png";
import yoloimg from "./assets/yolo.png";
import securaimg from "./assets/secura.png";

const Projects = () => {
  const projects = [
    {
      name: "Certificate DApp",
      description:
        "The Certificate DApp is a decentralized application that allows the issuance and verification of certificates securely on the blockchain. This DApp leverages Ethereum blockchain technology and smart contracts to ensure the integrity and authenticity of issued certificates. Built using React for the frontend and Solidity for the smart contract, this project ensures that certificate data remains tamper-proof and accessible to everyone.",
      techStack: "React, Solidity, Metamask",
      imgUrl: certidappimg,
      giturl: "https://github.com/akhilkailas017/Certificate-dApp.git",
      demoUrl: "https://youtu.be/demo_certificate_dapp",
    },
    {
      name: "Tripmate Ride Sharing App",
      description:
        "A modern ride-sharing application built with the MERN stack, designed to connect drivers and passengers seamlessly. Features include user authentication, ride offering and booking, ride history, profile management, and an admin panel for managing users and complaints.",
      techStack: "React, Node.js, Express.js, MongoDB, Docker",
      imgUrl: tripimg,
      giturl: "https://github.com/akhilkailas017/Tripmate-Ride-Sharing-App.git",
      demoUrl: "https://youtu.be/demo_tripmate_app",
    },
    {
      name: "Floor Mat Detection and Classification",
      description:
        "A Python-based real-time detection and classification system using YOLOv5, focused on identifying different types of floor mats with precision.",
      techStack: "Python, Yolo-V5, Labelimg",
      imgUrl: yoloimg,
      giturl:
        "https://github.com/akhilkailas017/Object-Detection-using-Yolov5.git",
      demoUrl: "https://youtu.be/demo_floor_mat_detection",
    },
    {
      name: "Digital Passport Verification System Using Blockchain",
      description:
        "A web-based application developed with Solidity, ReactJs, and EtherJs, aiming to revolutionize passport verification by utilizing the security of blockchain technology.",
      techStack: "React, Solidity, Metamask",
      imgUrl: securaimg,
      giturl:
        "https://github.com/akhilkailas017/Digital-Passport-Verification-System-Using-Blockchain.git",
      demoUrl: "https://youtu.be/demo_digital_passport_verification",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16"
    >
      <h2 className="text-5xl font-extrabold text-[#fafafa] text-center mb-12 drop-shadow-neon">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-opacity-80 bg-gray-900 shadow-lg rounded-lg overflow-hidden p-4 drop-shadow-neon"
          >
            <LazyLoadImage
              src={project.imgUrl}
              alt={project.name}
              effect="blur"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-gray-300 mb-3">
                {project.name}
              </h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-300 mb-6">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <div className="text-sm space-y-2 mt-4">
                <a
                  href={project.giturl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline block"
                >
                  GitHub Link
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline block"
                >
                  Demo Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
  .shadow-neon {
    box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 45px #39ff14;
  }
`}</style>;
