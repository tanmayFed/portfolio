import { GraduationCap } from "lucide-react";
import Image from "next/image";

interface JobCardProps {
  companyName: string;
  logo?: string;
  description?: string[];
  duration?: string;
}
const GRADUATED = "Graduated";
const JobCard = ({
  companyName,
  description,
  duration,
  logo,
}: JobCardProps) => {
  return (
    <article className="scroll-cards__item ">
      {companyName === GRADUATED ? (
        <GraduationCap size="4em" color="white" />
      ) : (
        logo && (
          <Image
            src={logo!}
            alt={`${companyName} logo`}
            fill={true}
            className="object-contain opacity-30 z-[-1] p-4"
          />
        )
      )}

      <h1 className="text-[20px] md:text-[36px] lg:text-[24px] font-semibold">
        {companyName}
      </h1>
      {description?.length && (
        <ul>
          {description.map((item, index) => (
            <li key={index} className="p-2">
              {item}
            </li>
          ))}
        </ul>
      )}
      {duration && <p>{duration}</p>}
    </article>
  );
};

export default JobCard;
