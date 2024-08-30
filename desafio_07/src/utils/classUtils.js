export const addCorrectPairClass = (cardRefs, firstCardIndex, secondCardIndex) => {
    cardRefs.current[firstCardIndex].classList.add('correctPair');
    cardRefs.current[secondCardIndex].classList.add('correctPair');
};

export const addCardFlipClass = (cardRefs, firstCardIndex, secondCardIndex) => {
    cardRefs.current[firstCardIndex].classList.remove('cardFlippingAnimation');
    cardRefs.current[secondCardIndex].classList.remove('cardFlippingAnimation');

    cardRefs.current[firstCardIndex].classList.add('cardFlipAnimation');
    cardRefs.current[secondCardIndex].classList.add('cardFlipAnimation');
};