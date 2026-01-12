import Image from "next/image";

type ButtonProps = {
  imageSrc: string;
  imageAlt: string;
  hrefString?: string;
  label?: string;
};

export default function LightDarkModeButton(props: ButtonProps) {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src={props.imageSrc}
        alt={props.imageAlt}
        width={30}
        height={30}
      />
      {props.label ?? ""}
    </a>
  );
}
