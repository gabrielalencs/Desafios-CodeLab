import React from 'react'

const ArrowAccordion = ({ isOpen }) => {
    return (
        <>
            <svg width="40" height="40" viewBox="0 0 30 30" fill="" xmlns="http://www.w3.org/2000/svg" className={`duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <g opacity="0.5" clip-path="url(#clip0_299353_4736)">
                    <path d="M10 12.5L15 17.5L20 12.5" stroke={isOpen ? '#76F00B' : '#F0F0F0'} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_299353_4736">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export default ArrowAccordion