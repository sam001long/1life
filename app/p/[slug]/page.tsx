"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    // 1. 強制滿屏且禁止垂直溢出
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#FDFBF7] flex flex-col text-[#333]">
      
      {/* 頂部導覽列 */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 核心滑動區：強制橫向，禁止縱向 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden touch-pan-x" dir={isVertical ? "rtl" : "ltr"}>
        {/* 內層容器：h-full 確保高度不超過螢幕，flex-row 確保內容排成一橫列 */}
        <div className="h-full inline-flex flex-row flex-nowrap items-stretch">
          
          {/* 第一章 */}
          <section className="h-full w-[85vw] md:w-[500px] flex-shrink-0 p-8 flex flex-col justify-start">
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`} dir="ltr">
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春分</h2>
              <p className="text-xl leading-[2.6]">
                我們把直排限制在「區塊內」，這樣區塊與區塊之間就會乖乖左右排列了。
                測試：iPhone SE2 現在應該可以左右滑動。
              </p>
              <div className="mt-6 shadow-xl border-[10px] border-white rotate-1 overflow-hidden">
                <img src="https://picsum.photos/600/500?t=1" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二章 */}
          <section className="h-full w-[85vw] md:w-[500px] flex-shrink-0 p-8 flex flex-col justify-start border-l border-gray-100">
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`} dir="ltr">
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">記憶之城</h2>
              <p className="text-xl leading-[2.6]">
                這是第二章。它現在應該出現在第一章的「左邊」。
                這才是我們要的「卷軸感」。
                當你滑到這裡，代表佈署成功！
              </p>
              <div className="mt-6 shadow-xl border-[10px] border-white -rotate-1 overflow-hidden">
                <img src="https://picsum.photos/600/500?t=2" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第三章 (佔位符) */}
          <section className="h-full w-[85vw] md:w-[500px] flex-shrink-0 p-8 opacity-20">
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`} dir="ltr">
              <h2 className="text-4xl font-black">未完待續</h2>
            </div>
          </section>

        </div>
      </main>

      {/* 3. 底部飛梭 */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto px-10 gap-10 no-scrollbar">
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
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* 防止 iOS 橡皮條效應在垂直方向觸發 */
        body { position: fixed; width: 100%; height: 100%; }
      `}</style>
    </div>
  );
}
