"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    // 1. 最外層：鎖定螢幕高度，不准上下晃動
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-[#FDFBF7] flex flex-col text-[#333]">
      
      {/* 頂部導覽列 */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主內容區：強制橫向滑動 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden touch-pan-x" dir="ltr">
        {/* 內層容器：w-max 確保不被擠壓，flex-row 確保車廂橫排 */}
        <div className="h-full flex flex-row flex-nowrap w-max">
          
          {/* 第一章 */}
          <section className="h-full w-[90vw] md:w-[450px] flex-shrink-0 p-8 border-r border-gray-100">
            {/* 文字內容區：只有這裡會受直排/橫排切換影響 */}
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春分</h2>
              <p className="text-xl leading-[2.6]">
                我們把直排限制在「文字區塊」內。
                這樣車廂與車廂之間就不會上下亂跳了。
                iPhone SE2 現在應該可以流暢地左右滑動。
              </p>
              {/* 圖片區塊 */}
              <div className="mt-8 shadow-2xl border-[10px] border-white rotate-1 flex-shrink-0">
                <img src="https://picsum.photos/600/450?t=1" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二章 */}
          <section className="h-full w-[90vw] md:w-[450px] flex-shrink-0 p-8 border-r border-gray-100">
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">記憶之卷</h2>
              <p className="text-xl leading-[2.6]">
                如果你滑到了這裡，代表「火車佈局」成功。
                每一章都是獨立的車廂，橫著排隊。
              </p>
              <div className="mt-8 shadow-2xl border-[10px] border-white -rotate-1 flex-shrink-0">
                <img src="https://picsum.photos/600/450?t=2" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 結尾 */}
          <section className="h-full w-[50vw] flex-shrink-0 opacity-10 flex items-center justify-center">
            <span className="text-4xl font-serif">...</span>
          </section>

        </div>
      </main>

      {/* 3. 底部年份飛梭 */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto px-[40vw] gap-10 no-scrollbar">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-20">
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
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
