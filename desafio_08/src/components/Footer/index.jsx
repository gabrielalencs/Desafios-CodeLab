

const Footer = () => {
    return (
        <footer className='bg-blue-primary'>
            <div className="container !mt-40 p-14 text-center">
                <p className="md:text-lg">
                    Desafio da comunidade
                    <a href="https://github.com/iuricode/desafios-frontend"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue-secondary font-medium"> CodeLab</a>.
                    <br className="md:hidden" /> Desenvolvido por
                    <a
                        href="https://github.com/gabrielalencs"
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-blue-secondary font-medium"> Gabriel de Alencar</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer