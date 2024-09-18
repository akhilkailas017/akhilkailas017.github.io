import profilephoto from './assets/akhil.jpg';

const About = () => {
  return (
    <section id="about" className=" pt-16 md:pt-24 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:py-16">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={profilephoto}
            alt="Akhil Kailas"
            loading="lazy"
            className="w-48 h-48 md:w-64 md:h-64  shadow-2xl mx-auto border-4 border-white"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left px-4 md:px-8">
          <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">About Me</h2>
          <p className="mt-4 text-lg leading-relaxed text-white bg-opacity-70 bg-black px-4 py-2 rounded-lg shadow-md">
            I am <span className="font-semibold text-yellow-300">Akhil Kailas</span>, a passionate and dedicated entry-level professional specializing in both full-stack development using the <span className="text-yellow-300">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) and the dynamic field of <span className="text-yellow-300">blockchain technology</span>. With a strong academic foundation in Computer Science and Engineering, I bring a relentless drive to learn, innovate, and implement cutting-edge solutions.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white bg-opacity-70 bg-black px-4 py-2 rounded-lg shadow-md">
            My expertise lies in building responsive, scalable, and user-centric web applications. I am particularly fascinated by the intersection of blockchain and web development, aiming to explore <span className="font-semibold text-yellow-300">decentralized applications (dApps)</span> and smart contracts. I am highly motivated to collaborate on projects that push the boundaries of technology and creativity, continuously striving to adapt and grow in this ever-evolving landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
