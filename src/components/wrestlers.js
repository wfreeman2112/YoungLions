import "../App.css";

function Wrestlers(props){

    return (
        <div className="flex-child">
            <img src={props.image}></img>
            <h1>{props.name}</h1>
            <h1>{props.birthday}</h1>
            <h1>{props.finisher}</h1>
            <button>add to Favorites</button>
        </div>

    )
}

export default Wrestlers