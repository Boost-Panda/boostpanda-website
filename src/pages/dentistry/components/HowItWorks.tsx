import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { PluginIcon, MemoryIcon, ArtificalIntelligenceIcon } from '@/components/Icons';

// import { Rocket } from 'lucide-react';

interface FeatureProps {
  // icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    // icon: <Rocket className="text-primary w-8 h-8" />,
    title: 'Boost',
    description: 'User-friendly websites, effective local SEO, reputation management, and optimized online presence.',
  },
  {
    // icon: <MemoryIcon />,
    title: 'Engage',
    description: 'Custom forms, easy booking, reminders, and improved satisfaction with surveys and referrals.',
  },
  {
    // icon: <ArtificalIntelligenceIcon />,
    title: 'Streamline',
    description: 'Track emails, calls, faxes, and tasks with AI, all in one easy dashboard.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        The Problems We{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Solve</span>
        {/* Step-by-Step Guide */}
      </h2>
      {/* <h3 className="text-2xl font-bold mb-2 mt-2 text-center">Simplified, Streamlined, Supercharged</h3> */}
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Let us organize your clinic while you focus on your patients.
      </p>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="card-title flex items-center gap-x-2">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
