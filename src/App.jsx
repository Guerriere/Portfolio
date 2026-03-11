import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LangProvider } from './context/LangContext';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';
import Learning from './pages/Learning';
import Contact  from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <div className="page-enter" style={{ minHeight: 'calc(100vh - 58px)' }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<PageWrapper><Home     /></PageWrapper>} />
          <Route path="/about"    element={<PageWrapper><About    /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/learning" element={<PageWrapper><Learning /></PageWrapper>} />
          <Route path="/contact"  element={<PageWrapper><Contact  /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </LangProvider>
  );
}
