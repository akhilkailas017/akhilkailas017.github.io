const About = () => {
  return (
    <section id="about" className="pt-16 md:pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center md:text-left px-4 md:px-8">
          <h2 className="text-5xl font-extrabold mb-6 text-[#fafafa] drop-shadow-neon text-center">
            {"About Me"}
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed font-mono text-gray-300 bg-opacity-80 bg-gray-900 px-6 py-6 rounded-xl shadow-lg border border-[#fafafa]">
            Hello, I am an aspiring <span className="text-green-300 font-bold">Blockchain Developer</span> and 
            <span className="text-blue-300 font-bold"> Full Stack Developer</span>. My expertise lies in designing 
            innovative decentralized applications and exploring the transformative potential of 
            <span className="text-yellow-300"> blockchain technology</span>, particularly with 
            <span className="text-yellow-300"> Hyperledger Fabric</span>. I also have a strong foundation in 
            <span className="text-purple-300"> MERN stack</span> (MongoDB, Express.js, React.js, Node.js) 
            development, allowing me to build responsive and scalable web applications.
            <br />
            <br />
            My technical toolkit includes <span className="text-pink-300">HTML</span>, 
            <span className="text-pink-300"> CSS</span>, 
            <span className="text-pink-300"> JavaScript</span>, 
            <span className="text-purple-300"> Tailwind CSS</span>, 
            <span className="text-blue-300"> ReactJS</span>, 
            <span className="text-blue-300"> ExpressJS</span>, 
            <span className="text-blue-300"> NodeJS</span>, and 
            <span className="text-green-300"> MongoDB</span>. I leverage tools like 
            <span className="text-green-300"> Docker</span> for containerized development and 
            <span className="text-purple-300"> GitHub</span> for version control. 
            <br />
            <br />
            Driven by a commitment to continuous learning, I am excited to contribute to projects that 
            promote <span className="text-yellow-300">efficiency</span>, 
            <span className="text-yellow-300"> transparency</span>, and 
            <span className="text-yellow-300"> innovation</span> across industries. My goal is to collaborate 
            on cutting-edge solutions that bridge the gap between traditional and decentralized systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

<style jsx>{`
  .shadow-neon {
    box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 45px #39ff14;
  }
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
`}</style>
