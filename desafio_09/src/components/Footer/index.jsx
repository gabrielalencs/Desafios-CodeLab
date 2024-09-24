import XboxLogo from '../../assets/images/logo-xbox.png';

const Footer = () => {
    return (
        <footer className='mt-32 flex flex-col px-8 gap-10 py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={XboxLogo} alt="Xbox Logo" />
                </div>

                <div className='text-[#777777] text-right flex flex-col md:text-lg lg:flex-row lg:gap-14'>
                    <span>© Microsoft 2024</span>
                    <span>Todos os direitos reservados</span>
                </div>
            </div>

            <div className='mt-12 text-center'>
                <p className="text-white md:text-lg">
                    Desafio da comunidade
                    <a href="https://github.com/iuricode/desafios-frontend"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-green-primary font-medium"> CodeLab</a>.
                    <br className="md:hidden" /> Desenvolvido por
                    <a
                        href="https://github.com/gabrielalencs"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-green-primary font-medium"> Gabriel de Alencar</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer