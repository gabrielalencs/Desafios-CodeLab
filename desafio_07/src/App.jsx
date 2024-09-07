import { useState } from 'react';

import './styles/app.scss';

import Title from './components/Title';
import GameDifficulties from './components/GameDifficulties';
import GameCards from './components/GameCards';
import PlayAgain from './components/PlayAgain';
import Footer from './components/Footer';


function App() {

    const [gameStage, setGameStage] = useState(1);
    const [gameLevelCards, setGameLevelCards] = useState([]);
    const [isGameComplete, setIsGameComplete] = useState(false);
    const [resetGame, setResetGame] = useState(false);


    return (
        <>
            <main>
                <Title />

                {gameStage == 1 &&
                    <GameDifficulties
                        updateGameStage={setGameStage}
                        updateGameLevel={setGameLevelCards}
                    />}
                {gameStage == 2 &&
                    <GameCards
                        gameLevelCards={gameLevelCards}
                        updateGameComplete={setIsGameComplete}
                        resetGame={resetGame}
                        updateResetGame={setResetGame}
                    />}

                {gameStage == 1 && <Footer />}
            </main>

            {isGameComplete &&
                <PlayAgain
                    updateGameStage={setGameStage}
                    gameComplete={isGameComplete}
                    updateGameComplete={setIsGameComplete}
                    resetGame={resetGame}
                    updateResetGame={setResetGame}
                />}
        </>
    )

}

export default App
