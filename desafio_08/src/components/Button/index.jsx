import React from 'react'

const Button = ({ text, width }) => {
    return (
        <button className={`mt-10 bg-blue-secondary text-white py-3 px-9 rounded-lg uppercase font-semibold ${width} duration-300 border-2 border-blue-secondary hover:bg-transparent hover:text-blue-secondary`}>{text}</button>
    )
}

export default Button;