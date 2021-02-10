import Wrestlers from './wrestlers'
import '../App.css';

function WrestlerList(props){
    const allWrestlers = props.wrestlers.map(wrestlers => {
        return (
            <Wrestlers
            image={wrestlers.img}
            name={wrestlers.name}
            birthday={wrestlers.birthday}
            finisher={wrestlers.finisher}
            />
        )
    })

    return (
        <div className="flex-container">
            {allWrestlers}
        </div>
    )
}

export default WrestlerList