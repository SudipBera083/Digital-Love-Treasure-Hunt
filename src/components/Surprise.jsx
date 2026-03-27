// src/pages/Surprise.jsx
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Surprise() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-display"
        >
          7 Years… And Forever To Go 💖
        </motion.h1>

        {/* Video */}
        <div className="mt-10 w-full max-w-xl">
          <video controls className="rounded-xl shadow-lg">
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-8 py-4 bg-primary rounded-full text-white text-lg shadow-xl"
        >
          Will you continue this journey with me?
        </motion.button>
      </div>
    </PageWrapper>
  );
}