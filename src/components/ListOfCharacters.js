import React from 'react';
import VirtualList from 'react-tiny-virtual-list';
import Character from './Character';

const ListOfCharacters = ({ characters, error }) => {

  return (
    <div>
      {error.status ? (
        <h3> Algo salio mal 😠😠 </h3>
      ) : (
        characters.results && 
        <VirtualList 
          width='400px'
          height={window.innerHeight}
          itemCount={characters.results.length}
          itemSize={550 - 10}
          renderItem={({index, style})=> {
            let { id, name, status, species, gender, image } = characters.results[index];

            return <Character 
                key={id}
                name={name} 
                status={status}
                species={species}
                gender={gender}
                image={image}
                style={style}
            />
          }
        }
      />)
      }
    </div>
  );
}

export default ListOfCharacters

// characters.results.map(({ id, name, status, species, gender, image }) => (
//   <Character 
//     key={id}
//     name={name} 
//     status={status}
//     species={species}
//     gender={gender}
//     image={image}
//   />
// ))