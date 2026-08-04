import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import TrustSection from './components/sections/TrustSection';
import ServicesSection from './components/sections/ServicesSection';
import WhatsAppFab from './components/sections/WhatsAppFab';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      {/* Subsequent sections will be added here in future phases */}
      
      <WhatsAppFab />
    </Layout>
  );
}
