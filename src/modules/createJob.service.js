
import axios from 'axios';

const BASE_URL = 'https://tech-foring-test-server.vercel.app';

export const createJob = async (jobData, accessToken) => {
  const response = await axios.post(`${BASE_URL}/create/job`, jobData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};


