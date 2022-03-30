import Play from "../Play/Play"
import "./tile.css"

const Tile = ({ highlight,color,play,handlePlay }) => {
    return (
        <button className="tile" onClick={handlePlay}>
            <Play size={60} type={play} color={color}/>
        </button>
    )
}

export default Tile
