

const Input = ({ type, label, id, placeholder }) => {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>

            <input 
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input