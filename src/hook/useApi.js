import { useState, useEffect } from 'react';

const URL = 'https://rickandmortyapi.com/api/character';

export default function useApi() {
  const [ characters, setCharacters ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    async function getCharacters() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        
        setCharacters(data);
      } catch (error){
        setError({
          status: true,
          msg: error.msg
        })
      } finally {
        setIsLoading(false);
      }
    }

    getCharacters();
  }, [])

  return { characters, error, isLoading }
}

