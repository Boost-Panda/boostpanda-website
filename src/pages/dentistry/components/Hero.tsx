import { Button } from '@/components/ui/button';
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from '@/components/HeroCards';
import { useTheme } from '@/components/theme-provider';

import DentalHeroImageLight from '@/assets/dental-hero.png';
import DentalHeroImageDark from '@/assets/dental-hero-dark.png';
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="container grid lg:grid-cols-2 place-items-center pt-20 gap-10">
      <div className="text-center lg:text-left xs:text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              {' '}
              Dental
            </span>{' '}
            Clinic Solutions
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground mx-auto lg:mx-0">
          Simplify your dental clinic with BoostPanda's smart tools.
        </p>
        <div className="gap-4 pb-4 pt-8 flex flex-col justify-center w-full content-left flex-wrap">
          <Button asChild variant="secondary" className="w-full md:w-64">
            <a href="#services">See Features</a>
          </Button>
          <Button asChild className="w-full md:w-64">
            <a href="#earlyAccess">Talk to Us</a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <img
          src={theme === 'light' ? DentalHeroImageLight : DentalHeroImageDark}
          alt="Dental Clinic Solutions"
          className="w-full h-auto"
        />
      </div>

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
