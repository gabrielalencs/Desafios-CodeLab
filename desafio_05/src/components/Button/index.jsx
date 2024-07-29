import './styles.css'

const Button = ({ icon, text }) => {
    return (
        <button className={`btn ${icon && 'btnIcon'}`}>
            { icon && <img src={icon} alt="icone de play" /> }
            { text }
        </button>
    )
}

export default Button