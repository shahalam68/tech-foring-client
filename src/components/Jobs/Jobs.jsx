import JobsHeader from "./JobsHeader";
import JobsAccordion from "../Accordion/JobsAccordion";

const Jobs = () => {
 

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
