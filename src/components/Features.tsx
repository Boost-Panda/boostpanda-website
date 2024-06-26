// import { Badge } from "./ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    id:"memory-assistance",
    title: "Maximize Efficiency with *Timeline Optimization*",
    description:
      "Take control of time! Botterfly's Timeline Optimization dynamically adjusts project schedules based on real-time data, ensuring tasks are completed efficiently. Streamline your project timeline for optimal performance, every step of the way.",
    image: screen1,
  },
  {
    id:"ai-driven-insights",
    title: "Optimize Your Projects with *AI-Driven Insights*",
    description:
      "From sprint planning to Kanban boards, our Project Status & Retrospective Assistance offers data-driven checklists, guided templates, and actionable insights. Make informed decisions and identify trends effortlessly.",
    image: screen2,
  },
  {
    id:"memory",
    title: "Unleash the Power of *Memory Assistance*",
    description:
      "Forget about forgetting! Botterfly's Knowledge Management archives every crucial decision, conversation, and project update. Access your team's collective memory through a natural chatbot interface.",
    image: screen3,
  },
  {
    id:"project-management",
    title: "Your AI Project Manager for *Daily Success*",
    description:
      "Get meeting agenda snapshots, talking points, interactive regular project updates, and resource allocation alerts. Botterfly's AI Project Manager keeps you focused and efficient.",
    image: screen4,
  }
];

export const Features = () => {
  return (
    <section id="features" className="container py-10">
      {features.map((feature, index) => {
        const [firstPart, secondPart] = feature.title.split('*');
        return (
          <div id={feature.id} key={index} className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center pb-20">
            <img src={feature.image} alt={feature.title} className={`w-full rounded-xl shadow-lg h-auto ${index % 2 === 1 ? 'xl:order-last lg:order-last md:order-last sm:order-none' : ''}`} />
            <div>
              <h2 className="font-bold text-4xl">
                {firstPart}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {secondPart}
                </span>
              </h2>
              <p className="pt-4 text-xl">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};