export default function Homepage() {
  return (
    <div className="text-lg bg-[url('/Home.svg')] bg-cover min-h-[100vh] justify-center flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl font-normal text-white">You are here</h1>
        <h2 className="text-5xl font-bold text-white">CANADA</h2>
        <a
          href="/travelpage"
          className="bg-[#DBD525] text-black px-5 py-2 flex justify-center rounded-full max-w-fit"
        >
          Check in!
        </a>
        <img className="w-[183px] h-[356px]" src="/character.png"></img>
      </div>
    </div>
  );
}
