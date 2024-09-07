import BatIcon from '../BatIcon';
import Button from '../Button';

import ghostFace1 from '../../assets/images/1.svg';
import ghostFace2 from '../../assets/images/2.svg';
import ghostFace3 from '../../assets/images/3.svg';
import ghostFace4 from '../../assets/images/4.svg';
import ghostFace5 from '../../assets/images/5.svg';
import ghostFace6 from '../../assets/images/6.svg';
import ghostFace7 from '../../assets/images/7.svg';
import ghostFace8 from '../../assets/images/8.svg';
import ghostFace9 from '../../assets/images/9.svg';


const GameDifficulties = ({ 
    updateGameStage, 
    updateGameLevel
}) => {

    const infosButtons = [
        { 
            id: 1, 
            difficulty: 'Fácil',
            pairs: [ghostFace1, ghostFace2, ghostFace3]
        },
        { 
            id: 2, 
            difficulty: 'Intermediário' ,
            pairs: [
                ghostFace1, ghostFace2, ghostFace3,
                ghostFace4, ghostFace5, ghostFace6
            ]
        },
        { 
            id: 3, 
            difficulty: 'Avançado',
            pairs: [
                ghostFace1, ghostFace2, ghostFace3, 
                ghostFace4, ghostFace5, ghostFace6, 
                ghostFace7, ghostFace8, ghostFace9
            ]
        }
    ];

    const setGameDifficulty = (difficulty) => {
        updateGameStage(2);

        updateGameLevel(difficulty);
    };
    
    
    return (
        <div className='containerGameDifficulties'>
            <BatIcon
                classStyles='gameDifficultiesIconOne'
                color='#353535'
            />
            <h2 className='gameDifficultiesTitle'>
                Escolha a dificuldade do Jogo
            </h2>
            <BatIcon
                classStyles='gameDifficultiesIconTwo'
                color='#353535'
            />

            <div className='containerButtons'>
                {
                    infosButtons.map(({ id, difficulty, pairs }) => (
                        <Button
                            key={id}
                            classStyle='buttonPrimary'
                            text={difficulty} 
                            handleClick={() => setGameDifficulty(pairs)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GameDifficulties;