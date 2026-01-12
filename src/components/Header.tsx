import LightDarkModeButton from "./LightDarkModeButton";
import NavBar from "./NavBar";

export default function Header() {
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
      <NavBar />
    </nav>
  );
}
