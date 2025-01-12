import Image from 'next/image';
import React from 'react';

interface InfoItem {
  FieldName: string;
  FieldValue: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

const AboutMe = () => {
  const aboutMe = {
    title: "About Me",
    description:
      "Hello, this is Umair. I am a passionate and skilled Frontend Web Developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js. I specialize in building dynamic, responsive, and user-friendly web applications, with a focus on delivering high-quality, performance-optimized solutions. I am committed to staying up-to-date with the latest frontend development trends and technologies, always striving to improve user experiences and create innovative web solutions.",


    info: [
      { FieldName: "Name", FieldValue: "Muhammad Umair" },
      { FieldName: "Phone", FieldValue: "(+92)3........0" },
      { FieldName: "Education", FieldValue: "Front-End Web Developer" },
      { FieldName: "Nationality", FieldValue: "Pakistani" },
      { FieldName: "E-mail", FieldValue: "muhammadumairparyo@gmail.com" },
      { FieldName: "Freelance", FieldValue: "Available" },
      { FieldName: "Languages", FieldValue: "English" },
    ],
    education: {
      title: "My Education",
      description:
        "I have completed my 10th class with 95% marks. I completed my 12th class in pre-medical with 90% marks, and recently, I am a student of Certified Cloud And Generative AI Software Engineering through the Governor Sindh IT initiative, specializing in web 3.0 and metaverse courses.",
      items: [
        {
          institution: "Govt. Sindh IT Initiative (Governor House Karachi)",
          degree: "Certified Cloud And Generative AI Software Engineering",
          duration: "2023- present",
        },
        {
          institution: "Superior Science College",
          degree: "Pre-Medical",
          duration: "2022- 2024",
        },
        {
          institution: "The Scholar School",
          degree: "Matriculation",
          duration: "2020-2022",
        },
      ],
    },
    thanksMessage:
      "I am incredibly grateful to all my teachers at the Governor Sindh IT Initiative. A special thanks to Sir Ameen Alam for guiding me throughout this journey, and heartfelt gratitude to my mentors, Sir Ubaid and Sir Anas, for their continuous support, knowledge, and inspiration.",
  };

  return (
    <div className="bg-transparent p-20 rounded-lg shadow-lg max-w-7xl mx-auto relative z-[20] ">
     
      <div className="absolute top-2 right-1 md:mt-[2rem] w-68 h-68 rounded-full overflow-hidden border-2 border-gray-300 shadow-md shadow-white hover:scale-105">
        <Image
          src="/umair.jpg"
          alt="Hafsa Kamali"
          width={300}
          height={300}
          className="object-cover bg-black "
        />
      </div>

      <h1 className="text-6xl font-semibold mt-[15rem] md:mt-[0rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-300 mb-4">{aboutMe.title}</h1>
      <p className="text-gray-300 mb-6 md:w-[75%] text-sm md:text-xl">{aboutMe.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 z-[20]">
        {aboutMe.info.map((item: InfoItem, index: number) => (
          <div key={index} className="bg-transparent border border-gray-400 p-4 rounded-md shadow-lg shadow-slate-400 hover:scale-105">
            <h2 className="font-semibold text-gray-300">{item.FieldName}</h2>
            <p className="text-gray-400">{item.FieldValue}</p>
          </div>
        ))}
      </div>

      <h2 className="text-5xl font-semibold font-serif text-slate-300 mb-4">{aboutMe.education.title}</h2>
      <p className="text-gray-300 mb-4 w-[90%] text-xl">{aboutMe.education.description}</p>
      <ul className="space-y-4 mb-6">
        {aboutMe.education.items.map((item: EducationItem, index: number) => (
          <li key={index} className="bg-transparent border border-gray-400 p-4 rounded-md shadow-lg shadow-gray-400 hover:scale-105">
            <h3 className="font-semibold text-gray-300">{item.institution}</h3>
            <p className="text-gray-400">{item.degree}</p>
            <p className="text-gray-500">{item.duration}</p>
          </li>
        ))}
      </ul>
     
      <div className="bg-white bg-opacity-95 p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-bold text-gray-800">Special Thanks</h2>
        <p className="text-gray-600 mt-2">{aboutMe.thanksMessage}</p>
      </div>

      <div className='col-span-4 mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem] items-center'>
          {[{
            img: "/ameen alam.png",
            name: "Sir Ameen Alam",
            role: "Dean Of Faculty Of IT Initiative",
            description: "Honoring our Dean of Faculty, Sir Ameen Alam, whose exceptional leadership and innovative IT initiatives have illuminated the path to excellence."
          },
          {
            img: "/Ziakhan.png",
            name: "Sir Zia Khan",
            role: "COO & Developer Of Faculty Of IT Initiative",
            description: "Honoring Sir Zia Khan, our esteemed Chief Operating Officer and Developer of the Faculty of IT Initiative."
          },
          {
            img: "/Daniyalnagori.jpg",
            name: "Sir Daniyal Nagori",
            role: "CEO of Faculty Of IT Initiative",
            description: "Honoring Sir Daniyal Nagori, the visionary CEO of the Faculty of IT Initiative."
          },
          {
            img: "/ubaid sir.jpg",
            name:  "Sir Ubaid",
            role: "Lead Teacher of Faculty Of IT Initiative",
            description: "Honoring Sir Ubaid, our Lead Teacher of the Faculty of IT Initiative."

          },
          {
            img: "/Sir anas.jpg",
            name: "Sir Anas",
            role: "Lead Teacher of Faculty Of IT Initiative",
            description: "Honoring Sir Anas, our esteemed Teacher of the Faculty of IT Initiative."
          }
        
        ].map((mentor, index) => (
            <div
              key={index}
              className='p-6 border border-gray-400 duration-300 transition-all cursor-pointer hover:scale-105 text-center rounded-lg bg-transparent shadow-lg shadow-slate-400'>
              <Image 
                src={mentor.img}
                alt={mentor.name}
                width={300}
                height={300}
                className='object-cover mx-auto'
              />
              <h1 className='text-[18px] mt-4 text-gray-200 font-semibold'>{mentor.name}</h1>
              <h2 className='mt-2 text-gray-300 bg-transparent border-gray-400 border-2 shadow-md hover:shadow-white bg-opacity-75 p-2 rounded-lg'>{mentor.role}</h2>
              <p className='mt-2 text-[18px] text-gray-400'>{mentor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
