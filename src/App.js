import StarShipCard from './components/StarShipCard';
import {
  useState, useEffect
} from 'react';
import { getStarShip } from './services/sw-api';

import './App.css';

function App() {
  const [ starShip, setStarShip ] = useState([]);
  
  useEffect(() => {
    const data = async () => {
      const dataResult = await getStarShip()
      setStarShip([ dataResult ])
    }
    data()
  }, []);

  
  
  // const getStarShip = async function () {
  //   const data = await fetch('https://swapi.dev/api/starships/?format=json')
    
  //   const response = await data.json()
  //   console.log(response.results)
  
  // }

  // getStarShip()

  return (
    <div className='App'>
        <StarShipCard getStarShip={getStarShip} starShip={starShip}/>
    </div>
  );
}

export default App;



//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getStarShip();
//     }
//   })

//   return (
//     <div className="App">
//       {
//         <div>
        
        
//         </div>
      
//       }
//     </div>
//   );


