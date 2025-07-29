// // src/components/TechMarquee.tsx
// import { FaJava, FaPython } from 'react-icons/fa';
// import { 
//   SiSpringboot, SiPostgresql, SiDocker, SiGit, SiMongodb, 
//   SiHtml5, SiSpringsecurity, SiJsonwebtokens, SiIntellijidea, 
//   SiGithub, SiPostman 
// } from 'react-icons/si';

// // The full list of your backend-focused technologies
// const techIcons = [
//   { name: 'Java', icon: FaJava },
//   { name: 'Spring Boot', icon: SiSpringboot },
//   { name: 'Spring Security', icon: SiSpringsecurity },
//   { name: 'PostgreSQL', icon: SiPostgresql },
//   { name: 'MongoDB', icon: SiMongodb },
//   { name: 'Docker', icon: SiDocker },
//   { name: 'JWT', icon: SiJsonwebtokens },
//   { name: 'Python', icon: FaPython },
//   { name: 'HTML5', icon: SiHtml5 },
//   { name: 'Git', icon: SiGit },
//   { name: 'GitHub', icon: SiGithub },
//   { name: 'Postman', icon: SiPostman },
//   { name: 'IntelliJ IDEA', icon: SiIntellijidea },
// ];

// // Duplicate the array for a seamless, infinite loop
// const marqueeIcons = [...techIcons, ...techIcons];

// const TechMarquee = () => {
//   return (
//     // The container now has the fade-out mask effect
//     <div 
//       className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
//     >
//       <div className="flex animate-scroll [animation-play-state:running] hover:[animation-play-state:paused]">
//         {marqueeIcons.map((tech, index) => (
//           // Increased size and spacing, added hover effect
//           <div 
//             key={index} 
//             className="flex-shrink-0 flex items-center justify-center w-64 text-center mx-8 group"
//           >
//             <tech.icon 
//               className="w-12 h-12 text-slate-500 transition-colors group-hover:text-primary" 
//             />
//             <span 
//               className="ml-4 text-xl font-semibold text-slate-500 transition-colors group-hover:text-primary"
//             >
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechMarquee;