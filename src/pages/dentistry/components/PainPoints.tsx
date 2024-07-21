import pilot from '@/assets/illustrations/organizing-projects.svg';
import { Statistics } from './Statistics';

export const About = () => {
  return (
    <section id="about" className="container pb-20 sm:pb-16">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img src={pilot} alt="" className="w-[250px] object-contain rounded-lg" />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pt-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                What is Your{' '}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Biggest{' '}
                </span>
                Pain Point?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">Which of these problems bothers you the most?</p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};