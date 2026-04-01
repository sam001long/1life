"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 15 }, (_, i) => 2026 - i);

  return (
    // 【層級 1】最外層：鎖定全螢幕，禁止任何方向的溢出
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#FDFBF7] flex flex-col text-[#333]">
      
      {/* 頂部導覽列：固定高度 56px */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-50">
        <button 
          onClick={() => setIsVertical(!isVertical)} 
          className="text-[10px] border border-black px-2 py-1 rounded font-bold active:bg-gray-100"
        >
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black text-xl tracking-tighter text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 【層級 2】主軌道：強制 LTR (左到右)，鎖死上下滑動 */}
      {/* touch-action: pan-x 是關鍵，它告訴手機「只准左右撥動」 */}
      <main 
        className="flex-1 overflow-x-auto overflow-y-hidden flex flex-row flex-nowrap"
        style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch" }}
      >
        
        {/* 【層級 3】第一章車廂 */}
        <section className="h-full w-screen flex-shrink-0 p-6 flex flex-col overflow-hidden border-r border-gray-50">
          {/* 【層級 4】只有這裡才有直排指令，且高度撐滿車廂 */}
          <div className={`w-full h-full ${isVertical ? "vertical-engine" : ""}`}>
            <h2 className="text-3xl font-black mb-6">二〇二六．重啟</h2>
            <div className="text-lg leading-[2.6]">
              我們現在把「直排」關在一個小房間裡。
              這樣它就不會把整輛火車拖到下面去了。
              測試：iPhone SE2 現在應該**無法**上下滑動。
            </div>
            <div className="mt-6 shadow-xl border-[8px] border-white rotate-1 inline-block">
              <img src="https://picsum.photos/500/400?t=1" className="w-full h-auto max-h-[35vh] object-cover" alt="Memory" />
            </div>
          </div>
        </section>

        {/* 第二章車廂：現在它一定會出現在右邊 */}
        <section className="h-full w-screen flex-shrink-0 p-6 flex flex-col overflow-hidden border-r border-gray-50 bg-white/30">
          <div className={`w-full h-full ${isVertical ? "vertical-engine" : ""}`}>
            <h2 className="text-3xl font-black mb-6">向左翻閱</h2>
            <div className="text-lg leading-[2.6]">
              這是第二章。
              因為外層軌道是橫向的，
              它現在乖乖待在第一章的右邊了。
              請向左滑動來看到我。
            </div>
            <div className="mt-6 shadow-xl border-[8px] border-white -rotate-1 inline-block">
              <img src="https://picsum.photos/600/400?t=2" className="w-full h-auto max-h-[35vh] object-cover" alt="Memory" />
            </div>
          </div>
        </section>

        {/* 第三章預留 */}
        <section className="h-full w-screen flex-shrink-0 p-6 opacity-10">
          <h2 className="text-3xl font-black">...</h2>
        </section>

      </main>

      {/* 【層級 1】底部年份：固定高度 64px */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto no-scrollbar px-[45vw] gap-8">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-20">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1 h-1 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        /* 核心直排引擎：只影響文字與內部排版 */
        .vertical-engine {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
        }
        /* 修正直排模式下圖片不聽話的問題 */
        .vertical-engine img {
          writing-mode: horizontal-tb;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
