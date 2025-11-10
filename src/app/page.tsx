import Header from "@/components/Header";
import LightDarkModeButton from "@/components/LightDarkModeButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen items-center justify-center">
      <Header />
      <main className="grid grid-cols-6 grid-rows-3 gap-4">
        <div className="col-span-4 col-start-2 content-end justify-items-center pl-12">
          <h1 className="font-bold text-7xl">Miranda Chan</h1>
        </div>
        <div className="col-span-1 col-start-2 row-span-2 content-center justify-items-end">
          <div className="flex flex-col gap-[60px]">
            <Link
              href="/about"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                aria-hidden
                src="/about.png"
                alt="About icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">About</h2>
            </Link>
            <Link
              href="/experience"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                aria-hidden
                src="/experience.png"
                alt="Experience icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">Experience</h2>
            </Link>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <Image
            src="/light-profile-pic.png"
            alt="profile picture"
            width={800}
            height={200}
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-5 content-center">
          <div className="flex flex-col gap-[60px]">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/projects"
            >
              <Image
                aria-hidden
                src="/projects.png"
                alt="Projects icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">Projects</h2>
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/outside-of-coding"
            >
              <Image
                aria-hidden
                src="/outside-of-coding.png"
                alt="Outside of coding icon"
                width={50}
                height={50}
              />
              <h2 className="text-2xl">Outside of coding</h2>
            </Link>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-8 right-8 flex gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mcctm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.png"
            alt="Github icon"
            width={30}
            height={30}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/miranda-chan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="Linkedin icon"
            width={30}
            height={30}
          />
        </a>
      </footer>
    </div>
  );
}
