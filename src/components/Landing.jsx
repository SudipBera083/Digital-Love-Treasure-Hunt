// src/pages/Landing.jsx
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Landing() {
  return (
    <PageWrapper>
      <div className="relative h-screen w-full overflow-hidden">

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-romantic-gradient backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display text-white drop-shadow-lg"
          >
            Forever 7
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            01 April 2019 → 01 April 2026
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-10"
          >
            <a
              href="/timeline"
              className="px-6 py-3 bg-primary rounded-full text-white shadow-lg hover:scale-110 transition"
            >
              Begin Our Story
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <div className="animate-bounce text-white">↓</div>
        </div>
      </div>
    </PageWrapper>
  );
}