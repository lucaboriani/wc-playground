import { useState, useEffect } from 'react'
import {MyButton} from '../../wc/lit/my-button';


const url = "https://swapi.dev/api/planets";

export function App() {
  const [planetsData, setPlanetsData] = useState([]);

  const getPlanetsData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    
    setPlanetsData([...jsonData.results]);
  };
  
 return (
    <div className="App" style={{display:'flex'}}>
      <div style={{flexGrow:1}}>
        <h2>
          React component + webcomponent button 
        </h2>
        {planetsData.length > 0 && <h3>A nice nerd list:</h3>}
        {planetsData.map((planet, index) => (
          <PlanetDetail planet={planet} slug={index + 1} key={planet.name.replace(' ', '-')}/>
        )) }
      </div>
      <div>
        <my-button 
          text="get planets" 
          onClick={e => getPlanetsData()}
          ></my-button>
      </div>
    </div>
  );
}


const PlanetDetail = ({planet, slug}) =>{
  const {name, climate, gravity,population, terrain} = planet
    return(
        <ul>
           <li>
              <a href={`/planets/${slug}`}>
                <h5>{name}</h5>
                <div>
                  <span>Climate:</span>
                  <span>{climate}</span>
                </div> 
                <div>
                  <span>Gravity:</span>
                  <span>{gravity}</span>
                </div>
                <div>
                  <span>Population:</span>
                  <span>{population}</span>
                </div>
                <div>
                  <span>terrain:</span>
                  <span>{terrain}</span>
                </div>
              </a>
              

            </li>
            
            <hr></hr>
        </ul>
    )
}

