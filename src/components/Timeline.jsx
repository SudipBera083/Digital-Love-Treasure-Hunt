import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Timeline() {
  const navigate = useNavigate();

  const memories = [
    { id: 0, year: "2019", title: "The Beginning 💫" },
    { id: 1, year: "2020", title: "Growing Together 🌱" },
    { id: 2, year: "2021", title: "Stronger 💪" },
    { id: 3, year: "2022", title: "Unbreakable 🔗" },
    { id: 4, year: "2023", title: "Memories 😄" },
    { id: 5, year: "2024", title: "Dreams 🌙" },
    { id: 6, year: "2025", title: "Still You ❤️" },
    { id: 7, year: "2026", title: "Forever 💍" },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">

      <h2 className="text-4xl text-center text-pink-400 mb-16 font-bold">
        Our Journey 🕰️
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {memories.map((m) => (
          <motion.div
            key={m.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/memory/${m.id}`)}
            className="cursor-pointer p-6 bg-gradient-to-br from-purple-900 to-black rounded-2xl shadow-xl border border-pink-500/20"
          >
            <h3 className="text-xl font-semibold">{m.year}</h3>
            <p className="mt-2 text-gray-300">{m.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}