import './Button.css';

const Button = ({ icon, text }) => {
    return (
        <button className={`button ${icon ? 'loginGoogle' : 'login'}`} type='submit'>
            {icon && <img src={icon} alt="icone da logo do google" />}

            <p>{text}</p>
        </button>
    )
}

export default Button;