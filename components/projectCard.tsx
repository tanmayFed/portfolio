import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
  link?: string;
}

const ProjectCard = ({
  title,
  imageSrc,
  imageAlt = "Project Image",
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="project-container">
      <div className="card">
        <div className="face face1">
          <div className="justify-items-center content">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={100}
              height={100}
              className="projectImg"
            />
            <h3>{title}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{description}</p>
            {link && (
              <Link
                className="anchor"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
