import CalendlyWidget from '../../../components/Calendly';

export const CTA = () => {
  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     console.log("Subscribed!");
  //   };

  return (
    <>
      <section id="earlyAccess">
        <hr className="w-11/12 mx-auto" />

        <div className="container py-24 sm:py-10 sm:p-4 md:px-4 lg:px-16 xl:px-16">
          <h3 className="text-center text-3xl md:text-4xl font-bold">
            Let's Get{' '}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Started</span>{' '}
          </h3>
          <p className="text-xl text-muted-foreground text-center mt-4 mb-8">LET’S DISCUSS YOUR CLINIC’S NEXT STEPS!</p>
          <p className="text-center block text-muted-foreground underline">
            <a href="mailto:hello@boostpanda.ai">hello@boostpanda.ai</a>
          </p>
        </div>
        <CalendlyWidget />
        <hr className="w-11/12 mx-auto" />
      </section>
    </>
  );
};
