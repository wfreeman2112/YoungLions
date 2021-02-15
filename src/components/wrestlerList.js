import Wrestlers from "./wrestlers"
import "../App.css"

function WrestlerList(props) {
      console.log('props', props)

     const allWrestlers = props.wrestlers.map(wrestlers => {
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
        )

      });
      
     return <div className="flex-container">{allWrestlers}</div>

}

export default WrestlerList;
