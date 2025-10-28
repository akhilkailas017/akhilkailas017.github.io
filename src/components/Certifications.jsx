import React from 'react'

export default function Certifications({ config }) {
  const { certifications } = config

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`certificate-card bg-white rounded-xl overflow-hidden shadow-md border-l-4 border-accent animate-fade-in-up ${
                index === 1 ? 'delay-200' : ''
              }`}
            >
              <a href={cert.link} target="_blank" rel="noreferrer" className="block">
                <img 
                  data-src={cert.image} 
                  className="lazyload w-full certificate-image" 
                  alt={cert.title} 
                  width="600" 
                  height="400" 
                />
              </a>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-accent" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <p className="text-gray-500">{cert.year}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-accent/10 text-accent text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center text-accent font-medium hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}