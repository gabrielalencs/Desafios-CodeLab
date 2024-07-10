import Input from '../Input/Input'
import './ContainerLogin.css'

const Login = () => {
    return (
        <div>
            <span>Bem-vindo de volta</span>
            <h2>Faça login na sua conta</h2>

            <div>
                <div>
                    <Input
                        type='email'
                        label='E-mail'
                        id='email'
                        placeholder='exemplo@gmail.com'
                    />
                </div>

                <div>
                    <Input
                        type='password'
                        label='Senha'
                        id='password'
                        placeholder='0123456789'
                    />
                </div>
            </div>
        </div>
    )
}

export default Login