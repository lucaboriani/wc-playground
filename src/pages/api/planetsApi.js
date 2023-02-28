export async function getPlanets() {
    let data = await fetch("https://swapi.dev/api/planets")
    let planetsData = await data.json();
   
    return planetsData.results
}

export async function getPlanet(slug) {
    let data = await fetch("https://swapi.dev/api/planets/" + slug)
    let results = await data.json();
      
    return results
}