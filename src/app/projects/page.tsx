import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="justify-items-center">
          <h1 className="font-bold text-6xl mb-10">Projects Highlight ⭐️</h1>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-start-1 col-span-2 ml-20 mr-20">
            <p className="text-2xl mb-5">Cracking the Coding Odyssey</p>
            <div className="mb-5">
              <a
                href="https://mcctm.github.io/cracking-the-coding-odyssey/"
                className="text-indigo-400 hover:underline mr-5"
              >
                View page
              </a>
              <a
                href="https://mcctm.github.io/cracking-the-coding-odyssey/"
                className="text-indigo-400 hover:underline mr-5"
              >
                Github repo
              </a>
            </div>
            <Image
              aria-hidden
              src="/cracking-the-coding-odyssey.png"
              alt="Cracking the coding odyssey project picture"
              width={500}
              height={500}
            />
          </div>
          <div className="col-start-3 col-span-2 ml-10">
            <p className="text-2xl mb-5">A day in my room</p>
            <div className="mb-5">
              <a
                href="https://drive.google.com/file/d/1hRhcFxsAzg0PFwXHY76PYGJgnhkn8bYi/view?usp=sharing"
                className="text-indigo-400 hover:underline mr-5"
              >
                View video
              </a>
            </div>
            <Image
              aria-hidden
              src="/day-in-my-room.png"
              alt="Day in my room project picture"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
