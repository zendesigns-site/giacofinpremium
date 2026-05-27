import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';

export default function App() {
  return (
    <Router>
      {/* Navigation non ha più bisogno di currentTab e setCurrentTab */}
      <Navigation />
      
      <Routes>
        {/* Associamo ogni URL al suo Layout */}
        <Route path="/" element={<Layout1 />} />
        <Route path="/pagina-2" element={<Layout2 />} />
        <Route path="/pagina-3" element={<Layout3 />} />
        <Route path="/pagina-4" element={<Layout4 />} />
        <Route path="/pagina-5" element={<Layout5 />} />
      </Routes>
    </Router>
  );
}
