import { About } from '@/components/About';
// import { Cta } from "@/components/Cta";
import { FAQ } from '@/components/FAQ';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
// import { HowItWorks } from "@/components/HowItWorks";
// import { Newsletter } from "@/components/Newsletter";
// import { Pricing } from "@/components/Pricing";
// import { Services } from "@/components/Services";
import { Sponsors } from '@/components/Sponsors';
// import { Team } from "@/components/Team";
// import { Testimonials } from "@/components/Testimonials";
import '@/App.css';
import { EarlyAccess } from '@/components/EarlyAccess';
import { Integrations } from '@/components/Integrations';

function App() {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <Features />
      {/* <Newsletter /> */}
      {/* <HowItWorks /> */}
      <Integrations />
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <EarlyAccess />
      <FAQ />
    </>
  );
}

export default App;
