// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-dark text-white font-body"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;