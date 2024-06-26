interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is Botterfly easy to integrate?",
    answer:
      "Absolutely! Easily integrate Botterfly with Jira, MS Teams, Slack, ClickUp, Monday.com and other project management tools in just a few clicks.",
    value: "item-1",
  },
  {
    question: "Can I customize Botterfly?",
    answer:
      "Yes! Botterfly is designed to adapt to your team’s unique needs and workflow. Set your preferences and let Botterfly work its magic.",
    value: "item-2",
  },
  {
    question: "What is the AI Project Management?",
    answer:
      "The AI Project Manager automates your daily agenda and flags critical tasks. It also alerts you on resource needs, freeing you to focus on strategy.",
    value: "item-3",
  },
  {
    question: "How much does it cost?",
    answer:
      "During our pre-launch, you can sign up for early access and enjoy all of Botterfly’s powerful features absolutely free!",
    value: "item-4",
  },
];
const half = Math.ceil(FAQList.length / 2);
const firstHalfFAQs = FAQList.slice(0, half);
const secondHalfFAQs = FAQList.slice(half, FAQList.length);

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 px-6">
        Botterfly 101: What You{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Need to Know
        </span>
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
       <span className="text-muted-foreground"> Still have questions?{" "}</span>
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
