// import { Badge } from "./ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import boostLight from '@/assets/boost-light.png';
import boostDark from '@/assets/boost-dark.png';
import engageLight from '@/assets/engage-light.svg';
import engageDark from '@/assets/engage-dark.svg';
import streamlineLight from '@/assets/streamline-light.svg';
import streamlineDark from '@/assets/streamline-dark.svg';
// import promptLight from '@/assets/prompt-light.svg';
// import promptDark from '@/assets/prompt-dark.svg';
// import screen2 from '@/assets/screen2.png';
// import screen1 from '@/assets/screen3.png';
// import screen4 from '@/assets/screen4.png';
import { Badge } from '@/components/ui/badge';

import { useTheme } from '@/components/theme-provider';

interface FeatureProps {
  id: string;
  title: string;
  description: JSX.Element;
  keywords: string[];
  imageLight: string;
  imageDark: string;
}

const boostFeatures = [
  {
    title: 'Local SEO and Reputation',
    description: 'Get noticed and build trust with local SEO and review replies.',
  },
  {
    title: 'Social Media and Google Maps',
    description: 'Optimize and increase visibility on social media and Google Maps.',
  },
  {
    title: 'Professional Websites',
    description: 'Create user-friendly websites with online booking.',
  },
  {
    title: 'Smart Chatbot',
    description: 'Answer questions and schedule appointments 24/7.',
  },
];

const engageFeatures = [
  {
    title: 'Appointment Booking',
    description: 'Simplify scheduling with custom forms and automated reminders.',
  },
  {
    title: 'Surveys and Referrals',
    description: 'Boost engagement with easy surveys and rewarding referral programs.',
  },
];

const streamlineFeatures = [
  {
    title: 'Automate Tasks',
    description: 'Save over 15 hours weekly and enhance tracking with AI-driven automation.',
  },
  {
    title: 'Unified Dashboard',
    description: 'Centralize management with a clear overview of tasks and communications.',
  },
  {
    title: 'Smart Chatbot for Staff',
    description: 'Automate queries and streamline operations to boost staff efficiency.',
  },
];

const features: FeatureProps[] = [
  {
    id: 'boost',
    title: '*Boost*',
    description: (
      <>
        {boostFeatures.map(({ title, description }: { title: string; description: string }, index: number) => (
          <div className="space-y-2 text-left mt-8" key={index}>
            <h2 className="text-xl font-bold pl-4">{title}</h2>
            <p className="text-lg text-muted-foreground pl-4">{description}</p>
          </div>
        ))}
      </>
    ),
    imageLight: boostLight,
    imageDark: boostDark,
    keywords: [],
  },
  {
    id: 'engage',
    title: '*Engage*',
    description: (
      <>
        {engageFeatures.map(({ title, description }: { title: string; description: string }, index: number) => (
          <div className="space-y-2 text-left mt-8" key={index}>
            <h2 className="text-xl font-bold pl-4">{title}</h2>
            <p className="text-lg text-muted-foreground pl-4">{description}</p>
          </div>
        ))}
      </>
    ),
    imageLight: engageLight,
    imageDark: engageDark,
    keywords: [],
  },
  {
    id: 'streamline',
    title: '*Streamline*',
    description: (
      <>
        {streamlineFeatures.map(({ title, description }: { title: string; description: string }, index: number) => (
          <div className="space-y-2 text-left mt-8" key={index}>
            <h2 className="text-xl font-bold pl-4">{title}</h2>
            <p className="text-lg text-muted-foreground pl-4">{description}</p>
          </div>
        ))}
      </>
    ),
    imageLight: streamlineLight,
    imageDark: streamlineDark,
    keywords: [],
  },
];

export const Features = () => {
  const { theme } = useTheme();

  return (
    <section id="services" className="container py-10">
      {features.map((feature, index) => {
        const highlightedPart = feature.title.match(/\*(.*?)\*/)?.[1];
        const normalPart = feature.title.replace(/\*(.*?)\*/g, '');
        const normalIndex = feature.title.indexOf(normalPart);

        return (
          <div
            id={feature.id}
            key={index}
            className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 gap-x-20 items-center pb-20"
          >
            <img
              src={theme === 'light' ? feature.imageLight : feature.imageDark}
              alt={feature.title}
              className={`w-full rounded-xl h-auto ${index % 2 === 1 ? 'xl:order-last lg:order-last md:order-last sm:order-none' : ''}`}
            />
            <div>
              <h2 className="font-bold text-4xl">
                {normalIndex === 0 ? (
                  <>
                    {normalPart}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                      {highlightedPart}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                      {highlightedPart}
                    </span>
                    {normalPart}
                  </>
                )}
              </h2>
              <p className="text-xl">{feature.description}</p>
              <div className="gap-x-2 gap-y-2 mt-8 flex flex-wrap ">
                {feature.keywords.map((keyword, index) => {
                  return (
                    <Badge className="text-sm font-normal" variant="outline" key={index}>
                      {keyword}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
