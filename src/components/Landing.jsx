// Landing.jsx
export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <h1 className="text-5xl font-bold animate-fadeIn">
        Forever 7 💖
      </h1>

      <p className="mt-4 text-lg opacity-80">
        01 April 2019 → 01 April 2026
      </p>

      <button className="mt-8 px-6 py-3 bg-pink-500 rounded-full hover:scale-110 transition">
        Start Our Journey →
      </button>
    </div>
  );
}