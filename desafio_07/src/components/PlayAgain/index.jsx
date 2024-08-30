import { useEffect } from 'react';

import Button from '../Button';

import WebImage from '../../assets/images/web.svg'


const PlayAgain = ({
    updateGameStage,
    gameComplete,
    updateGameComplete,
    updateResetGame
}) => {

    useEffect(() => {
        if (gameComplete) {
            document.querySelector('main').classList.add('mainBlur');
        } else {
            document.querySelector('main').classList.remove('mainBlur');
        }

        return () => {
            document.querySelector('main').classList.remove('mainBlur');
        };
    }, []);


    const goToGameScreen = () => {
        updateGameStage(2);
        updateGameComplete(false);
        updateResetGame(true);
    }
    const goToDifficultiesScreen = () => {
        updateGameStage(1);
        updateGameComplete(false);
        updateResetGame(false);
    }


    return (
        <div className='containerPlayAgain'>
            <img src={WebImage} alt="imagem de teia" className='playAgainWebImage' />
            <h2 className='playAgainTitle'>Buuh</h2>
            <p className='playAgainDescription'>
                Parabéns! Você completou este jogo da memória. Que tal experimentar uma dificuldade diferente ou jogar novamente na mesma dificuldade?
            </p>

            <div className='containerButtons'>
                <Button
                    classStyle='buttonSecondary'
                    text='Jogar Novamente'
                    handleClick={goToGameScreen}
                />
                <Button
                    classStyle='buttonSecondary'
                    text='Mudar Dificuldade'
                    handleClick={goToDifficultiesScreen}
                />
            </div>
        </div>
    )
}

export default PlayAgain