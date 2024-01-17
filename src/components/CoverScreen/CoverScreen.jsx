import Button from "../Button/Button";
import "./CoverScreen.css";


const CoverScreen = ({score, onStartGame, duration}) => {
    <div className="intro">
        <h1 className="tltle">{score > -1 ? "Game Over" : "Pop a balloon 🎈"}</h1>
        {score > -1 ? (
            <p className="description">
                {`You scored ${
                    score === 0 ? "nothing" : `${score} ${score > 1 ? "hits" : "hit"}`
                }`}
            </p>
        ) : (
            <p className="description">
                A simple {duration}-second balloon game built with React that i barely undestood.
                Find the source here
            </p>
        )}

        <div className="action">
            <Button onClick={onStartGame} width={"wide"}>
                {score > -1 ? "Play again" : "Start game"}
            </Button>
        </div>
    </div>
}

export default CoverScreen;