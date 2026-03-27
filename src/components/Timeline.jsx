export default function Timeline() {
  const memories = [
    { year: "2019", title: "The Beginning 💫" },
    { year: "2020", title: "Growing Together 🌱" },
    { year: "2021", title: "Stronger Together 💪" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl text-center mb-16 text-pink-400">
        Our Journey 💖
      </h2>

      <div className="space-y-10 max-w-3xl mx-auto">
        {memories.map((m, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/10"
          >
            <h3 className="text-2xl text-pink-400">{m.year}</h3>
            <p className="mt-2 text-lg">{m.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}