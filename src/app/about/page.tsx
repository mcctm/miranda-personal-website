import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="items-center justify-center">
        <main className="grid grid-cols-3 grid-rows-2">
          <div className="col-span-2 pl-15">
            <h1 className="font-bold text-6xl mb-20 font-dm-serif">
              Hi👋 I&apos;m Miranda!✨
            </h1>
            <div className="text-2xl">
              <p className="mb-4">
                I’m a software engineer with roots in psychology 🧠
              </p>
              <p className="mb-4">
                It all started in a linguistics class on natural language
                processing (with ELIZA the chatbot 💬) which grew into a
                passion. At the peak of the pandemic, I took a leap of faith and
                dived into the coding world.{" "}
              </p>
              <p className="mb-4">
                Surprisingly, computer science isn’t so different from my past
                life of doing research or teaching kids: it still requires a
                beginner’s mindset, prompting, patience, creativity - and
                sprinkles of fun 👾{" "}
              </p>
              <p className="mb-4">
                My background in humanities and sciences continue to shape the
                way I think, collaborate with others, problem-solve and build.
                Today, I bring that same curiosity and empathy into creating
                something new.
              </p>
            </div>
          </div>
          <div className="col-span-2 col-start-3 row-start-1 justify-items-center mt-20">
            <Image
              aria-hidden
              src="/about_profilepic.png"
              alt="Profile picture"
              width={300}
              height={300}
            />
          </div>
        </main>
      </div>
    </>
  );
}
