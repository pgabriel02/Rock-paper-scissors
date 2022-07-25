import {useState, useEffect} from 'react'
import {FaHandPaper, FaHandScissors, FaHandRock} from 'react-icons/fa'
import ModalContainer from '../../utils/Modal'

const Select = () => {
    const [score, setScore] = useState<number>(0)
    const [selected, setSelected] = useState('')
    const [botSelected, setbotSelected] = useState('')
    const [win, setWin] = useState<string>('')
    const [modal, setModal] = useState<boolean>(false)
    useEffect(() => {
        if(botSelected === selected)
        setWin('DRAW')
        else if((botSelected === 'scissors' && selected === 'paper') || (botSelected === 'rock' && selected === 'scissors') || (botSelected === 'paper' && selected === 'rock')) {
            setScore(prevState => prevState - 1)
            setWin('YOU LOSE')
        }
        else {
            setScore(prevState => prevState + 1)
            setWin('YOU WON')
        }
    }, [selected, botSelected])
    const startGame = (type: string) => {
        setSelected(type)
        let random = Math.floor(Math.random() * 2)
        if(random === 0)
            setbotSelected('paper')
        else if(random === 1)
            setbotSelected('scissors')
        else
            setbotSelected('rock')
    }
    const playAgain = () => {
        setSelected('')
        setbotSelected('')
        setWin('')
    }
    return (
        <div className='container'>
            {modal &&
                <ModalContainer title='Rules' onClose={() => setModal(false)}>
                    <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:</p>
                    <ul>
                        <li>Rock wins against scissors.</li>
                        <li>Scissors win against paper.</li>
                        <li>Paper wins against rock.</li>
                    </ul>
                    <p className='copyright'>Copyright &copy; Petre Gabriel</p>
                </ModalContainer>
            }
            <div className='card'>
                <div className='card__statistics'>
                    <h1>ROCK<br />PAPER<br />SCRISSORS</h1>
                    <div className='card__statistics__score'>
                        <h2>SCORE</h2>
                        <span>{score}</span>
                    </div>
                </div>
                <div className='card__body'>
                    {selected.length === 0 ?
                    <>
                        <div className='card__body__paper' onClick={() => startGame('paper')}>
                            <FaHandPaper className='icon' />
                        </div>
                        <div className='card__body__scissors' onClick={() => startGame('scissors')}>
                            <FaHandScissors className='icon' />
                        </div>
                        <div className='card__body__rock' onClick={() => startGame('rock')}>
                            <FaHandRock className='icon' />
                        </div>
                    </> :
                    <>
                        {

                            <div className={`${selected === 'paper' ? 'card__body__paper' : selected === 'scissors' ? 'card__body__scissors' : 'card__body__rock'}`}>
                                {
                                    selected === 'paper' ?
                                        <FaHandPaper className='icon' />
                                    : selected === 'scissors' ? <FaHandScissors className='icon' /> : <FaHandRock className='icon' />
                                }
                                <p>YOU PICKED</p>
                            </div>
                        }
                        
                        {
                            <div className={`${botSelected === 'paper' ? 'card__body__paper' : botSelected === 'scissors' ? 'card__body__scissors' : 'card__body__rock'}`}>
                                {
                                    botSelected === 'paper' ?
                                        <FaHandPaper className='icon' />
                                    : botSelected === 'scissors' ? <FaHandScissors className='icon' /> : <FaHandRock className='icon' />
                                }
                                <p>BOT PICKED</p>
                            </div>
                        }
                        <div className='card__body__again'>
                            <h3>{win}</h3>
                            <button onClick={playAgain}>PLAY AGAIN</button>
                        </div>
                    </>}
                </div>
                <span className='card__rules' onClick={() => setModal(true)}>
                    RULES
                </span>
            </div>
        </div>
        
    )
}

export default Select