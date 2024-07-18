import { Button } from './ui/button';
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from './HeroCards';
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center pt-40 lg:pt-64 md:pb-20 md:pt-40 gap-10">
      <div className="text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline text-center">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              {' '}
              Boost
            </span>{' '}
            Your Business with Smart AI Solutions
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 text-center">
          Our custom AI services, from chatbots to data analytics, help you work smarter, not harder.
        </p>
        <div className="gap-4 pb-4 pt-8 flex flex-col justify-center w-full content-center flex-wrap">
          <Button asChild variant="secondary" className="w-full md:w-64">
            <a href="#services">Explore Our Services</a>
          </Button>
          <Button asChild className="w-full md:w-64">
            <a href="#earlyAccess">Get Early Access</a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
