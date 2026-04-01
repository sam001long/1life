"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 15 }, (_, i) => 2026 - i);

  return (
    /* 使用 h-[100dvh] 確保在 iPhone 上能精準扣除瀏覽器網址列的高度 */
    <div className="fixed inset-0 h-[100dvh] w-screen flex flex-col bg-[#FDFBF7] text-[#333] overflow-hidden">
      
      {/* 1. 頂部：固定高度，絕不移動 */}
      <header className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-[100]">
        <button 
          onClick={() => setIsVertical(!isVertical)} 
          className="text-[10px] border border-black px-2 py-1 rounded font-bold active:bg-black active:text-white"
        >
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black text-xl tracking-tighter">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </header>

      {/* 2. 中間：唯一的滑動區，鎖死上下，只准左右 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden touch-pan-x bg-[#FDFBF7]">
        {/* 內層容器：inline-flex 確保內容像膠捲一樣橫向展開 */}
        <div className="h-full inline-flex flex-nowrap items-stretch">
          
          {/* 第一章 */}
          <section className="h-full w-screen flex-shrink-0 p-6 flex flex-col overflow-hidden">
            <div className={`flex-1 ${isVertical ? "vertical-engine" : ""}`}>
              <h2 className="text-3xl font-black mb-4">二〇二六．重啟</h2>
              <div className="text-lg leading-[2.4]">
                這是一場「佈局與靈魂」的戰鬥。
                現在應該**不能**上下滑動了。
                請大膽地向左撥動螢幕。
              </div>
              <div className="mt-4 shadow-xl border-[8px] border-white rotate-1 inline-block">
                <img src="https://picsum.photos/500/400?t=1" className="w-full h-auto max-h-[35vh] object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二章 */}
          <section className="h-full w-screen flex-shrink-0 p-6 flex flex-col overflow-hidden bg-white/20 border-l border-gray-100">
            <div className={`flex-1 ${isVertical ? "vertical-engine" : ""}`}>
              <h2 className="text-3xl font-black mb-4">向左翻閱</h2>
              <div className="text-lg leading-[2.4]">
                這是第二節車廂。
                我們把年份表移到了底部固定，
                不再會出現在這裡堆疊。
              </div>
              <div className="mt-4 shadow-xl border-[8px] border-white -rotate-1 inline-block">
                <img src="https://picsum.photos/500/400?t=2" className="w-full h-auto max-h-[35vh] object-cover" alt="Memory" />
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* 3. 底部：固定年份飛梭，不隨內容滾動 */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto no-scrollbar px-[40vw] gap-8">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-30">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1 h-1 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        .vertical-engine {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: serif;
        }
        /* 針對橫向模式的圖片修正 */
        .vertical-engine img { writing-mode: horizontal-tb; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* iOS 橡皮筋效應優化 */
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
