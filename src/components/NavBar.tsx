"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();
  const pathClassParams = (path: string) =>
    pathName === path
      ? "underline underline-offset-10 font-semibold"
      : "hover:underline hover:underline-offset-10";

  return (
    <div className="fixed top-8 right-8 flex gap-[35px]">
      <Link href="/" className={pathClassParams("/")}>
        <h2 className="font-semibold text-2xl">Home</h2>
      </Link>
      <Link href="/about" className={pathClassParams("/about")}>
        <h2 className="font-semibold text-2xl">About</h2>
      </Link>
      <Link href="/projects" className={pathClassParams("/projects")}>
        <h2 className="font-semibold text-2xl">Projects</h2>
      </Link>
      <Link href="/words" className={pathClassParams("/words")}>
        <h2 className="font-semibold text-2xl">Words</h2>
      </Link>
      <Link
        href="/outside-of-coding"
        className={pathClassParams("/outside-of-coding")}
      >
        <h2 className="font-semibold text-2xl">Outside of coding</h2>
      </Link>
    </div>
  );
}
