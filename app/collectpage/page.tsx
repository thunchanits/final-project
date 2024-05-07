export default function collectpage() {
  return (
    <div className="text-lg bg-[url('/Home.svg')] bg-cover min-h-[100vh] flex flex-col gap-10 p-6">
      <div className="flex flex-col content-start items-left gap-2">
        <h1 className="text-xl font-semibold text-white px-2">Hi, Rosie</h1>
        <a
          href="/passpage"
          className="text-white text-base border border-white fill-none px-5 py-1 flex justify-center rounded-full max-w-fit"
        >
          Journey Memories
        </a>
      </div>
      <div className="bg-[#f2EFEA] shadow-2xl rounded-3xl flex flex-col justify-center gap-4 px-6 py-8 items-center">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-[#070600] text-base font-normal">Welcome to</h1>
          <h2 className="text-[#070600] text-5xl font-bold">CANADA</h2>
        </div>
        <img
          className="w-[262px] h-[262px] rotate-3"
          src="/stampcanada.svg"
        ></img>
        <div className="flex flex-col gap-1 items-center">
          <h3 className="text-2xl font-normal text-[#070600]">Let have a</h3>
          <h4 className="text-2xl font-semibold text-[#070600]">
            Good memories
          </h4>
        </div>
        <a
          href="/finishpage"
          className="text-[#070600] text-base font-normal underline"
        >
          close
        </a>
      </div>
    </div>
  );
}
