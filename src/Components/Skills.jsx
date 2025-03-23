import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaFigma, FaPython, FaBrain, FaUsers } from "react-icons/fa";
import { SiTailwindcss, SiDotnet, SiMysql, SiFirebase, SiOpencv, SiScikitlearn, SiNumpy, SiPandas } from "react-icons/si";


const Skills = () => {
  const quantity = 10;
  const colors = [
    "250, 240, 230",
    "250, 240, 230", // Lemon Chiffon
    "253, 245, 230", // Old Lace
    "250, 240, 230", // Linen
    "250, 240, 230",
    "250, 240, 230",
    "250, 240, 230",
    "250, 240, 230",
    
  ];


  const skillSet = [
    {
      title: "Frontend Technology",
      tecno: "React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, Shadcn UI",
      icon: FaReact,
    },
    {
      title: "Backend Technology",
      tecno: ".NET Framework, Node.js",
      icon: FaNodeJs,
    },
    {
      title: "Databases",
      tecno: "Microsoft SQL Server, MySQL, Firebase",
      icon: FaDatabase,
    },
    {
      title: "Tools",
      tecno: "Git, GitHub, Figma, Canva",
      icon: FaGitAlt,
    },
    {
      title: "Version Control",
      tecno: "Git, GitHub",
      icon: FaGithub,
    },
    {
      title: "Machine Learning",
      tecno: "Python, pandas, Numpy, Scikit-learn, OpenCV",
      icon: FaPython,
    },
    {
      title: "Soft Skills",
      tecno: "Strong communication, teamwork, problem-solving, attention to detail",
      icon: FaUsers,
    },
  ];
  

  return (
    <section id="skills" className="w-full h-screen flex items-center justify-center overflow-auto relative">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-relaxed">Skills</h1>

   
    <div >
      <div
        className="absolute "
        style={{
          "--w": "170px",
          "--h": "260px",
          "--translateZ": "calc((var(--w) + var(--h)) + 0px)",
          "--rotateX": "-15deg",
          "--perspective": "1000px",
          width: "var(--w)",
          height: "var(--h)",
          top: "25%",
          left: "calc(50% - (var(--w) / 2) - 2.5px)",
          zIndex: 2,
          transformStyle: "preserve-3d",
          animation: "rotating 20s linear infinite",
        }}
      >
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className="absolute border-2 rounded-lg overflow-hidden p-4 flex flex-col justify-center items-center shadow-2xl shadow-amber-50 "
            style={{
              inset: 0,
              transform: `rotateY(calc((360deg / ${skillSet.length}) * ${index})) translateZ(var(--translateZ))`,
              background: `rgba(${colors[index % colors.length]}, 0.8)`,
            }}
          >
             <skill.icon className="text-4xl text-white  mb-2" />
           
            <h3 className="text-2xl font-bold text-black text-center">{skill.title}</h3>
            <p className="text-sm text-indigo-950 text-center mt-2">{skill.tecno}</p>
          </div>
        ))}
      </div>
    
      

      <style>
        {`
          @keyframes rotating {
            from {
              transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
            }
            to {
              transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
            }
          }
        `}
      </style>
    </div>
    </section>
  );
};

export default Skills;
