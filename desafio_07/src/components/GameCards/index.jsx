import { useEffect, useRef, useState } from 'react';

import useShuffledCards from '../../hooks/useShuffledCards';
import useGridStyles from '../../hooks/useGridStyles';

import { addCardFlipClass, addCorrectPairClass } from '../../utils/classUtils';



const GameCards = ({
    gameLevelCards,
    updateGameComplete,
    resetGame,
    updateResetGame
}) => {
    const shuffledCards = useShuffledCards(gameLevelCards, resetGame);
    const gridStyles = useGridStyles(gameLevelCards);

    const [turnedCards, setTurnedCards] = useState([]);
    const [numberCardsTurnedOver, setNumberCardsTurnedOver] = useState(0);

    const [flipClass, setFlipClass] = useState('');
    const [unclickableCardClass, setUnclickableCardClass] = useState('unclickableCard');

    const cardRefs = useRef([]);

  
    const resetGameState = () => {
        setFlipClass('');
        setUnclickableCardClass('unclickableCard');
        setNumberCardsTurnedOver(0);
        setTurnedCards([]);
        cardRefs.current.forEach(card => {
            card.classList.remove('cardFlipAnimation', 'cardFlippingAnimation', 'correctPair');
        });
    };


    useEffect(() => {
        if (resetGame) {
            resetGameState();
            updateResetGame(false)
        }
    }, [resetGame]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlipClass('cardFlipAnimation');
            setUnclickableCardClass('');
        }, 3000);

        return () => clearTimeout(timer);
    }, [resetGame]);

    useEffect(() => {

        if (numberCardsTurnedOver === 2) {
            const [firstCard, secondCard] = turnedCards;

            if (firstCard.image === secondCard.image) {
                setTurnedCards([]);
                setNumberCardsTurnedOver(0);

                addCorrectPairClass(cardRefs, firstCard.index, secondCard.index);
            } else {
                setTimeout(() => {
                    addCardFlipClass(cardRefs, firstCard.index, secondCard.index);
                }, 900);

                setTurnedCards([]);
                setNumberCardsTurnedOver(0);
            }
        }

    }, [numberCardsTurnedOver]);

    useEffect(() => {

        if (numberCardsTurnedOver > 0) {
            const allPairsAreCorrect = cardRefs.current.every(card =>
                card.classList.contains('correctPair')
            );

            if (allPairsAreCorrect) {
                setTimeout(() => {
                    updateGameComplete(true);
                }, 500);
            }
        }

    }, [numberCardsTurnedOver]);


    const handleClick = (index) => {
        if (numberCardsTurnedOver < 2) {
            const card = cardRefs.current[index];
            card.classList.toggle('cardFlipAnimation');
            card.classList.toggle('cardFlippingAnimation');

            setNumberCardsTurnedOver(numberCardsTurnedOver + 1);
            setTurnedCards((prev) => [...prev, { index, image: shuffledCards[index] }]);
        }
    };

    return (
        <div className={`containerGameCards ${gridStyles}`}>
            {shuffledCards.map((image, index) => (
                <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`gameCard ${flipClass} ${unclickableCardClass}`}
                    onClick={() => handleClick(index)}
                >
                    <div className='gameCardFront'>
                        <img src={image} alt={`Card ${index}`} />
                    </div>
                    <div className='gameCardBack'>
                        <span>Buuh!</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GameCards