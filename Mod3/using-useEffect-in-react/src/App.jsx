import { useEffect, useState } from "react"


export default function App(){

const[peopleInSpace, setPeopleInSpace] = useState([]);
const[isLoading, setIsLoading] = useState(false);
const[data, setData] = useState(" ")

useEffect(() => {
 
fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((data) => { setPeopleInSpace(data.people)
    setIsLoading(true)
 })
    
}, []);

//  addind n eventhandler
 function handleClick() {
  fetch(URL)
  .then ((r) => r.json() )
  .then((json) => setData(json) )
 }

//if the data is loading show the loading indicator
if(!isLoading) return <h3>Loading...</h3>;
  return(
    <div>

      {peopleInSpace.map((people) => 
        people.name)}
        <button onClick={handleClick}>Click to fetch</button>
    </div>
  )
} 