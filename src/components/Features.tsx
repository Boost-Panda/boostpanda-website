// import { Badge } from "./ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import chatbotLightHalf from '../assets/chatbot-light-half.png';
import chatbotDarkHalf from '../assets/chatbot-dark-half.png';
import promptLight from '../assets/prompt-light.svg';
import promptDark from '../assets/prompt-dark.svg';
// import screen2 from '../assets/screen2.png';
import screen1 from '../assets/screen3.png';
// import screen4 from '../assets/screen4.png';
import { Badge } from './ui/badge';

import { useTheme } from '@/components/theme-provider';

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  imageLight: string;
  imageDark: string;
}

const features: FeatureProps[] = [
  {
    id: 'custom-chatbots',
    title: '*Chatbots* for Better Customer Interaction',
    description:
      'Make every interaction easier! BoostPanda’s custom chatbots answer questions quickly and fit right into your systems. Better customer service, smoother internal processes, and happier people all around.',
    imageLight: chatbotLightHalf,
    imageDark: chatbotDarkHalf,
    keywords: [
      'Custom Chatbots',
      'Customer Service Automation',
      'Customer Experience Automation',
      'System Integration',
    ],
  },
  {
    id: 'prompt-writing',
    title: '*Optimize* AI Responses',
    description:
      'Improve your AI’s performance! BoostPanda’s prompt writing service fine-tunes your AI for clear and relevant responses. Enhance interactions and get the most out of your AI.',
    imageLight: promptLight,
    imageDark: promptDark,
    keywords: ['Prompt Engineering', 'Response Optimization', 'Retrieval Augmented Generation'],
  },
  {
    id: 'ai-models',
    title: '*Custom* AI Models',
    description:
      'One size doesn’t fit all! BoostPanda customizes AI models to meet your specific needs. Whether you’re in a niche market or have unique data, our solutions deliver precise insights and results.',
    imageLight: screen1,
    imageDark: '',
    keywords: ['Custom AI Models', 'AI Fine-Tuning', 'Model Training', 'Data Customization'],
  },
  {
    id: 'analytics',
    title: 'Data Analysis for *Better Decisions*',
    description:
      'Make informed decisions with ease! BoostPanda’s data analysis services help you understand trends and make informed decisions. Turn your data into actionable insights and steer your business in the right direction.',
    imageLight: screen1,
    imageDark: '',
    keywords: ['Data Analysis Services', 'Predictive Analytics', 'Trend Analysis', 'Decision Support'],
  },
  {
    id: 'llmops',
    title: '*Simplify* AI Management',
    description:
      'Streamline your AI operations! BoostPanda’s services manage the setup and maintenance of your AI systems. From initial setup to advanced processing, we ensure your AI runs smoothly and efficiently.',
    imageLight: screen1,
    imageDark: '',
    keywords: ['LLMOps', 'AI Operations Management', 'Data Processing Services'],
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
            className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center pb-20"
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
              <p className="pt-4 text-xl">{feature.description}</p>
              <div className="gap-x-2 gap-y-2 mt-4 flex flex-wrap ">
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
