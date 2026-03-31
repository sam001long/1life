import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFBF7] font-serif p-6">
      <div className="text-center animate-in fade-in zoom-in duration-1000">
        <h1 className="text-8xl font-black mb-2 text-amber-900 tracking-tighter">1life</h1>
        <div className="w-12 h-1 bg-amber-900 mx-auto mb-6"></div>
        <p className="text-xl opacity-40 mb-12 italic tracking-[0.2em]">紀錄一生，僅此一次</p>
        
        <Link href="/p/2026" className="group relative px-10 py-4 overflow-hidden rounded-full bg-amber-900 text-white transition-all shadow-2xl hover:scale-105 active:scale-95">
          <span className="relative z-10 font-bold tracking-widest">開啟回憶錄</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </Link>
      </div>
    </div>
  );
}
