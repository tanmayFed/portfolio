import JobHistory from "@/components/JobHistory";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 px-6 flex flex-col w-full">
      <div className="max-w-4xl mx-auto justify-items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="flex flex-col items-center md:flex-row">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hi! I am Tanmay - Software engineer with 6+ years of experience
            building responsive, intuitive, and scalable web interfaces. My
            career spans diverse domains, including telematics at Intellicar,
            healthcare IT at Oracle Health, and Gartner, where I help create
            user-friendly, high-performance UI for global software buyers and
            sellers. I specialize in React, Next.js, and TypeScript, and I enjoy
            transforming complex requirements into clean, accessible, and
            maintainable user experiences. I work closely with design and
            product teams, focusing on performance, clarity, and usability in
            every feature I build.
          </p>

          <Image
            src="/multitasking.png"
            alt="Picture of the author"
            width={300}
            height={300}
            className="relative z-10"
          />

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Outside of Work, I'm passionate about cooking and exploring new
            cuisines — I find the creativity and precision it requires
            surprisingly similar to building great software. I enjoy trying out
            new recipes, discovering street food, and learning about cultures
            through their food traditions. I also like keeping up with global
            affairs and politics, which helps me stay aware of the world beyond
            tech and fuels meaningful conversations. These interests give me
            balance, curiosity, and a broader perspective on life.
          </p>
        </div>
        <div className="pt-12">
          <JobHistory />
        </div>
      </div>
    </section>
  );
};

export default About;
