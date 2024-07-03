
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const deleteRole = ({ category, role }) => {
  return axios.delete(`${API_URL}/delete/job`, { data: { category, role } });
};

export const deleteCategory = ({ category }) => {
  return axios.delete(`${API_URL}/delete/job`, { data: { category } });
};
