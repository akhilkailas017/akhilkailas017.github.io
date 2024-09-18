const Education = () => {
  const educationDetails = [
    { college: "Kerala Blockchain Academy", year: "2024", course: "PG Diploma in Blockchain", cgpa: "Ongoing" },
    { college: "College of Engineering and Management, Punnapra", year: "2018-2023", course: "B.Tech in Computer Science and Engineering", cgpa: "CGPA : 6.62" },
    { college: "TDHSS, Alappuzha", year: "2017 - 2019", course: "Plus Two - Computer Science", cgpa: "Percentage: 64.41%" },
    { college: "Believers Church English Medium School, Alappuzha", year: "2017", course: "SSLC", cgpa: "Percentage: 92%" },
  ];

  return (
    <section id="education" className=" bg-gradient-to-b from-indigo-600 to-purple-600 py-16">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12">Education</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.college}</h3>
            <p className="text-lg font-medium text-gray-700 mb-1">{edu.year}</p>
            <p className="text-lg text-gray-700 mb-1">{edu.course}</p>
            <p className="text-lg text-gray-700 font-semibold">{edu.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
