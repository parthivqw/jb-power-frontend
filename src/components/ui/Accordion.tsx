import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

function AccordionItem({ question, answer, isOpen, onClick, id }: AccordionItemProps) {
  const answerId = `accordion-answer-${id}`;
  const buttonId = `accordion-button-${id}`;

  return (
    <div className={`border border-black/5 rounded-xl mb-4 transition-colors duration-300 ${isOpen ? 'bg-jb-white-warm shadow-sm border-jb-gold/30' : 'bg-white hover:bg-jb-white-warm/50'}`}>
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-jb-gold/50 rounded-xl"
      >
        <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-jb-navy' : 'text-jb-charcoal'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-jb-sand text-jb-gold-deep transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
          </svg>
        </span>
      </button>
      
      <div 
        id={answerId} 
        role="region" 
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-jb-charcoal/80 leading-relaxed text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { q: string; a: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`faq-${index}`}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
