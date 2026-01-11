"use client";
import Link from "next/link";
import LightDarkModeButton from "./LightDarkModeButton";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const pathClassParams = (path: string) =>
    pathName === path
      ? "underline underline-offset-10 font-semibold"
      : "hover:underline hover:underline-offset-10";

  return (
    <nav className="mb-4">
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

      <div className="fixed top-8 right-8 flex gap-[30px]">
        <Link href="/" className={pathClassParams("/")}>
          <h2 className="font-semibold text-2xl">Home</h2>
        </Link>
        <Link href="/about" className={pathClassParams("/about")}>
          <h2 className="font-semibold text-2xl">About</h2>
        </Link>
        <Link href="/projects" className={pathClassParams("/projects")}>
          <h2 className="font-semibold text-2xl">Projects</h2>
        </Link>
        <Link
          href="/outside-of-coding"
          className={pathClassParams("/outside-of-coding")}
        >
          <h2 className="font-semibold text-2xl">Outside of coding</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
