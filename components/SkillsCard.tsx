import Image from "next/image";

const SkillCard = () => {
  const skills = [
    {
      name: "HTML",
      icon: "/html.png",
    },
    {
      name: "CSS",
      icon: "/css.png",
    },
    {
      name: "JavaScript",
      icon: "/js.png",
    },
    {
      name: "TypeScript",
      icon: "/Typescript.png",
    },
    {
      name: "ReactJS",
      icon: "/reactjs.png",
    },
    {
      name: "Remix",
      icon: "/remix.jpg",
    },
    {
      name: "NextJS",
      icon: "/nextjs.png",
    },
    {
      name: "NodeJS",
      icon: "/nodeJS.webp",
    },
    {
      name: "MongoDB",
      icon: "/mongodb.png",
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative w-16 h-16 group-hover:mb-4 transition-all duration-300 group-hover:scale-125">
              <Image src={skill.icon} alt={skill.name} fill />
            </div>

            <span
              // className="relative text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300"
              className="relative text-sm font-semibold text-center text-foreground
    max-h-0                     
    opacity-0                    
    group-hover:max-h-10         
    group-hover:opacity-100      
    overflow-hidden              
    transition-all               
    duration-500                 
    ease-in"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Always learning and exploring new technologies to stay current with
          frontend development trends
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
