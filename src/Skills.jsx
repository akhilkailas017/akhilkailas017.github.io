import jslogo from './assets/javascript.png';
import htmllogo from './assets/html.png';
import csslogo from './assets/css.png';
import bootstraplogo from './assets/bootstrap.png';
import tailwindlogo from './assets/tailwind.png';
import reactlogo from './assets/react.png';
import expresslogo from './assets/express.png';
import nodelogo from './assets/node.png';
import mongologo from './assets/MongoDB1.jpg';
import dockerlogo from './assets/docker.png';
import soliditylogo from './assets/solidity.png';

const Skills = () => {
  const skills = [
    { name: "HTML", imgUrl: htmllogo },
    { name: "CSS", imgUrl: csslogo },
    { name: "Bootstrap", imgUrl: bootstraplogo },
    { name: "Tailwind CSS", imgUrl: tailwindlogo },
    { name: "JavaScript", imgUrl: jslogo },
    { name: "React Js", imgUrl: reactlogo },
    { name: "Node Js", imgUrl: nodelogo },
    { name: "Express Js", imgUrl: expresslogo },
    { name: "MongoDB", imgUrl: mongologo },
    { name: "Docker", imgUrl: dockerlogo },
    { name: "Solidity", imgUrl: soliditylogo },
  ];

  return (
    <section id="skills" className=" bg-gradient-to-b from-blue-600 to-purple-700 py-16">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-36 h-36 m-6 transform transition duration-500 hover:scale-110 hover:shadow-2xl flex flex-col items-center justify-center bg-white rounded-full shadow-lg p-4"
          >
            <img src={skill.imgUrl} alt={skill.name} className="w-20 h-20 object-contain" loading="lazy" />
            <h4 className="text-center mt-4 text-gray-800 font-semibold">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
