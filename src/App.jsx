import Game from "./components/Game/Game";
import Constants from "./utils/constants"
import React from "react"

const App = () => {
    return (
        <Game
            numberOfBalloons={Constants.gameCells}
            gameDuration={Constants.gameDuration}
        />
    );
};

export default App;