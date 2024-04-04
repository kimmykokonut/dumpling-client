export async function getDumplings() {
  try {
    const response = await fetch('http://127.0.0.1:8000/dumplings/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData.results;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}