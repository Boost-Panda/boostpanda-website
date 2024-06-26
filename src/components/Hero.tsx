import { Button } from './ui/button';
// import { buttonVariants } from "./ui/button";
import { HeroCards } from './HeroCards';
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center pt-20 md:py-20 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Boost Your Business with Smart AI Solutions
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              {' '}
              BOTTERFLY
            </span>{' '}
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Maximize Efficiency, Streamline Workflows. Harness AI to Drive Productivity and Project Success.
        </p>

        <div>
          <div className="space-y-4 md:space-y-2 md:space-x-4 mb-4">
            <a
              rel="noreferrer noopener"
              href="#features"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Features
            </a>
            <a
              rel="noreferrer noopener"
              href="#earlyAccess"
              className="text-primary transition-all border-primary hover:border-b-2 pl-1"
            >
              Contact
            </a>
          </div>
          <Button className="w-full md:w-1/3">
            <a href="#earlyAccess">Get Early Access</a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
