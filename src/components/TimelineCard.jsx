// src/components/TimelineCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TimelineCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-2xl"
    >
      <img
        src={item.image}
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

      <div className="absolute bottom-0 p-4">
        <h3 className="text-xl font-display">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.caption}</p>

        <Link to={`/memory/${item.id}`} className="text-primary text-sm">
          Explore →
        </Link>
      </div>
    </motion.div>
  );
}