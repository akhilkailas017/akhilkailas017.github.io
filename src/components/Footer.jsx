import React from 'react'

export default function Footer({ config }) {
  const { footer } = config

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>{footer.copyright}</p>
        <p className="mt-2 text-gray-400">{footer.builtWith}</p>
      </div>
    </footer>
  )
}