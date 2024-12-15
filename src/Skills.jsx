import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16">
      <h2 className="text-5xl font-extrabold text-[#fafafa] text-center mb-12 drop-shadow-neon">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-36 h-36 m-6 flex flex-col items-center justify-center bg-opacity-80 bg-gray-900 rounded-full shadow-lg p-4 drop-shadow-neon"
          >
            <LazyLoadImage
              src={skill.imgUrl}
              alt={skill.name}
              effect="blur"
              className="w-20 h-20 object-contain"
            />
            <h4 className="text-center mt-4 text-gray-300 font-semibold">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
  .shadow-neon {
    box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 45px #39ff14;
  }
`}</style>
