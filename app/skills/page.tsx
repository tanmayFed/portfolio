import JobHistory from "@/components/JobHistory";
import SkillCard from "@/components/SkillsCard";
import { Separator } from "@/components/ui/separator";
import { STRENGTHS } from "@/data/strengths";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-16 px-6 flex flex-col gap-[48px] w-full">
      <div className="w-full justify-items-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Skills
        </h1>
        <SkillCard />
      </div>
      <Separator />
      <div className="max-w-4xl justify-items-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Key strengths
        </h1>
        {STRENGTHS.map((strength) => (
          <div key={strength.id} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {strength.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
