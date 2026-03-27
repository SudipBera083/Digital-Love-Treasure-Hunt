import { motion } from "framer-motion";

export default function Surprise() {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-pink-900 to-black text-white text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-bold text-pink-400">
        Happy 7th Anniversary 💖
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        From 01/04/2019 to today…  
        every moment with you has been magical.  
        And I would still choose you again. 💖
      </p>
    </motion.div>
  );
}