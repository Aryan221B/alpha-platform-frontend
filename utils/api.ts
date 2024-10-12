import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getInfluencers() {
  // Implementation of fetching influencers
}

export const getInfluencer = async (id: string) => {
  try {
    const response = await api.get(`/influencers/${id}`);
    return response.data;
  } catch (error: Error | unknown) {
    console.error('Error fetching influencer:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
};

export default api;
