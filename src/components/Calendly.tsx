import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/nauroz/botterfly-early-adopter-program?hide_event_type_details=1" 
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};

export default CalendlyWidget;