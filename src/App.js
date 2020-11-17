import React from 'react';
import CoffeLoaders from './components/CoffeLoader';
import ListOfCharacters from './components/ListOfCharacters';
import useApi from './hook/useApi';

function App({ title }) {
  const { characters, error, isLoading } = useApi();

  return (
    <>
      {isLoading 
        ? <CoffeLoaders /> 
        : <>
          <h1 className='title'> {title} </h1>
          <ListOfCharacters characters={characters} error={error}/>
        </>  
      }
    </>
  );
}

export default App;