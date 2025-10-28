import React from 'react'

export default function Experience({ config }) {
  const { experience } = config

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="max-w-4xl mx-auto timeline">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-fade-in-up ${
                index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''
              }`}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-primary font-medium">{job.company}</p>
              <p className="text-gray-500 mb-2">{job.period}</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}