"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FDFBF7] text-[#333] select-none">
      {/* 1. 頂部導覽列 */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主內容區：最關鍵的滑動修正 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden transition-all duration-500 ease-in-out">
        {/* min-w-max 會強制寬度由內容決定，inline-flex 確保內容不換行 */}
        <div className={`h-full p-10 inline-flex gap-20 items-start ${isVertical ? "vertical-writing" : "flex-row"}`}>
          
          {/* 第一章 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0">
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．重啟</h2>
            <p className="text-xl leading-[2.5]">
              看到了嗎？這就是「直式排版」的美感。
              如果現在能滑動了，請往左撥。
              測試文字：iPhone SE2 是你的開發戰友。
              2026-03-31 15:47.
            </p>
            <div className="mt-10 shadow-2xl border-[12px] border-white rotate-1">
              <img src="https://picsum.photos/600/400?t=1" className="w-full h-auto" alt="Memory" />
            </div>
          </section>

          {/* 第二章：強迫它長在螢幕外面 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0">
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">向左翻閱</h2>
            <p className="text-xl leading-[2.5]">
              如果你滑到了這裡，代表我們的滑動引擎成功了！
              這是第二章的內容。
              直排的閱讀順序是從右往左。
            </p>
            <div className="mt-10 shadow-2xl border-[12px] border-white -rotate-1">
              <img src="https://picsum.photos/600/400?t=2" className="w-full h-auto" alt="Memory" />
            </div>
          </section>

          {/* 第三章 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 opacity-20">
            <h2 className="text-4xl font-black mb-8">終章預覽</h2>
            <p className="text-xl leading-[2.5]">未完待續的故事...</p>
          </section>
        </div>
      </main>

      {/* 3. 年份飛梭 */}
      <footer className="h-16 border-t bg-white flex items-center overflow-x-auto px-[40vw] gap-10 no-scrollbar">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-30 active:opacity-100">
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
        /* 確保 iOS 上的流暢手感 */
        main {
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
        }
        section { scroll-snap-align: start; }
      `}</style>
    </div>
  );
}
