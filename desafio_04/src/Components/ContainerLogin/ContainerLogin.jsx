import Input from '../Input/Input';
import './ContainerLogin.css';

const Login = () => {
    return (
        <div className='containerLogin'>
            <span className='welcomeTitle'>Bem-vindo de volta</span>
            <h2 className='mainTitle'>Faça login na sua conta</h2>

            <div className='containerInformationLogin'>
                <Input
                    type='email'
                    label='E-mail'
                    id='email'
                    placeholder='exemplo@gmail.com'
                />

                <Input
                    type='password'
                    label='Senha'
                    id='password'
                    placeholder='0123456789'
                />
            </div>
            
            <div className='forgotPassword'>
                <Input
                    type='radio'
                    label='Lembre de mim'
                    id='radio'
                    name='radio'
                />

                <span>Esqueceu sua senha?</span>
            </div>
        </div>
    )
}

export default Login