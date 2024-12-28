import Image from "next/image";
import Square from "./Components/Square";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h3 className="text-3xl font-bold underline center ">Tic Tac Toe</h3>
      <span className="grid grid-cols-3 gap-0.5">
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>

      </span>
      <Image src={"/next.svg"} alt="Vercel Logo" width={200} height={200} />  
    </div>
  );
}
