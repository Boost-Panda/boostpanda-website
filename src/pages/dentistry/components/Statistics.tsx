import { useTheme } from '@/components/theme-provider';

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: 'Online Presence',
      description: 'Hard for people to find you on the internet.',
    },
    {
      quantity: 'Collecting Social Proof',
      description: 'Hard to get patient reviews and testimonials.',
    },
    {
      quantity: 'Too Many Admin Tasks',
      description: 'Hard to manage and takes too much time.',
    },
  ];

  const { theme } = useTheme();

  return (
    <section id="statistics">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {stats.map(({ quantity, description }: statsProps, index: number) => (
          <div key={description} className="space-y-2 text-left mt-8">
            <h2 className={`text-7xl font-bold mb-[-2.4rem] ${theme == 'light' ? 'text-slate-200' : 'text-slate-800'}`}>
              0{index + 1}
            </h2>
            <h2 className="text-2xl font-bold pl-4">{quantity}</h2>
            <p className="text-xl text-muted-foreground pl-4">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
