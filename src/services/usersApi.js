import axios from 'axios';

const getUsers = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=10');
  return response.data.results;
};

export {getUsers};
