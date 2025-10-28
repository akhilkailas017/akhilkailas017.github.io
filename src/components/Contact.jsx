import React, { useState } from 'react'

export default function Contact({ config }) {
  const { contact } = config
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    // simple simulated send
    try {
      await new Promise((r) => setTimeout(r, 500))
      setStatus('SENT')
      e.target.reset()
    } catch {
      setStatus('ERROR')
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-white p-6 rounded-xl animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-4">{contact.heading}</h3>
            <p className="text-white/90">{contact.description}</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>Email: {contact.email}</li>
              <li>Location: {contact.location}</li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-100">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input 
                  name="email" 
                  id="email" 
                  type="email" 
                  required 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  placeholder="Hello John, I'd like to discuss."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full"
              >
                Send Message
              </button>
              {status === 'SENT' && <div className="mt-3 text-green-600">Message sent — thank you!</div>}
              {status === 'ERROR' && <div className="mt-3 text-red-600">Something went wrong. Try email.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}