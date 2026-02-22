import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export type SectionId = 'home' | 'skills' | 'projects' | 'timeline' | 'contact';

interface SectionRef {
  id: SectionId;
  ref: React.RefObject<HTMLElement>;
}

interface NavigationContextProps {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
  registerSection: (id: SectionId, ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: (id: SectionId) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const sectionRefs = useRef<Record<SectionId, React.RefObject<HTMLElement>>>({
    home: React.createRef<HTMLElement>(),
    skills: React.createRef<HTMLElement>(),
    projects: React.createRef<HTMLElement>(),
    timeline: React.createRef<HTMLElement>(),
    contact: React.createRef<HTMLElement>(),
  });

  // Scroll spy for web
  useScrollSpy(sectionRefs.current, (id) => setActiveSection(id as SectionId));

  const registerSection = useCallback((id: SectionId, ref: React.RefObject<HTMLElement>) => {
    sectionRefs.current[id] = ref;
  }, []);

  const scrollToSection = useCallback((id: SectionId) => {
    const ref = sectionRefs.current[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, registerSection, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within a NavigationProvider');
  return ctx;
};
