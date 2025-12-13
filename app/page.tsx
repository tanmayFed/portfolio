import { PhoneContactForm } from "@/components/Contact";
import Project from "@/components/projectCard";
import { PROJECTS } from "@/data/projects";
import { ChevronsDown, Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center mt-8 p-2 gap-[48px] ">
      <div className="w-full max-w-[800px] flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-6">
            <span>Hi! I am </span>
            <span className="text-orange-600">Tanmay</span>
          </h1>

          <p className="text-[16px] md:font-semibold  md:text-[18px] max-w-[700px] mx-auto mb-8">
            Frontend-focused software engineer with 6+ years crafting
            responsive, intuitive, and scalable interfaces across telematics,
            healthcare IT, and enterprise research platforms.
          </p>

          <Link
            className="text-blue-400 text-[16px] hover:text-blue-300 transition"
            href="/about"
          >
            More about me
          </Link>
        </div>

        <div className="border-none relative flex items-center justify-center">
          <Image
            src="/avatar.png"
            alt="Picture of the author"
            width={300}
            height={300}
            className="relative z-10"
          />
        </div>

        <div className="scroll-container">
          <div className="arrow text-orange-400 text-4xl">
            <ChevronsDown />
          </div>
        </div>
      </div>

      <section className="w-full">
        <center>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Projects
          </h1>
        </center>
        <div
          id="projects"
          className="flex flex-col flex-wrap md:flex-row w-full justify-evenly content-center gap-8"
        >
          {PROJECTS.map(({ id, title, imageSrc, description, link }) => (
            <Project
              key={id}
              title={title}
              imageSrc={imageSrc}
              description={description}
              link={link}
            />
          ))}
        </div>
      </section>

      {/* <section className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          In their words
        </h1>

        <div
          id="testimonials"
          className="flex flex-col flex-wrap md:flex-row w-full justify-evenly content-center gap-8"
        >
          <i>Coming soon...</i>
        </div>
      </section> */}
      <section className="w-full">
        <PhoneContactForm />
      </section>
    </main>
  );
}
