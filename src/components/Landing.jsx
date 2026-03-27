export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl top-10"></div>

      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
        Forever 7 💖
      </h1>

      <p className="mt-4 text-lg opacity-80">
        01 April 2019 → 01 April 2026
      </p>

      <button className="mt-10 px-8 py-3 bg-pink-500 rounded-full text-lg font-semibold hover:scale-110 hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/30">
        Start Our Journey →
      </button>
    </div>
  );
}