import { JOBS } from "@/data/jobHistory";
import JobCard from "./JobCard";

const JobHistory = () => {
  return (
    <div className="scroll-cards">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Work Experience
      </h1>
      {JOBS.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobHistory;
