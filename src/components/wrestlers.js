import "../App.css";

function Wrestlers(props){

    return (
        <div className="flex-child">
            <img src={props.image}></img>
            <h1>{props.name}</h1>
            <h1>birthday: {props.birthday}</h1>
            <h1>finishing move: {props.finisher}</h1>
            <button onClick = {() => props.addFavorite(props.id)}>add to Favorites</button>
        </div>

    )
}

export default Wrestlers