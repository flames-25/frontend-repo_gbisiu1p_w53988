import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroIntro from './components/HeroIntro';
import MacbookExperience from './components/MacbookExperience';
import ProjectsShowcase from './components/ProjectsShowcase';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      {!entered ? (
        <HeroIntro onEnter={() => setEntered(true)} />
      ) : (
        <main>
          <MacbookExperience />
          <ProjectsShowcase />
        </main>
      )}
    </div>
  );
}
