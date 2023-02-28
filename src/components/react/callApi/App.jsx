import { useState, useEffect } from 'react'
import {MyButton} from '../../wc/lit/my-button';
import { getPlanets } from '../../../pages/api/planetsApi'

export function App() {
  const [planetsData, setPlanetsData] = useState([]);

  const getPlanetsData = async () => {
    const jsonData = await getPlanets();
    setPlanetsData([...jsonData]);
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
                <h2>{name}</h2>
                <div style={{display:'flex'}}>
                    <img src={'https://via.placeholder.com/300x180?text='+ name.replace(' ', '+')}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <span>Climate:</span>
                      <span>{climate}</span>
                      <span>Gravity:</span>
                      <span>{gravity}</span>
                      <span>Population:</span>
                      <span>{population}</span>
                      <span>terrain:</span>
                      <span>{terrain}</span>
                    </div>
                  
                </div> 
              </a>
              

            </li>
            
            <hr></hr>
        </ul>
    )
}

