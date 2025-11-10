import React, { useState } from 'react';
import HeroIntro from './components/HeroIntro';
import MacbookExperience from './components/MacbookExperience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      {!entered ? (
        <HeroIntro onEnter={() => setEntered(true)} />
      ) : (
        <MacbookExperience show={entered} name="Your Name" />
      )}
      <Footer />
    </div>
  );
}

export default App;
