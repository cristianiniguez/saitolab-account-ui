import Axios from 'axios';

const API_URL = 'http://localhost:3001';

export const signUp = () => {
  Axios.post(`${API_URL}/signup`, {});
};
