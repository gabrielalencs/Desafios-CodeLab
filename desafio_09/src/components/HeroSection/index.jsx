import XboxImage from '../../assets/images/xbox.png';

const HeroSection = () => {
    return (
        <section className='mt-16 mb-96'>
            <div className='text-center'>
                <h1 className='text-5xl text-white font-semibold md:text-7xl'>Xbox series X</h1>
                <h2 className='text-green-primary font-semibold uppercase mt-3 tracking-[.3px] md:text-lg lg:text-xl'>pedido antecipado</h2>
            </div>

            <div className='max-w-[900px] mx-auto mt-10 relative'>
                <div className='after:content-[""] after:absolute after:top-0  after:w-[67%] after:left-[9.3rem] after:h-full after:inline-block after:bg-gradient-to-b after:from-[#00000000] after:to-[#0f130eda]'></div>
                <img src={XboxImage} alt="Imagem de um Xbox" className='after' />
            </div>
        </section>
    )
}

export default HeroSection;