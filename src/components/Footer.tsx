import Image from "next/image";

export function Footer() {
  return (
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
  );
}
