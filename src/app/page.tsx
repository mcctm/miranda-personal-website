import LightDarkModeButton from "@/components/LightDarkModeButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen items-center justify-center">
      <nav>
        <div className="fixed top-8 left-8 flex gap-[24px]">
          <LightDarkModeButton
            imageSrc="/light-mode.png"
            imageAlt="Light mode icon"
          />
          <LightDarkModeButton
            imageSrc="/dark-mode.png"
            imageAlt="Dark mode icon"
          />
          <LightDarkModeButton
            imageSrc="/random-mode.png"
            imageAlt="Random mode icon"
          />
        </div>
        <div className="fixed top-8 right-8 flex gap-[24px]">
          <h2 className="font-semibold text-2xl">Blog</h2>
        </div>
      </nav>
      <main className="grid grid-cols-6 grid-rows-3 gap-4">
        <div className="col-span-4 col-start-2 content-end justify-items-center pl-12">
          <h1 className="font-bold text-7xl">Miranda Chan</h1>
        </div>
        <div className="col-span-1 col-start-2 row-span-2 content-center justify-items-end">
          <div className="flex flex-col gap-[60px]">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/about.png"
                alt="About icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">About</h2>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/experience.png"
                alt="Experience icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">Experience</h2>
            </a>
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
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/projects.png"
                alt="Projects icon"
                width={60}
                height={60}
              />
              <h2 className="text-2xl">Projects</h2>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/outside-of-coding.png"
                alt="Outside of coding icon"
                width={50}
                height={50}
              />
              <h2 className="text-2xl">Outside of coding</h2>
            </a>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-8 right-8 flex gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
