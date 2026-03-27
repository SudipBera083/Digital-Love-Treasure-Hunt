// Memory.jsx
export default function Memory({ memory }) {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl text-pink-500">{memory.title}</h1>

      <img
        src={memory.image}
        className="mt-6 rounded-xl shadow-lg"
      />

      <p className="mt-6 text-lg leading-relaxed">
        {memory.description}
      </p>
    </div>
  );
}