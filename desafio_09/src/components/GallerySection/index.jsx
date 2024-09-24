import GameImageOne from '../../assets/images/1.png';
import GameImageTwo from '../../assets/images/2.png';
import GameImageThree from '../../assets/images/3.png';
import GameImageFour from '../../assets/images/4.png';

const GallerySection = () => {

    const galleryImages = [
        GameImageOne,
        GameImageTwo,
        GameImageThree,
        GameImageFour
    ];

    return (
        <section className='mt-32 md:mt-44 grid gap-10 px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
            {
                galleryImages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Imagem do jogo ${index + 1}`}
                        className='w-full max-w-[300px] sm:mx-auto md:max-w-[350px]'
                    />
                ))
            }
        </section>
    )
}

export default GallerySection