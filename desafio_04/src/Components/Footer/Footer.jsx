import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="footer-paragraph">
                Desafio da comunidade
                <a href="https://github.com/iuricode/desafios-frontend" 
                    target='_blank' 
                    rel="noopener noreferrer"> CodeLab</a>. 

                <br /> Desenvolvido por

                <a 
                    href="https://github.com/gabrielalencs" 
                    target='_blank' 
                    rel="noopener noreferrer"> Gabriel de Alencar</a>.
            </p>
        </footer>
    )
}

export default Footer