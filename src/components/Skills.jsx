import React from 'react'

export default function Skills({ config }) {
  const { skills } = config

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.items.map((skill, index) => (
            <div key={index} className="animate-fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-600 font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-blue-600 transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Other Technologies */}
        <div className="mt-16 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Tools & Others
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.otherTechnologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
