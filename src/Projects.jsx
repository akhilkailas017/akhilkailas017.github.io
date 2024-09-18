import certidappimg from './assets/certidapp.png'
import tripimg from './assets/tripmateimg.png'
import yoloimg from './assets/yolo.png'
import securaimg from './assets/secura.png'
const Projects = () => {
  const projects = [
    {
      name: "Certificate DApp",
      description:
        "The Certificate DApp is a decentralized application that allows the issuance and verification of certificates securely on the blockchain. This DApp leverages Ethereum blockchain technology and smart contracts to ensure the integrity and authenticity of issued certificates. Built using React for the frontend and Solidity for the smart contract, this project ensures that certificate data remains tamper-proof and accessible to everyone.",
      techStack: "React, Solidity , Metamask",
      imgUrl: certidappimg,
      giturl:'https://github.com/akhilkailas017/Certificate-dApp.git'
    },
    {
      name: "Tripmate Ride Sharing App",
      description:
        "A modern ride-sharing application built with the MERN stack, designed to connect drivers and passengers seamlessly. Features include user authentication, ride offering and booking, ride history, profile management, and an admin panel for managing users and complaints.",
      techStack: "React, Node.js, Express.js, MongoDB, Docker",
      imgUrl: tripimg,
      giturl:'https://github.com/akhilkailas017/Tripmate-Ride-Sharing-App.git'
    },
    {
      name: "Floor Mat Detection and Classification",
      description:
        "A Python-based real-time detection and classification system using YOLOv5, focused on identifying different types of floor mats with precision.",
      techStack: "Python, Yolo-V5, Labelimg",
      imgUrl: yoloimg,
      giturl:'https://github.com/akhilkailas017/Object-Detection-using-Yolov5.git'
    },
    {
      name: "Digital Passport Verification System Using Blockchain",
      description:
        "A web-based application developed with Solidity, ReactJs, and EtherJs, aiming to revolutionize passport verification by utilizing the security of blockchain technology.",
      techStack: "React, Solidity , Metamask",
      imgUrl: securaimg,
      giturl:'https://github.com/akhilkailas017/Digital-Passport-Verification-System-Using-Blockchain.git'
    },
    
    
  ];

  return (
    <section
      id="projects"
      className=" bg-gradient-to-r from-blue-600 to-purple-700 py-16 px-4"
    >
      <h2 className="text-5xl font-extrabold text-white text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-500 hover:scale-105"
          >
            <img
              src={project.imgUrl}
              alt={project.name}
              loading="lazy"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <a href={project.giturl}>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.name}
              </h4>
              </a>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
