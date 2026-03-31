"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FDFBF7] text-[#333]">
      {/* 頂部導覽列 */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 主內容區：強化滑動邏輯 */}
      <main className="flex-1 overflow-x-scroll overflow-y-hidden touch-pan-x no-scrollbar">
        {/* 這個 div 的寬度會被內容撐開，強制產生橫向滑動 */}
        <div className={`h-full p-10 flex gap-20 items-start ${isVertical ? "vertical-writing" : "flex-col"}`}>
          
          {/* 第一章 */}
          <section className="h-full flex-shrink-0 w-[85vw] md:w-[500px]">
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春</h2>
            <p className="text-xl leading-[2.5] opacity-90">
              這是 1life 的啟動測試。如果不能滑動，通常是因為內容太少。
              現在我們強制加入了多個區塊，請試著從「右往左」用力撥動螢幕。
              英文轉向：iPhone SE2, GitHub, Vercel.
            </p>
            <div className="mt-10 shadow-2xl border-[12px] border-white rotate-1">
              <img src="https://picsum.photos/600/400?t=1" className="w-full object-cover" alt="Memory" />
            </div>
          </section>

          {/* 第二章 (強制增加內容以觸發滑動) */}
          <section className="h-full flex-shrink-0 w-[85vw] md:w-[500px]">
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">記憶的片段</h2>
            <p className="text-xl leading-[2.5] opacity-90">
              當文字跨越了螢幕的邊界，滑動的儀式感才真正開始。
              這是第二個區塊，應該已經在螢幕外面了。
              如果你能看到這段話，代表滑動成功！
            </p>
            <div className="mt-10 shadow-2xl border-[12px] border-white -rotate-1">
              <img src="https://picsum.photos/600/400?t=2" className="w-full object-cover" alt="Memory" />
            </div>
          </section>

          {/* 第三章 */}
          <section className="h-full flex-shrink-0 w-[85vw] md:w-[500px] opacity-30">
            <h2 className="text-4xl font-black mb-8">未完待續</h2>
            <p className="text-xl leading-[2.5]">向左滑動，回到過去...</p>
          </section>
        </div>
      </main>

      {/* 年份飛梭 */}
      <footer className="h-16 border-t bg-white/80 flex items-center overflow-x-auto no-scrollbar px-[40vw] gap-10">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-30">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1.5 h-1.5 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* 針對 iOS 的流暢滑動優化 */
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
