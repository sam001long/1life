"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    // 1. 最外層：改用 min-h-screen 而非 fixed，增加穩定性
    <div className="min-h-screen w-full bg-[#FDFBF7] flex flex-col text-[#333] overflow-hidden">
      
      {/* 頂部導覽列 */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主滑動區：強制顯示捲軸進行測試 */}
      <main className="flex-1 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap">
        
        {/* 第一章 */}
        <section className="h-full min-w-[90vw] md:min-w-[500px] flex-shrink-0 p-8 border-r border-gray-100">
          <div className={`h-full ${isVertical ? "vertical-writing" : ""}`}>
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．啟程</h2>
            <p className="text-xl leading-[2.8]">
              如果還是卡住，請試著從「左往右」滑（我們暫時關閉了 RTL）。
              在電腦上，下方應該會出現一條明顯的捲軸。
              測試：iPhone SE2 螢幕寬度識別。
            </p>
            <div className="mt-6 shadow-xl border-[10px] border-white rotate-1">
              <img src="https://picsum.photos/600/500?t=1" className="w-full h-auto object-cover" alt="Memory" />
            </div>
          </div>
        </section>

        {/* 第二章 */}
        <section className="h-full min-w-[90vw] md:min-w-[500px] flex-shrink-0 p-8 border-r border-gray-100">
          <div className={`h-full ${isVertical ? "vertical-writing" : ""}`}>
            <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4 text-amber-700">記憶深處</h2>
            <p className="text-xl leading-[2.8]">
              如果你能滑到這一頁，代表這套「強制寬度」邏輯成功了。
              這是 1life 的第二個房間。
            </p>
            <div className="mt-6 shadow-xl border-[10px] border-white -rotate-1">
              <img src="https://picsum.photos/600/500?t=2" className="w-full h-auto object-cover" alt="Memory" />
            </div>
          </section>

        {/* 結尾佔位：多留一點空間 */}
        <section className="h-full min-w-[50vw] flex-shrink-0 p-8 opacity-20">
          <h2 className="text-4xl font-black">...</h2>
        </section>

      </main>

      {/* 3. 底部年份飛梭 */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto px-10 gap-10">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-20">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1 h-1 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
        }
        /* 暫時讓捲軸顯示，方便你確認是不是寬度問題 */
        main::-webkit-scrollbar {
          height: 4px;
          background: #f0f0f0;
        }
        main::-webkit-scrollbar-thumb {
          background: #888;
        }
        main {
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        section {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
