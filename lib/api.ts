export async function getInfluencer(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/influencers/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const influencer = await response.json();
    return influencer;
  } catch (error) {
    console.error("Failed to fetch influencer:", error);
    throw error;
  }
}

