export interface Dumpling {
  name: string;
  description: string;
  origin: number;
  tags: string[];
}
export interface UserData {
  username: string;
  email: string;
  password: string;
}
export interface UserSignInData {
  username: string;
  password: string;
}

export async function getDumplings() {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/dumplings/', {
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
export async function getDumplingById(id: number) {
  try {
    const response = await fetch(`https://dumpling-api.onrender.com/dumplings/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function getOriginById(id: number) {
  try {
    const response = await fetch(`https://dumpling-api.onrender.com/origins/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData.country;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function createDumpling(dumpling: Dumpling, token: string) {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/dumplings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(dumpling),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function getOrigins() {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/origins/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData; //.results? it is [] response
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function getTags() {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/tags/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData; 
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function signUp(userData: UserData) {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function signIn(userSignInData: UserSignInData) {
  try {
    const response = await fetch('https://dumpling-api.onrender.com/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userSignInData),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function getTagById(id: number) {
  try {
    const response = await fetch(`https://dumpling-api.onrender.com/tags/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData.name;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
export async function signOut(token: string) {
  console.log(token);
  try {
    const response = await fetch('https://dumpling-api.onrender.com/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      // body: JSON.stringify(userSignInData),
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error('Failed to fetch');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}