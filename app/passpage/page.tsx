export default function passpage() {
  return (
    <div className="bg-[#070600] bg-cover min-h-[100vh] flex flex-col justify-center items-center gap-4 p-6">
      <div className="text-[#f2EFEA] flex flex-col items-center">
        <h1 className="font-bold text-3xl italic">Journey</h1>
        <h2 className="font-light text-3xl">Memories</h2>
      </div>
      <div className="bg-[#f2EFEA] w-[375px] h-[620px] rounded-[40px] flex flex-col justify-between items-center gap-28 p-6">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="/logomarkorange.svg"></img>
          <div className="grid grid-cols-2 gap-4">
            <img className="size-[124px]" src="/stampfrance.svg"></img>
            <img className="size-[124px]" src="/stampjapan.svg"></img>
            <img className="size-[124px]" src="/stampitaly.svg"></img>
            <img
              className="size-[124px] shadow-lg shadow-[#FF5500]"
              src="/stampcanada.svg"
            ></img>
          </div>
        </div>
        <h1 className="text-[#FF5500] font-normal text-base">1</h1>
      </div>
      <a href="/collectpage">
       <img className="pt-10" src="/homeicon.svg"></img>
      </a>
    </div>
  );
}
