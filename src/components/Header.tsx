import LightDarkModeButton from "./LightDarkModeButton";

function Header() {
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
      <div className="fixed top-8 right-8 flex gap-[24px]">
        <h2 className="font-semibold text-2xl">Blog</h2>
      </div>
    </nav>
  );
}

export default Header;
