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
        <h3 className="text-center text-3xl md:text-4xl font-bold">
        Get {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Early Access 
          </span>
          {" "}
          and Lead the Future of AI-Driven Project Management
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Don't just follow the trends, set them. By getting early access to Botterfly, you become a part of a select group that's revolutionizing project management. Gain a competitive edge and elevate your team's performance before everyone else catches on. Click below and be the future with Botterfly!
        </p>
        <p className="text-center block text-muted-foreground underline">
            <a href="mailto:hello@botterfly.app">
            hello@botterfly.app
            </a>
        </p>
      </div>
    <CalendlyWidget />
      <hr className="w-11/12 mx-auto" />
    </section>
    </>
  );
};
