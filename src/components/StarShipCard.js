// import {sw-api} from './services/sw-api'
    
function StarShipCard(props) {
    const { starShip, getStarShip } = props;

    const list = starShip.map((element) => {
        return (
            <p>
                {element.results.map((e) => {
                    return (
                        <div className="starShip">
                            <p className="starCard"> {e.name}</p>

                        </div>
                    );
                })}

            </p>
        );
    
    });

    return (
        <div>
            <h2
                style={{
                    color: "white",
                    height: "5rem",
                    backgroundColor: "blue",
                    padding: "2rem"
                
                }}>
                Star-War Ship
            </h2>
            <p>{list}</p>
            
        </div>
    
    );
}

export default StarShipCard;





//     import React, {Fragment, useEffect, useState} from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import{Container, Dimmer, Loader} from 'semantic-ui-react';

// //import components here
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import People from './components/People';
// import Films from './components/Films';
// import Planets from './components/Planets';
// import Starships from './components/Starships';
// import Species from './components/Species';
// import Vehicles from './components/Vehicles';

// import './App.css';

// function App() {
//   const [films, setFilms] = useState([]);
//   const [people, setPeople] = useState([]);
//   const [planets, setPlanets] = useState([]);
//   const [species, setSpecies] = useState([]);
//   const [starships, setStarships] = useState([]);
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{

//     async function fetchFilms(){
//       const response = await fetch('https://swapi.dev/api/films/')
//       const data = await response.json();
//       setFilms(data.results);
//     }

//     async function fetchPeople(){
//       const response = await fetch('https://swapi.dev/api/people/');
//       const data = await response.json();
//       setPeople(data.results);
//     }

//     async function fetchPlanets(){
//       const response = await fetch('https://swapi.dev/api/planets/');
//       const data = await response.json();
//       setPlanets(data.results);
//     }

//     async function fetchSpecies(){
//       const response = await fetch('https://swapi.dev/api/species/');
//       const data = await response.json();
//       setSpecies(data.results);
//     }

//     async function fetchStarships(){
//       const response = await fetch('https://swapi.dev/api/starships/')
//       const data = await response.json();
//       setStarships(data.results);   
//     }

//     async function fetchVehicles(){
//       let response = await fetch('https://swapi.dev/api/vehicles/');
//       let data = await response.json();
//       setVehicles(data.results);
//       setLoading(false);
//     }
    
//     fetchFilms();
//     fetchPeople();
//     fetchPlanets();
//     fetchSpecies();
//     fetchStarships();
//     fetchVehicles();
//   }, []);

//   return (
//     <>

//       <Router>
//       <Navbar />
//       <Container>
//         {loading ? (
//           <Dimmer active inverted>
//             <Loader inverted>Loading...</Loader>
//           </Dimmer>
//         ) : (
//           <Fragment>
//           <Routes>
  
//             <Route exact path='/'element={<Home/>}/>
//             <Route exact path='/films'element={<Films data={films}/>}/>
//             <Route exact path='/people'element={<People data={people}/>}/>
//             <Route exact path='/planets'element={<Planets data={planets}/>}/>
//             <Route exact path='/species'element={<Species data={species}/>}/>
//             <Route exact path='/starships'element={<Starships data={starships}/>}/>
//             <Route exact path='/vehicles'element={<Vehicles data={vehicles}/>}/>
           
//           </Routes>
//           </Fragment>
//         )}
  
//       </Container>
//       </Router>
    
//     </>
//   )
// }

// export default App;

// }
// const StarShipCard = (({ ship, id }) => {
//     console.log(ship);
//     return (
//         <div>
//             {/* <h1> {ship.name}</h1> */}
           
//     </div>
//         )
// })
    

// const list = ship.map(e) => {

//     return (
     
//             {e.result.map((e) => {
            
//                 return (
//                     {
//                         e.results.map((e) => {
//                             return <div> {e.name}
//                         })
//                     }
//                     )
//             })}

 
    
//         )
// }

// function StarShipCard() {

//     return (
    
//         )
// }


