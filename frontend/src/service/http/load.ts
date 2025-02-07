const load = async <T>(endpoint: string): Promise<T> => {

  const response = await fetch(endpoint);

  if(!response.ok) {
    console.log(response.statusText)
  }

  return await response.json(); 

}

export { load }