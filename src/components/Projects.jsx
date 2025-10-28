import React from 'react'

export default function Projects({ config }) {
  const { projects } = config

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card bg-white rounded-xl overflow-hidden shadow-md animate-fade-in-up ${
                index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''
              }`}
            >
              <img 
                data-src={project.image} 
                className="lazyload w-full h-48 object-cover" 
                alt={project.title} 
                width="600" 
                height="400" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`bg-${project.color}/10 text-${project.color} text-xs px-2 py-1 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-primary font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-300">
          <a href="#" className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}