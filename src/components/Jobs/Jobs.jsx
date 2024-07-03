import JobsHeader from "./JobsHeader";
import JobsAccordion from "../Accordion/JobsAccordion";
// import { useGetAllJobs } from "../../modules/Jobs.hooks";

const Jobs = () => {
  // const { data, isLoading, isError, error } = useGetAllJobs();  // Destructure properties for handling data
// console.log('from dsdkslkdskdks',data);
  // if (isLoading) {
  //   return <p>Loading jobs...</p>;  // Show loading message while fetching data
  // }

  // if (isError) {
  //   return <p>Error fetching jobs: {error.message}</p>;  // Show error message if there's an error
  // }

  return (
    <div>
      <JobsHeader />
      <div className="w-full flex justify-center">
        <div className="w-4/6 ">
          <div>
            <JobsAccordion></JobsAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
