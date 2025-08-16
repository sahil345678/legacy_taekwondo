import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import KeyInfo from './components/KeyInfo';
import Gallery from './components/Gallery';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <KeyInfo />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
