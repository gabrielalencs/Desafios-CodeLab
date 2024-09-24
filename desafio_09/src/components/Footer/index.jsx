import XboxLogo from '../../assets/images/logo-xbox.png';

const Footer = () => {
    return (
        <footer className='mt-32 px-8 flex justify-between items-center gap-10 py-16'>
            <div>
                <img src={XboxLogo} alt="Xbox Logo" />
            </div>

            <div className='text-[#777777] text-right flex flex-col md:text-lg lg:flex-row lg:gap-14'>
                <span>© Microsoft 2024</span>
                <span>Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer