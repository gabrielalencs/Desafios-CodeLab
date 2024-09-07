const Button = ({
    classStyle,
    text,
    handleClick
}) => {
    return (
        <button
            className={classStyle}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button;