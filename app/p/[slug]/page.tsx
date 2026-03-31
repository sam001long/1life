"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    // 1. 最外層：鎖死螢幕，禁止上下晃動
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-[#FDFBF7] flex flex-col text-[#333]">
      
      {/* 頂部導覽列 */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主滑動區：這是「軌道」 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden select-none outline-none">
        
        {/* 內層容器：這是「整列火車」。min-w-max 確保它會被車廂撐開，不准縮小 */}
        <div className="h-full flex flex-row flex-nowrap w-max min-w-full">
          
          {/* 第一節車廂 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 border-r border-gray-100 flex flex-col">
            <div className={`p-8 flex-1 ${isVertical ? "vertical-writing" : ""}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春分</h2>
              <p className="text-xl leading-[2.6]">
                現在我們強制設定了「車廂寬度」。
                如果在電腦上，請按住 Shift 滾動滾輪，或者直接用滑鼠拖動捲軸。
                在 iPhone SE2 上，請直接左滑。
              </p>
              <div className="mt-6 shadow-xl border-[10px] border-white rotate-1">
                <img src="https://picsum.photos/600/500?t=1" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二節車廂 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 border-r border-gray-100 flex flex-col bg-white/30">
            <div className={`p-8 flex-1 ${isVertical ? "vertical-writing" : ""}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">記憶之城</h2>
              <p className="text-xl leading-[2.6]">
                如果你能在右邊看到這一章，代表「火車佈局」成功了！
                我們會確保每一章都至少佔據 85% 的螢幕寬度。
              </p>
              <div className="mt-6 shadow-xl border-[10px] border-white -rotate-1">
                <img src="https://picsum.photos/600/500?t=2" className="w-full h-auto object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第三節車廂 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 p-8 opacity-20">
            <div className={`h-full ${isVertical ? "vertical-writing" : ""}`}>
              <h2 className="text-4xl font-black">未完待續</h2>
            </div>
          </section>

        </div>
      </main>

      {/* 3. 底部年份飛梭 */}
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
        /* 讓滑動感更像原生 App */
        main {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
