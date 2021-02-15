import React, {useState} from "react"
import './App.css';
import Welcome from './components/Welcome';
import { wrestlerData } from './Data/wrestlerData'
import WrestlerList from './components/wrestlerList'
import Favorite from "./components/Favorite";

function App() {
   
  const [favoriteList, setFavoriteList] = useState([])
    const addFavorite = (id) => {
      console.log('hi friends!', id)
      const faveWrestler = wrestlerData.find(wrestler => wrestler.id === id)
      console.log(faveWrestler)
     
        const newFavorite = favoriteList 
        newFavorite.push(faveWrestler)
        setFavoriteList(newFavorite)
        console.log(favoriteList)
      }
       
      // const addFavorite = (id) => {
        //   console.log('hi friends', id)
  //   const foundPlayer = playerData.find(player => player.id === id )
  //   const updatedFavorites = favorites.slice()
  //   updatedFavorites.push(foundPlayer)
  //   setFavorites(updatedFavorites)
  return (
    // <div className="container">
    //   <Welcome />
    //   <WrestlerList favoriteList = {favoriteList}  wrestlers={wrestlerData} addFavorite = {addFavorite} />
    //   <Favorite />
    <div className="container">
    <Welcome />
    <WrestlerList 
    wrestlers={wrestlerData} 
    addFavorite={addFavorite}
    />
    
    <Favorite 
      faves={favoriteList}
    />
    
    </div>
  );
}


export default App;

 