import React from 'react'

export default function Skills({ config }) {
  const { skills } = config

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`animate-fade-in-up ${categoryIndex > 0 ? 'delay-100' : ''}`}
            >
              <h3 className={`text-2xl font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-${category.color} font-medium`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress bg-${category.color}`} 
                        data-width={`${skill.level}%`} 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-semibold mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.otherTechnologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}