import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import Hero from './components/Hero/Hero';
import WhatWeBuild from './components/WhatWeBuild/WhatWeBuild';
import Products from './components/Products/Products';
import Approach from './components/Approach/Approach';
import Results from './components/Results/Results';
import AboutContact from './components/AboutContact/AboutContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <Products />
        <Approach />
        <Results />
        <AboutContact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
