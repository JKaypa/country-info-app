const load = async <T>(endpoint: string): Promise<T> => {

  const response = await fetch(endpoint);

  if(!response.ok) {
    throw new Error('Failed to load data');
  }

  return await response.json(); 

}

export { load }