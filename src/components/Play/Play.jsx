import "./play.css"
import X from "../../assets/img/icon-x.svg"
import O from "../../assets/img/icon-o.svg"
const Play = ( { size,type,color }) => {
    return (
        <div className="container">
            {type === "X" && (
                <img src={X} alt="" className="player-img" style={{width:size,height:size}}/>
            )}
            {type === "O" && (
                <img src={O} alt="" className="player-img" style={{width:size,height:size}}/>
            )}
        </div>
    )
}

export default Play
