import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
import blockhackpdf from './assets/blockhack2024.pdf';
import blockhackimg from './assets/blockhack2024.jpg';
import certifiedBlockchainAssociatepdf from './assets/CertifiedBlockchainAssociate.pdf';
import certifiedBlockchainAssociateimg from './assets/CertifiedBlockchainAssociate.jpg';
import certifiedHyperledgerFabricDeveloperimg from './assets/certifiedHyperledgerFabricDeveloper.jpg';
import certifiedHyperledgerFabricDeveloperpdf from './assets/certifiedHyperledgerFabricDeveloper.pdf';
import ethereumFundamentalsimg from './assets/ethereumFundamentals.jpg';
import ethereumFundamentalspdf from './assets/ethereumFundamentals.pdf';
import devconimg from './assets/Devcon.jpg';
import devconpdf from './assets/Devcon.pdf';

const Certificates = () => {
  const certificates = [
    { name: "Certified HyperledgerFabric Developer", imgUrl: certifiedHyperledgerFabricDeveloperimg, pdfUrl: certifiedHyperledgerFabricDeveloperpdf },
    { name: "Developer Essentials for Blockchain", imgUrl: debcertimg, pdfUrl: debcertpdf },
    { name: "Certified Blockchain Associate", imgUrl: certifiedBlockchainAssociateimg, pdfUrl: certifiedBlockchainAssociatepdf },
    { name: "Ethereum Fundamentals", imgUrl: ethereumFundamentalsimg, pdfUrl: ethereumFundamentalspdf },
    { name: "Blockchain Foundation Program", imgUrl: bfpcertimg, pdfUrl: bfpcertpdf },
    { name: "Block Hack 2024", imgUrl: blockhackimg, pdfUrl: blockhackpdf },
    { name: "Road to Devcon", imgUrl: devconimg, pdfUrl: devconpdf },
    { name: "Python Data Structures", imgUrl: pdsimg, pdfUrl: pdspdf },
    { name: "Programming for Everybody (Getting Started with Python)", imgUrl: pcertimg, pdfUrl: pcertpdf },
    { name: "Buildmyweb", imgUrl: bmwimg, pdfUrl: bmwpdf },
    { name: "AI for Everyone", imgUrl: aiimg, pdfUrl: aipdf },
    { name: "IT Security: Defense against the digital dark arts", imgUrl: itsimg, pdfUrl: itspdf },
    { name: "HTML and CSS for Beginners From Basic to Advance Udemy", imgUrl: hcbimg, pdfUrl: hcbpdf },
    { name: "CSS Bootstrap JavaScript PHP Full Stack Crash Course", imgUrl: cbjimg, pdfUrl: cbjpdf },
  ];

  return (
    <section id="certificates" className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16">
      <h2 className="text-5xl font-extrabold text-[#fafafa] text-center mb-12 drop-shadow-neon">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-opacity-80 bg-gray-900 shadow-lg rounded-lg overflow-hidden p-4 drop-shadow-neon"
          >
            <LazyLoadImage
              src={cert.imgUrl}
              alt={cert.name}
              effect="blur"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl text-gray-300 font-semibold mb-4">{cert.name}</h4>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fafafa] font-medium"
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

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
  .shadow-neon {
    box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 45px #39ff14;
  }
`}</style>
