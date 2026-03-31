import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFBF7] font-serif p-6">
      <h1 className="text-6xl font-black mb-4 text-amber-900">1life</h1>
      <p className="text-xl opacity-60 mb-10 italic">記錄一生，僅此一次</p>
      
      <Link href="/p/2026" className="px-8 py-3 bg-amber-900 text-white rounded-full hover:bg-amber-800 transition-all shadow-xl">
        進入回憶錄
      </Link>
    </div>
  );
}
