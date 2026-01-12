export default function WordsPage() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="font-bold text-6xl mb-10 font-dm-serif">
            Brain Dump 🧠
          </h1>
          <h2 className="text-2xl">A place for reflections and daydreams ☁️</h2>
        </div>
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div>
          <ol className="list-decimal list-inside">
            <li className="text-2xl">2025: Reflection & 2026: Goals</li>
            <li className="text-2xl">
              365+ days at my first full-time tech job: 10 Lessons
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
