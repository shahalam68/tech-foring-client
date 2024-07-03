import { Divider } from '@mui/material';

const JobsHeader = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <Divider sx={{ width: '4%', height: '6px',backgroundColor: '#5bbc2e' }} />
      <h1 className="text-4xl font-bold mt-4">BROWSE OPEN POSITIONS</h1>
      <p className='text-xl'>We are always on the lookout for talented people</p>
    </div>
  );
};

export default JobsHeader;
