import Image from "next/image";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
  )
}
