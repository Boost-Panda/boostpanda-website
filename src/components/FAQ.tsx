interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'How can BoostPanda help my business?',
    answer:
      'BoostPanda uses advanced AI to create solutions that improve your business. We help make your work faster, smarter, and more competitive.',
    value: 'item-1',
  },
  {
    question: 'Why do I need BoostPanda?',
    answer:
      'BoostPanda customizes AI solutions to fit your needs. This helps you work more efficiently, make better decisions, and use resources wisely. Our expertise covers many industries and we strive to make our services meet your business goals.',
    value: 'item-2',
  },
  {
    question: 'Do you offer customization?',
    answer:
      'BoostPanda works closely with you to understand your unique needs and challenges. We design and implement AI solutions specifically tailored to fit your business, ensuring the best results and maximum impact.',
    value: 'item-3',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, BoostPanda offers ongoing support and maintenance for all AI solutions we deploy. We make sure your systems stay updated and continue to meet your business needs.',
    value: 'item-4',
  },
];
const half = Math.ceil(FAQList.length / 2);
const firstHalfFAQs = FAQList.slice(0, half);
const secondHalfFAQs = FAQList.slice(half, FAQList.length);

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 px-6">
        BoostPanda 101: What You{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Need to Know</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 px-8">
        <div>
          {firstHalfFAQs.map(({ question, answer, value }: FAQProps) => (
            <div className="pb-6 pt-5 text-xl" key={value}>
              <h2 className="font-bold text-xl">{question}</h2>
              <p>{answer}</p>
            </div>
          ))}
        </div>

        <div>
          {secondHalfFAQs.map(({ question, answer, value }: FAQProps) => (
            <div className="pb-6 pt-5" key={value}>
              <h2 className="font-bold text-xl">{question}</h2>
              <p className="text-xl">{answer}</p>
            </div>
          ))}
        </div>
      </div>

      <h3 className="font-medium mt-4 px-8">
        <span className="text-muted-foreground"> Still have questions? </span>
        <a
          rel="noreferrer noopener"
          href="#earlyAccess"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
