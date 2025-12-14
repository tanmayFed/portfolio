import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function PhoneContactForm() {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[300px] ">
        <img
          src="/phone.png"
          alt="Phone mockup"
          className="w-full h-auto relative z-10 pointer-events-none"
        />
        <div
          className="absolute inset-0 flex items-center justify-center mx-[4%] mt-[2.5%] mb-[4%] rounded-[25px] bg-gradient-to-b from-[#6C5B7B] 
    to-[#C06C84]"
        >
          <div className="w-full h-full flex flex-col justify-center px-3 sm:px-4 md:px-6 py-4 overflow-y-auto gap-[16px] sm:gap-[8px]">
            <h1 className="text-sm sm:text-base md:text-2xl font-semibold text-foreground text-center">
              Interested in working together? Let’s connect
            </h1>
            <div className="flex justify-evenly items-center sm:mt-8">
              <Link
                href="https://www.linkedin.com/in/tanmay-17886615b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  color="#0a66c2"
                  className="text-xl md:text-3xl cursor-pointer"
                />
              </Link>

              <div className="flex gap-[4px]">
                <Link
                  href="https://github.com/tanmayIntelli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-xl md:text-2xl cursor-pointer" />
                </Link>
                <Link
                  href="https://github.com/tanmayFed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-xl md:text-2xl cursor-pointer" />
                </Link>
              </div>
              <Link
                href="mailto:tanmaypach15@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail
                  color="#BB001B"
                  className="text-xl md:text-3xl cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
