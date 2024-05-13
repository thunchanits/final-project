export default function finishpage() {
  return (
    <div className="text-lg bg-[url('/bgfinish.svg')] bg-cover min-h-[100vh] flex flex-col gap-16 p-6">
      <div className="flex flex-col content-start items-left gap-2">
        <h1 className="text-xl font-semibold text-white px-2">Hi, Rosie</h1>
        <a
          href="/passpage"
          className="text-white text-base border border-white fill-none px-5 py-1 flex justify-center rounded-full max-w-fit"
        >
          Journey Memories
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-normal italic text-white">You are here</h1>
        <h2 className="text-5xl font-bold text-white">CANADA</h2>
        <div className="text-white font-normal border-white border-2 bg-gradient-to-r from-[#FF5500] to-[#DBD525] w-[270px] h-[36px] flex flex-col justify-center items-center rounded-full">
          finished!
        </div>
        <img className="w-[183px] h-[356px]" src="/character.png"></img>
      </div>
    </div>
  );
}
