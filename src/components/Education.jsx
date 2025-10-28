import React from 'react'

export default function Education({ config }) {
  const { education } = config

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md animate-fade-in-up"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6." 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="text-sm text-gray-500">
                    {edu.institution} — {edu.period}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}