import Wrestlers from "./wrestlers";
import "../App.css";

function WrestlerList(props) {
//   const allWrestlers = props.wrestlers.map((wrestlers) => {
//     return (
//       <Wrestlers
//         key={wrestlers.id}
//         id={wrestlers.id}
//         image={wrestlers.img}
//         name={wrestlers.name}
//         birthday={wrestlers.birthday}
//         finisher={wrestlers.finisher}
//         addFavorite={props.addFavorite}
//       />
//     );
//   });

  return (
    <div className="flex-container">
      {props.wrestlers.map((wrestlers) => {
        return (
          <Wrestlers
            key={wrestlers.id}
            id={wrestlers.id}
            image={wrestlers.img}
            name={wrestlers.name}
            birthday={wrestlers.birthday}
            finisher={wrestlers.finisher}
            addFavorite={props.addFavorite}
          />
        );
      })}
      <br></br>
      <ul>

        ----000000
        {console.log("fav", props.favoriteList)}
        {props.favoriteList.map((favorite) => {
          return <li>{favorite.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default WrestlerList;
