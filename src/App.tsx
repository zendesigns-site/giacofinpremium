import { useState } from 'react';
import Navigation from './components/Navigation';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && <Layout1 />}
      {currentTab === 1 && <Layout2 />}
      {currentTab === 2 && <Layout3 />}
      {currentTab === 3 && <Layout4 />}
      {currentTab === 4 && <Layout5 />}
    </>
  );
}
