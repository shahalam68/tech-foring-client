
import axios from 'axios';

const API_URL = 'https://tech-foring-test-server.vercel.app';

export const deleteRole = ({ category, role }) => {
  return axios.delete(`${API_URL}/delete/job`, { data: { category, role } });
};

export const deleteCategory = ({ category }) => {
  return axios.delete(`${API_URL}/delete/job`, { data: { category } });
};
