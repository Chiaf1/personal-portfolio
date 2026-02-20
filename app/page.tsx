
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full flex-col items-center ">
            <h1 className="flex text-3xl font-bold text-[#F9CE1F] text-center ">
              Hi this is the start of my personal website
            </h1>
        </div>
        <div className="flex w-full flex-col items-center ">
          <h2 className="flex text-xl text-center ">
              Breve descrizione, un po' meno breve un po' tanto meno breve Gad damn
            </h2>
        </div>
      </main>
    </div>
  );
}
