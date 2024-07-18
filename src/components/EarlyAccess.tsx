import CalendlyWidget from "./Calendly";

export const EarlyAccess = () => {
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log("Subscribed!");
//   };

  return (
    <>
        <section id="earlyAccess">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-10 sm:p-4 md:px-4 lg:px-16 xl:px-16">
        <h3 className="text-center text-3xl md:text-4xl font-bold">{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Drive 
          </span>
          {" "}
          Your Business Forward with AI Solutions
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Schedule a consultation to see how our custom AI and LLM services can streamline your operations. Book your session through our Calendly link and move closer to achieving your business goals.
        </p>
        <p className="text-center block text-muted-foreground underline">
            <a href="mailto:hello@boostpanda.ai">
            hello@boostpanda.ai
            </a>
        </p>
      </div>
    <CalendlyWidget />
      <hr className="w-11/12 mx-auto" />
    </section>
    </>
  );
};
