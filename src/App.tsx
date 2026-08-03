import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import WhatsAppFab from './components/sections/WhatsAppFab';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      {/* Subsequent sections will be added here in future phases */}
      
      <WhatsAppFab />
    </Layout>
  );
}
