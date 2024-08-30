import { useState, useEffect } from "react";

const useShuffledCards = (gameLevelCards, isResetGame) => {
    const [shuffledCards, setShuffledCards] = useState([]);

    useEffect(() => {
        const shuffled = [...gameLevelCards, ...gameLevelCards]
            .sort(() => Math.random() - 0.5);

        setShuffledCards(shuffled);
    }, [isResetGame]);

    return shuffledCards;
};

export default useShuffledCards;