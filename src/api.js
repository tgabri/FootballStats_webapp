import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/v2';
const apiToken = process.env.REACT_APP_API_TOKEN;
const header = { headers: { 'X-Auth-Token': apiToken } };
console.log(apiToken, 'TOKEN');

export const fetchCompetitions = () => {
  return axios.get(`${BASE_URL}/competitions`, header).then(({ data }) => data);
};

export const fetchCompetition = id => {
  return axios
    .get(`${BASE_URL}/competitions/${id}`, header)
    .then(({ data }) => data);
};

export const fetchTeams = () => {
  return axios.get(`${BASE_URL}/teams`, header).then(({ data }) => data);
};

export const fetchTeam = id => {
  return axios.get(`${BASE_URL}/teams/${id}`, header).then(({ data }) => data);
};

export const fetchPlayer = id => {
  return axios
    .get(`${BASE_URL}/players/${id}`, header)
    .then(({ data }) => data);
};

export const fetchGames = () => {
  return axios.get(`${BASE_URL}/matches`, header).then(({ data }) => data);
};

export const fetchMatch = id => {
  return axios
    .get(`${BASE_URL}/matches/${id}`, header)
    .then(({ data }) => data);
};

export const fetchArea = id => {
  return axios.get(`${BASE_URL}/areas/${id}`, header).then(({ data }) => data);
};
