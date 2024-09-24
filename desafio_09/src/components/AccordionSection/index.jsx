import { useState } from "react";

import ArrowAccordion from "../ArrowAccordion";


const AccordionSection = () => {
    const questions = [
        {
            id: 134,
            question: 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
            answer: 'Sim, a maioria dos jogos do Xbox One, Xbox 360 e Xbox original é compatível com o Xbox Series X.'
        },
        {
            id: 275,
            question: 'O que está incluído no Xbox Series X?',
            answer: 'O Xbox Series X vem com um console, um controle sem fio, um cabo HDMI e um cabo de alimentação.'
        },
        {
            id: 352,
            question: 'Como sei se minha TV é compatível com 4K?',
            answer: 'Verifique as especificações da sua TV no manual ou nas configurações. TVs compatíveis com 4K geralmente indicam isso no modelo ou nas opções de resolução.'
        }
    ];

    const [openQuestionId, setOpenQuestionId] = useState(null);

    const toggleQuestion = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    
    return (
        <section className='mt-32 md:mt-44 px-8'>
            <h2 className='text-4xl text-white font-semibold text-center md:text-5xl lg:text-left'><span className='text-green-primary'>Perguntas</span> frequentes</h2>
            <div className='mt-16 flex flex-col gap-8'>
                {questions.map((item) => (
                    <div key={item.id} className='mb-4 pb-6 border-[1px] border-t-0 border-r-0 border-l-0 border-b-[#2E2E2E]'>
                        <div className='flex justify-between gap-20 cursor-pointer' onClick={() => toggleQuestion(item.id)}>
                            <h3 className='text-white md:text-lg lg:text-xl'>{item.question}</h3>
                            <div>
                                <ArrowAccordion isOpen={openQuestionId === item.id} />
                            </div>
                        </div>

                        <div className={`duration-300 ${openQuestionId === item.id ? 'mt-4 h-max overflow-visible' : 'h-0 mt-0 overflow-hidden'}`}>
                            <p
                                className={`text-[#C0C0C0] duration-300 text-sm md:text-md lg:text-lg ${openQuestionId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AccordionSection;