import React from 'react';


const About = () => {
  const academicData = [
    {
      year: '2020',
      qualification: 'SSLC',
      school: 'Ganapathy English Medium School, GHS Road, Hampankatta, Mangalore',
      marks: '86%',
    },
    {
      year: '2022',
      qualification: 'PUC (Commerce)',
      school: 'Ganapathy Aided Pre University College, GHS Road, Mangalore',
      marks: '89%',
    },
    {
      year: '2025',
      qualification: 'Diploma in Computer Science and Engineering',
      school: 'Karnataka Govt. Polytechnic, Kadri Hills, Mangalore',
      marks: '87%',
    },
  ];

  return (
    <div className="about-container" id="about">
      <h1>About</h1>
      <div className="cards-container">
        {academicData.map((item, index) => (
          <div className="card" key={index} data-aos="flip-right"
          data-aos-duration="1000">
            <h2>{item.year}</h2>
            <h3>{item.qualification}</h3>
            <p>{item.school}</p>
            <span className="marks">Marks: {item.marks}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
