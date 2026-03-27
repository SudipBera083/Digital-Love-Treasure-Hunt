export default function Memory({ memory }) {
  if (!memory) {
    return <div className="text-white text-center mt-20">Loading... 💖</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black flex justify-center items-center p-6">

      <div className="max-w-2xl bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl shadow-pink-500/20 border border-white/20">

        <h1 className="text-4xl text-pink-400 font-bold">
          {memory.title}
        </h1>

        <img
          src={memory.image}
          alt="memory"
          className="mt-6 rounded-xl shadow-lg"
        />

        <p className="mt-6 text-lg leading-relaxed opacity-90">
          {memory.description}
        </p>

      </div>
    </div>
  );
}