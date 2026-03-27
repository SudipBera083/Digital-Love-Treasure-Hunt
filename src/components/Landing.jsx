import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-purple-900 to-black text-white relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold"
      >
        Forever 7 💖
      </motion.h1>

      <p className="mt-4 text-gray-300">
        01 April 2019 → 01 April 2026
      </p>

      <button
        onClick={() => navigate("/timeline")}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-110 transition"
      >
        Start Our Journey →
      </button>
    </div>
  );
}