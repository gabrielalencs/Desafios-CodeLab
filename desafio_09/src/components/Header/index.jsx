import XboxLogo from '../../assets/images/logo-xbox.png';

const Header = () => {
    return (
        <header className='flex flex-col gap-8 py-12 px-7 max-w-450 mx-auto md:max-w-600 xl:max-w-full xl:flex-row xl:justify-between xl:p-16 xl:px-12'>
            <div className='text-center xl:flex xl:items-center xl:gap-16'>
                <div>
                    <img
                        src={XboxLogo}
                        alt="Logo da Xbox"
                        className='w-40 mx-auto'
                    />
                </div>

                <nav className='mt-8 w-10/12 mx-auto flex justify-center min-[400px]:w-full min-[400px]:mx-0 md:justify-start xl:mt-0 '>
                    <ul className='flex justify-center flex-wrap gap-x-5 gap-y-5 items-center min-[400px]:justify-between min-[400px]:gap-2 min-[500px]:gap-5 md:justify-between md:w-full xl:gap-x-7 xl:gap-y-0 '>
                        <li className='navItemLink'>Visão geral</li>
                        <li className='navItemLink'>Jogos</li>
                        <li className='navItemLink'>Galeria</li>
                        <li className='navItemLink'>Unbox</li>
                    </ul>
                </nav>
            </div>

            <div>
                <button
                    type='button'
                    className='bg-green-primary border-2 border-green-primary border-transparent duration-300 text-black py-3 w-full uppercase font-bold tracking-[.3px] hover:bg-transparent hover:text-green-primary hover:border-green-primary xl:px-9'>
                    Ver Disponibilidade
                </button>
            </div>
        </header>
    )
}

export default Header;