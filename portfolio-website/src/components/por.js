// import React from 'react';
// import { User } from 'lucide-react';
// import '../styles/por.css';

// const PositionResponsibility = () => {
//   // Sample data based on the image
//   const positionHistory = [
//     {
//       title: "Coordinator",
//       organization: "Robotics Club,MNNIT Allahabad",
//       duration: "Nov. 2023 - Present",
//       icon: <User className="text-cyan-400" />
//     },
//     {
//       title: "Event and Placement Coordinator",
//       organization: "MNNIT Alumni Association MNNIT Allahabad",
//       duration: "Feb. 2023 - Present",
//       icon: <User className="text-cyan-400" />
//     },
//     {
//         title: "Student Mentor and Resource hub representative",
//         organization: "SMP MNNIT Allahabad",
//         duration: "Jan. 2023 - Present",
//         icon: <User className="text-cyan-400" />
//       },
//       {
//         title: "PR, Marketing and Core Team Member",
//         organization: "Culrav - Avishkar, MNNIT Allahabad",
//         duration: "Feb. 2024 - Apr. 2024",
//         icon: <User className="text-cyan-400" />
//       },
//       {
//         title: "Event Lead",
//         organization: "GAC, MNNIT Allahabad",
//         duration: "Aug. 2023 - Nov. 2023",
//         icon: <User className="text-cyan-400" />
//       }
//   ];

//   return (
//     <div className="bg-[#0F172A] min-h-screen p-8">
//       <div className="max-w-2xl mx-auto space-y-4">
//         {positionHistory.map((position, index) => (
//           <div 
//             key={index} 
//             className="bg-[#1E293B] rounded-2xl p-4 border border-[#334155] hover:border-cyan-400 transition-colors duration-300"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="bg-[#334155] rounded-xl p-2">
//                 {position.icon}
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-white font-semibold text-lg">
//                   {position.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   {position.organization}
//                 </p>
//               </div>
//               <div className="text-gray-500 text-sm">
//                 {position.duration}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PositionResponsibility;


import React from 'react';
import '../styles/Experience.css';

function PositionResponsibility() {
  // Experience data
  
  const experiences = [
    {
      period: "(Nov. 2023 - Present)",
      title: "Coordinator",
      organization: "Robotics Club,MNNIT Allahabad",
      icon: "user-icon" // This would be replaced with actual icon
//       title: "Coordinator",
// //       organization: "Robotics Club,MNNIT Allahabad",
// //       duration: "Nov. 2023 - Present",
    },
    {
      period: "(Feb. 2023 - Present)",
      title: "Event and Placement Coordinator",
      organization: "MNNIT Alumni Association MNNIT Allahabad",
      icon: "user-icon" // This would be replaced with actual icon
//       title: "Event and Placement Coordinator",
// //       organization: "MNNIT Alumni Association MNNIT Allahabad",
// //       duration: "Feb. 2023 - Present",

// title: "Student Mentor and Resource hub representative",
//         organization: "SMP MNNIT Allahabad",
//         duration: "Jan. 2023 - Present",
    },
    {
        period: "(Jan. 2023 - Present)",
        title: "Student Mentor and Resource hub representative",
        organization: "SMP MNNIT Allahabad",
        icon: "user-icon" // This would be replaced with actual icon
  //       title: "Coordinator",
  // //       organization: "Robotics Club,MNNIT Allahabad",
  // //       duration: "Nov. 2023 - Present",
      },
      {
        period: "(Feb. 2024 - Apr. 2024)",
        title: "PR, Marketing and Core Team Member",
        organization: "Culrav - Avishkar, MNNIT Allahabad",
        icon: "user-icon" // This would be replaced with actual icon
//   / title: "PR, Marketing and Core Team Member",
  //         organization: "Culrav - Avishkar, MNNIT Allahabad",
  //         duration: "Feb. 2024 - Apr. 2024",
      },
      {
        period: "(Aug. 2023 - Nov. 2023)",
        title: "Event Lead",
        organization: "GAC, MNNIT Allahabad",
        icon: "user-icon" // This would be replaced with actual icon
//   / title: "Event Lead",
//         organization: "GAC, MNNIT Allahabad",
//         duration: "Aug. 2023 - Nov. 2023",
      }
  ];

  return (
    <section id="por" className="experience-section">
      <h2 className="experience-heading">Position of Responsibility</h2>
      <div className="experience-content">
        <div className="experience-illustration">
          <div className="laptop-container">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="code-lines"></div>
              </div>
              <div className="laptop-keyboard"></div>
            </div>
            <div className="coffee-cup">
              <div className="cup-glow"></div>
            </div>
          </div>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-details">
                <div className="experience-icon">
                  <div className={exp.icon}></div>
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-organization">{exp.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PositionResponsibility;
