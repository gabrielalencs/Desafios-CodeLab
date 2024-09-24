import LogoImage from '../../assets/images/logo.svg';
import DogHeroImage from '../../assets/images/dog-1.png';

import Button from '../Button';


const HeroSection = () => {
    return (
        <section className='container py-20 px-5 relative xl:flex xl:justify-between xl:items-center xl:pb-32'>
            <div className='text-center relative z-20 max-w-382 mx-auto xl:max-w-full xl:text-left'>
                <img 
                    src={LogoImage} 
                    alt="Logo da HelpDog" 
                    className='mx-auto xl:mx-0'
                />
                <h1 className='mt-12 text-3xl md:text-4xl xl:text-5xl'>Ajude quem realmente precisa da sua ajuda.</h1>
                <p className='mt-4 px-5 md:px-0 md:mt-6 md:text-xl xl:text-xl xl:max-w-382'>
                    Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
                </p>
                <Button text='Ajudar Agora' />
            </div>

            <div className='hidden xl:block xl:relative xl:left-44 xl:bottom-10 xl:after:content-[""] xl:after:block xl:after:absolute xl:after:right-[-70px] xl:after:top-20 xl:z-10 xl:after:bg-yellow-primary xl:after:w-850 xl:after:h-400 xl:after:rounded-500 xl:after:rotate-[-19deg]'>
                <img 
                    src={DogHeroImage} 
                    alt="Imagem de um cachorro"
                    className='relative z-20 w-1300 right-2 top-[26px]'
                />
            </div>
        </section>
    )
}

export default HeroSection;