import { useState, useEffect } from "react";

const useGridStyles = (gameLevelCards) => {
    const [gridStyles, setGridStyles] = useState('');

    useEffect(() => {
        const gridStylesMap = {
            3: 'beginnerGridStyles',
            6: 'intermediateGridStyles',
            9: 'advancedGridStyles'
        };

        setGridStyles(gridStylesMap[gameLevelCards.length] || '');
    }, []);

    return gridStyles;
};

export default useGridStyles;