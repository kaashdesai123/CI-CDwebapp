import axios from 'axios';

export const getBuildFailures = async () => {
  const response = await axios.get('/api/build-failures'); // replace this with your actual API endpoint
  return response.data;
}
