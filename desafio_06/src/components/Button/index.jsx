import ButtonElement from "./styled";

const Button = ({ 
    text, 
    marginTop, 
    bgColor, 
    textColor
}) => {
    return (
        <ButtonElement 
            $marginTop={marginTop}
            $bgColor={bgColor}
            $textColor={textColor}
        >
            {text}
        </ButtonElement>
    )
}

export default Button;