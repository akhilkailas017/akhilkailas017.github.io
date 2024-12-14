const Education = () => {
  const educationDetails = [
    { college: "Kerala Blockchain Academy", year: "2024", course: "PG Diploma in Blockchain", cgpa: "Ongoing" },
    { college: "College of Engineering and Management, Punnapra", year: "2018-2023", course: "B.Tech in Computer Science and Engineering", cgpa: "CGPA : 6.62" },
    { college: "TDHSS, Alappuzha", year: "2017 - 2019", course: "Plus Two - Computer Science", cgpa: "Percentage: 64.41%" },
    { college: "Believers Church English Medium School, Alappuzha", year: "2017", course: "SSLC", cgpa: "Percentage: 92%" },
  ];

  return (
    <section id="education" className="pt-16 md:pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center md:text-left px-4 md:px-8">
          <h2 className="text-5xl font-extrabold mb-6 text-[#fafafa] drop-shadow-neon text-center">
            {"Education"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {educationDetails.map((edu, index) => (
              <div
                key={index}
                className="bg-opacity-80 bg-gray-900 px-6 py-6 rounded-xl shadow-lg border border-[#fafafa] drop-shadow-neon"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{edu.college}</h3>
                <p className="text-lg text-yellow-400 mb-1">{edu.year}</p>
                <p className="text-lg text-blue-300 mb-1">{edu.course}</p>
                <p className="text-lg text-green-300 font-semibold">{edu.cgpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
  .shadow-neon {
    box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14, 0 0 45px #39ff14;
  }
`}</style>
