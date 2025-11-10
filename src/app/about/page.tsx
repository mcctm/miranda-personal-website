import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="items-center justify-center">
        <main className="grid grid-cols-3 grid-rows-2 gap-8">
          <div className="col-span-2 col-start-1 row-start-1 content-end justify-items-start pl-12">
            <h1 className="font-bold text-5xl">Hi👋 I&apos;m Miranda!</h1>
          </div>
          <div className="col-span-2 col-start-1 row-start-2 pl-12">
            <p className="mb-4">
              I’m a software engineer with roots in psychology 🧠
            </p>
            <p className="mb-4">
              What began as curiosity in a natural language processing
              linguistics class (with ELIZA the chatbot 💬) quickly grew into a
              passion. At the peak of the pandemic, I took a leap of faith and
              dived into the world of coding.{" "}
            </p>
            <p className="mb-4">
              Surprisingly, computer science isn’t so different from doing
              research or teaching kids: it still requires a beginner’s mindset,
              prompting, patience, creativity - and sprinkles of fun 👾{" "}
            </p>
            <p className="mb-4">
              My background in humanities and sciences continue to shape the way
              I collaborate with others, problem-solve and build. Today, I bring
              that same curiosity and empathy into creating user-oriented
              technologies.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
