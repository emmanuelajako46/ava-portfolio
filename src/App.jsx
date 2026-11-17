import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
