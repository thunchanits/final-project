export default function Loginpage() {
  return (
    <div className="border text-lg bg-[url('/bglogin.png')] bg-cover min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <img className="w-[306px] h-[94px]" src="/logopasskit.svg"></img>
        <h1 className="text-2xl font-normal text-white">Make your journey</h1>
        <h2 className="text-2xl font-semibold text-white">more enjoyable.</h2>
        <a
          href="/homepage"
          className=" bg-[#E8C6FF] text-black px-5 py-1 flex justify-center rounded-full max-w-fit"
        >
          Let's Go
        </a>
      </div>
    </div>
  );
}
