interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Data Encryption',
    answer: 'All data, whether in transit or at rest, is encrypted to safeguard against unauthorized access.',
    value: 'item-1',
  },
  {
    question: 'Access Controls',
    answer:
      'We enforce strict role-based access and require multi-factor authentication to ensure only authorized personnel access your data.',
    value: 'item-2',
  },
  {
    question: 'Regular Audits',
    answer:
      'Continuous monitoring and routine audits keep our systems secure and fully compliant with HIPAA standards.',
    value: 'item-3',
  },
  {
    question: 'Secure Communication',
    answer:
      'Our communications, including emails and messages, are encrypted to prevent interception and ensure confidentiality.',
    value: 'item-4',
  },
  {
    question: 'Data Backup',
    answer:
      'We perform routine data backups and have robust disaster recovery protocols in place to protect and restore data swiftly.',
    value: 'item-5',
  },
  {
    question: '24/7 Support',
    answer:
      'Our dedicated support team is available 24/7 to promptly address any issues and maintain the security of your data.',
    value: 'item-6',
  },
  {
    question: 'Compliance Training',
    answer:
      'Comprehensive HIPAA compliance training is mandatory for all employees to ensure adherence to best practices and regulations.',
    value: 'item-7',
  },
  {
    question: 'Continuous Updates',
    answer:
      'We consistently update and patch our systems to shield against the latest security threats and vulnerabilities.',
    value: 'item-8',
  },
];
const half = Math.ceil(FAQList.length / 2);
const firstHalfFAQs = FAQList.slice(0, half);
const secondHalfFAQs = FAQList.slice(half, FAQList.length);

export const Compliance = () => {
  return (
    <section id="faq" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 px-6 text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">HIPAA</span>{' '}
        Compliance
      </h2>
      <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Your data is safe with us. BoostPanda is fully compliant with the Health Insurance Portability and
        Accountability Act (HIPAA).
      </p>

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
