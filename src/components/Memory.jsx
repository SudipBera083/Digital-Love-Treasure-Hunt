// src/pages/Memory.jsx
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Memory() {
  return (
    <PageWrapper>
      <div className="relative">

        {/* Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1529636798458-92182e662485"
          className="w-full h-[60vh] object-cover"
        />

        {/* Glass Card */}
        <div className="max-w-4xl mx-auto -mt-32 p-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl">

          <h1 className="text-3xl font-display mb-4">
            The Day I Knew 💖
          </h1>

          <p className="text-gray-200 leading-relaxed">
            This was the moment everything changed...
          </p>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2].map((i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                className="rounded-xl"
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button className="text-gray-300">← Back</button>
            <button className="text-primary">Next →</button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}