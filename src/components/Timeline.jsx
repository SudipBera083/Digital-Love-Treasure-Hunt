// Timeline.jsx
const memories = [
  { year: "2019", title: "The Beginning 💫" },
  { year: "2020", title: "Growing Together 🌱" },
  { year: "2021", title: "Challenges & Strength 💪" },
  { year: "2022", title: "Unbreakable Bond 🔗" },
  { year: "2023", title: "Memories & Laughs 😄" },
  { year: "2024", title: "Dreaming Ahead 🌙" },
  { year: "2025", title: "Still Choosing You ❤️" },
  { year: "2026", title: "Forever Starts Now 💍" },
];

export default function Timeline() {
  return (
    <div className="bg-black text-white p-10">
      {memories.map((m, i) => (
        <div key={i} className="mb-20">
          <h2 className="text-3xl text-pink-400">{m.year}</h2>
          <p className="text-xl mt-2">{m.title}</p>
        </div>
      ))}
    </div>
  );
}