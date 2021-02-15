function Favorite(props){
    console.log('favorites', props.favoriteList)
  
    return (
      <div>
        <h2>Favorite Wrestlers</h2>
        {props.favoriteList.map(faveWrestler => {
      return (
        <li>{faveWrestler.name}</li>
      )} 
    )}
      </div>
    )
  
  }
  
  export default Favorite;

