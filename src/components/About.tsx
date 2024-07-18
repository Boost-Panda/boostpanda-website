import pilot from "../assets/pilot.png";
// import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container pt-20 pb-20 sm:py-16"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[250px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pt-20">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Supercharge{" "}
                </span>
                Your Business with Tailored AI Solutions. Get Started Today!
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              BoostPanda offers AI tools to boost your business. From custom chatbots to smart data insights, we help you work better. Whether you’re a startup or a big company, our AI tools and support help you grow. See how BoostPanda can help your business today.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
