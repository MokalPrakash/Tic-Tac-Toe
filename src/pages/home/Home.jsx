import "./home.css";
// import Logo from "../../assets/img/logo.svg"
import X from "../../assets/img/icon-x.svg";
import O from "../../assets/img/icon-o.svg";
import Button from "../../components/buttons/Button";
import { useContext, useState } from "react";
import { GameContext } from "../../contexts/gameContext";
import { useNavigate } from "react-router-dom";
import Play from "../../components/Play/Play";
const Home = () => {
    const [mode,setMode] = useState("")
    const { setFirstPlayer,setPlayMode} = useContext(GameContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        //console.log({formData})
        const { player } = Object.fromEntries(formData.entries())
        console.log({player})
        //console.log({mode})
        setFirstPlayer(player)
        setPlayMode(mode)
        navigate("/game")
    }

    const handleClick = (mode) => {
      setMode(mode)
    }
  return (
    <div className="home container">
      <main className="main">
        <div className="logo-container">
          <Play type={"X"} />
          <Play type={"O"} />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <fieldset className="formFieldSet">
            <p>PICK PLAYER 1'S MARK</p>
            <div className="radio-container">
              <div className="radio-control">
                <input type="radio" name="player" id="x" value={"X"} defaultChecked/>
                <label htmlFor="x" className="radio-label">
                  <img src={X} alt="" className="radio-img" />
                </label>
              </div>
              <div className="radio-control">
                <input type="radio" name="player" id="o" value={"O"} />
                <label htmlFor="o" className="radio-label">
                  <img src={O} alt="" className="radio-img" />
                </label>
              </div>
            </div>
            <p>remember X goes first</p>
          </fieldset>
          <Button title={"New game against player"} handleClick={()=> handleClick("Player")}/>
          <Button title={"New game against AI"} handleClick={()=> handleClick("CPU")}/>
        </form>
      </main>
    </div>
  );
};

export default Home;
