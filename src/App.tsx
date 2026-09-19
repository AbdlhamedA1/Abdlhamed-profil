import React from 'react';
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';
import { ThemeContext, useThemeProvider } from './hooks/useTheme';
import { BackgroundEffects } from './components/layout/BackgroundEffects';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Training } from './components/sections/Training';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const languageContextValue = useLanguageProvider();
  const themeContextValue = useThemeProvider();

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LanguageContext.Provider value={languageContextValue}>
        <div className="relative min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text selection:bg-accent/20 selection:text-accent overflow-x-hidden transition-colors duration-300">
          {/* Background Atmosphere */}
          <BackgroundEffects />

          {/* Global UI Overlays */}
          <ScrollProgress />
          <CustomCursor />

          {/* Floating Navigation Header */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Training />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
