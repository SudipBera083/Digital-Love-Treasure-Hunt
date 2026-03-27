import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Landing from "./components/Landing";
import Timeline from "./components/Timeline";
import Memory from "./components/Memory";
import Surprise from "./components/Surprise";
import MusicPlayer from "./components/MusicPlayer";

// 🔁 Animated Routes Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/memory/:id" element={<Memory />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // 📊 Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;
      setScrollProgress((scroll / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 💖 Cinematic Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* 💖 Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
          <h1 className="text-3xl md:text-5xl font-display text-primary animate-pulse">
            Loading your love story...
          </h1>
        </div>
      )}

      {/* 📊 Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 🎵 Music */}
      <MusicPlayer />

      {/* 🚀 Routes */}
      {!loading && <AnimatedRoutes />}
    </Router>
  );
}

export default App;