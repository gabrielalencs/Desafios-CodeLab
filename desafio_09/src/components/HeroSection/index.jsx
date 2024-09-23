import XboxImage from '../../assets/images/xbox.png';

const HeroSection = () => {
    return (
        <section className='mt-16'>
            <div className='text-center'>
                <h1 className='text-5xl text-white font-semibold md:text-7xl'>Xbox series X</h1>
                <h2 className='text-green-primary font-semibold uppercase mt-3 tracking-[.3px] md:text-lg lg:text-xl'>pedido antecipado</h2>
            </div>

            <div className='max-w-[900px] mx-auto mt-10'>
                <img src={XboxImage} alt="Imagem de um Xbox" />
            </div>
        </section>
    )
}

export default HeroSection;