
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E2E4DD] font-sans text-[#242628]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-[#E2E4DD] sm:items-start">
        <div className="flex w-full flex-col items-center ">
            <h1 className="flex text-3xl font-bold text-[#FFB200] text-center ">
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
