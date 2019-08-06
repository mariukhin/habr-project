import axios from 'axios';

const API_URL = 'http://localhost:3113';

export function fetchTopics() {
  const RESULT_URL = `${API_URL}/topics`;
  return axios.get(RESULT_URL).then(response => response.data);
}
export function fetchLinks() {
  const RESULT_URL = `${API_URL}/links`;
  return axios.get(RESULT_URL).then(response => response.data);
}
