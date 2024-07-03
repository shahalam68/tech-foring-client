
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const createJob = async (jobData, accessToken) => {
  const response = await axios.post(`${BASE_URL}/create/job`, jobData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};


