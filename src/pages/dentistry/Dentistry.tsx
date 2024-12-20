import { About } from './components/PainPoints';
// import { Cta } from "./components/Cta";
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
// import { Services } from "./components/Services";
// import { Sponsors } from '@/components/Sponsors';
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import '@/App.css';
import { CTA } from './components/CTA';
// import { Integrations } from '@/components/Integrations';
import { Compliance } from './components/Compliance';

function Dentistry() {
  return (
    <>
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />

      {/* <Integrations /> */}
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Compliance />
      <CTA />
      <FAQ />
    </>
  );
}

export default Dentistry;
