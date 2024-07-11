import './Input.css';

const Input = ({ type, label, id, placeholder }) => {
    return (
        <div className={type == 'email' || type == 'password' ? 'inputContainer' : 'radioContainer'}>
            <label htmlFor={id}>
                {label}
            </label>

            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input