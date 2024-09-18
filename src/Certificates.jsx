import debcertimg from './assets/Developer-Essentials-for-Blockchain.jpg';
import debcertpdf from './assets/Developer-Essentials-for-Blockchain.pdf';
import bfpcertimg from './assets/blockchain-foundation-program.jpg';
import bfpcertpdf from './assets/blockchain-foundation-program.pdf';
import pdsimg from './assets/python-data-structures.jpg';
import pdspdf from './assets/python-data-structures.pdf';
import pcertpdf from './assets/python.pdf';
import pcertimg from './assets/pythoncert.jpg';
import itsimg from './assets/IT-Security-Defense-against-the-digital-dark-arts.jpg';
import itspdf from './assets/IT-Security-Defense-against-the-digital-dark-arts.pdf';
import hcbimg from './assets/HTML-and-CSS-for-Beginners-From-Basic-to-Advance-udemy.jpg';
import hcbpdf from './assets/HTML-and-CSS-for-Beginners-From-Basic-to-Advance-udemy.pdf';
import cbjimg from './assets/CSS-Bootstrap-JavaScript-PHP-Full-Stack-Crash-Course.jpg';
import cbjpdf from './assets/CSS-Bootstrap-JavaScript-PHP-Full-Stack-Crash-Course.pdf';
import bmwimg from './assets/buildmyweb1.jpg';
import bmwpdf from './assets/buildmyweb1.pdf';
import aiimg from './assets/ai.jpg';
import aipdf from './assets/ai.pdf';

const Certificates = () => {
  const certificates = [
    { name: "Developer Essentials for Blockchain", imgUrl: debcertimg, pdfUrl: debcertpdf },
    { name: "Blockchain Foundation Program", imgUrl: bfpcertimg, pdfUrl: bfpcertpdf },
    { name: "Python Data Structures", imgUrl: pdsimg, pdfUrl: pdspdf },
    { name: "Programming for Everybody (Getting Started with Python)", imgUrl: pcertimg, pdfUrl: pcertpdf },
    { name: "IT Security: Defense against the digital dark arts", imgUrl: itsimg, pdfUrl: itspdf },
    { name: "HTML and CSS for Beginners From Basic to Advance Udemy", imgUrl: hcbimg, pdfUrl: hcbpdf },
    { name: "CSS Bootstrap JavaScript PHP Full Stack Crash Course", imgUrl: cbjimg, pdfUrl: cbjpdf },
    { name: "Buildmyweb", imgUrl: bmwimg, pdfUrl: bmwpdf },
    { name: "AI for Everyone", imgUrl: aiimg, pdfUrl: aipdf },
  ];

  return (
    <section id="certificates" className=" bg-gradient-to-b from-indigo-600 to-purple-700 py-16">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-500 hover:scale-105"
          >
            <img src={cert.imgUrl} alt={cert.name} className="w-full h-52 object-cover" loading="lazy" />
            <div className="p-6">
              <h4 className="text-xl text-gray-800 font-semibold mb-4">{cert.name}</h4>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 font-medium"
                download
              >
                View & Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
