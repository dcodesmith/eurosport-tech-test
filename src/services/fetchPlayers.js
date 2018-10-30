import axios from 'axios';

export default async () => {
  let response = {};
  try {
    response = await axios.get(process.env.REACT_APP_HEADTOHEAD_ENPOINT);
  } catch (error) {
    throw error;
  }

  return response.data;
};