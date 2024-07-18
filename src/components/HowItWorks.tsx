import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  PluginIcon,
  MemoryIcon,
  ArtificalIntelligenceIcon,
  RecommendationIcon,
} from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PluginIcon />,
    title: "Is BoostPanda easy to integrate?",
    description:
      "Connect BoostPanda with your existing project management tools in just a few clicks. Hassle-free onboarding guaranteed.",
  },
  {
    icon: <MemoryIcon />,
    title: "Memory Assistance",
    description:
      "Archive and recall past decisions, meeting minutes, and project updates. Understand the context behind every action.",
  },
  {
    icon: <ArtificalIntelligenceIcon />,
    title: "AI-Driven Project Management",
    description:
      "Automate daily stand-ups, manage ticket assignments, and get actionable insights through data-driven analytics.",
  },
  {
    icon: <RecommendationIcon />,
    title: "Data-Driven Insights & Recommendations",
    description:
      "Harness data for actionable insights and smarter decisions with BoostPanda. Optimize processes and drive project success.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        How Does BoostPanda{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works?{" "}
        </span>
        {/* Step-by-Step Guide */}
      </h2>
      <h3 className="text-2xl font-bold mb-2 mt-2 text-center">
        Simplified, Streamlined, Supercharged
      </h3>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Integrating BoostPanda is a breeze. With just a few clicks, you can
        connect your existing project management tools like Jira, Asana,
        Monday.com, ClickUp, Slack, MS Teams and more. Our platform is designed
        for hassle-free onboarding, so you can get started in no time.
      </p>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="grid gap-4 card-title">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
