import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';

export default function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="pt-[80px] lg:pt-[90px]">
        {currentTab === 0 && <Layout2 />}
        {currentTab === 1 && <Layout3 />}
      </main>
      <Footer />
    </>
  );
}
