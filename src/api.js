import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/v2';
const apiToken = process.env.REACT_APP_API_TOKEN;
const header = { headers: { 'X-Auth-Token': apiToken } };
console.log(apiToken, 'TOKEN');

export const fetchCompetitions = () => {
  return axios.get(`${BASE_URL}/competitions`, header).then(({ data }) => data);
};
