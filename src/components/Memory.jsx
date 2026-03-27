import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Memory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const memories = [
    {
      title: "The Beginning 💫",
      description: "It all started with a moment that changed everything.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Growing Together 🌱",
      description: "We learned, laughed, and grew stronger together.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Stronger 💪",
      description: "Every challenge made us stronger.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Unbreakable 🔗",
      description: "Nothing could break what we built.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Memories 😄",
      description: "So many smiles, so many memories.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Dreams 🌙",
      description: "We dreamed of a future together.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Still You ❤️",
      description: "After everything… I still choose you.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Forever 💍",
      description: "And now… forever begins.",
      image: "https://via.placeholder.com/400",
    },
  ];

  const memory = memories[id];

  if (!memory) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl text-pink-400 font-bold">
        {memory.title}
      </h1>

      <img
        src={memory.image}
        className="mt-6 rounded-xl shadow-lg"
        alt="memory"
      />

      <p className="mt-6 text-gray-300 max-w-xl">
        {memory.description}
      </p>

      <button
        onClick={() => navigate("/surprise")}
        className="mt-10 px-6 py-3 bg-pink-500 rounded-full hover:scale-110 transition"
      >
        Continue →
      </button>
    </motion.div>
  );
}