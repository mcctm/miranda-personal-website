import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-6 grid-rows-3">
        <div className="col-span-4 col-start-2 content-center justify-items-center pl-12">
          <h1 className="font-bold text-8xl">Miranda Chan</h1>
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
                src="/words.png"
                alt="Words icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">Words</h2>
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
    </>
  );
}
