import DogStoriesImage from '../../assets/images/dog-2.png';

import Button from '../Button';

const DogStoriesSection = () => {
    return (
        <section className='bg-blue-primary'>
            <div className="container mt-10 py-14 xl:flex xl:items-center">
                <div className='max-w-650 mx-auto '>
                    <img src={DogStoriesImage} alt="Dog Image" className='mx-auto w-full xl:relative xl:right-20' />
                </div>
                <div className='text-center px-7 mt-7 max-w-450 mx-auto xl:text-left xl:max-w-full xl:flex-1'>
                    <h2 className='text-2xl md:text-3xl xl:text-4xl'>Os cães falam, mas apenas para quem sabe ouvir.</h2>
                    <p className='mt-6 text-sm xl:text-lg'>
                        Descubra histórias encantadoras, segredos reveladores e a profunda conexão entre humanos e seus leais companheiros. Prepare-se para uma jornada única, onde a linguagem dos cães ganha vida para aqueles que estão sintonizados com o inexplorado mundo canino.
                    </p>
                    <Button text='Saiba Mais' /> 
                </div>
            </div>
        </section>
    )
}

export default DogStoriesSection;