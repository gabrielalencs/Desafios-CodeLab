import Input from '../Input/Input';
import './ContainerLogin.css';
import iconGoogle  from '../../assets/google.png';
import Button from '../Button/Button';

const Login = () => {


    return (
        <div className='containerLogin'>
            <span className='welcomeTitle'>Bem-vindo de volta</span>
            <h2 className='mainTitle'>Faça login na sua conta</h2>

            <form>
                <div className='containerInformationLogin'>
                    <Input
                        type='email'
                        label='E-mail'
                        id='email'
                        placeholder='exemplo@gmail.com'
                        required
                    />

                    <Input
                        type='password'
                        label='Senha'
                        id='password'
                        placeholder='0123456789'
                        required
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

                <div className='containerButtons'>
                    <Button text='Entrar na conta' />
                    <Button icon={iconGoogle} text='Ou faça login com o Google' />
                </div>
            </form>

            <p className='noAccount'>
                Não tem uma conta? <span>Cadastre-se</span>
            </p>
        </div>
    )
}

export default Login