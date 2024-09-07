import DogFoodImageOne from '../../assets/images/dog-3.png';
import DogFoodImageTwo from '../../assets/images/dog-4.png';
import DogFoodImageThree from '../../assets/images/dog-5.png';

import Button from '../Button';

const ProductsSection = () => {

    const productInformation = [
        { 
            id: 1,
            image: DogFoodImageOne,
            title: 'Special Dog',
            description: 'Oferece uma refeição completa rica em proteínas e vitaminas.'
        },
        { 
            id: 2,
            image: DogFoodImageTwo,
            title: 'Biscrok',
            description: 'Biscoitos crocantes em formato de ossos com cálcio e ômega 6.'
        },
        { 
            id: 3,
            image: DogFoodImageThree,
            title: 'Drools',
            description: 'Pedaços reais de fígado de frango e frango em molho.'
        },
    ]


    return (
        <section className='container !mt-28 !mb-40 px-10 flex flex-col gap-24 lg:flex-row lg:items-end'>
            {
                productInformation.map(product => (
                    <div key={product.id} className='max-w-320 mx-auto'>
                        <div>
                            <img src={product.image} alt="imagem do produto" />
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl md:text-3xl'>{product.title}</h3>
                            <p className='mt-3 md:text-lg'>{product.description}</p>
                            <Button text='Comprar Agora' width='w-full' />
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProductsSection;