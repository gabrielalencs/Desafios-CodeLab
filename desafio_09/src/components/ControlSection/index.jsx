import ControlImage from '../../assets/images/controle-xbox.png';

const ControlSection = () => {
    return (
        <section className='mt-32 mb-96 px-8 md:flex md:gap-14 md:mt-40 md:items-center'>
            <div className='text-center max-w-[770px] mx-auto md:text-left md:flex-1 md:max-w-[500px]'>
                <h2 className='text-4xl text-white font-semibold md:text-5xl lg:text-6xl'>Desempenho <span className='text-green-primary'>aperfeiçoado</span></h2>
                <p className='text-[#C0C0C0] mt-8 text-base md:text-xl'>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
            </div>

            <div className='mt-12 md:flex-1'>
                <img 
                    src={ControlImage} 
                    alt="Imagem do controle do xbox" 
                    className='mx-auto w-full max-w-[300px] md:max-w-[450px]'
                />
            </div>
        </section>
    )
}

export default ControlSection