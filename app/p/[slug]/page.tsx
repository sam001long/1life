"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const years = Array.from({ length: 20 }, (_, i) => 2026 - i);

  return (
    // 【第一層】鎖定全螢幕，禁止上下晃動
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#FDFBF7] flex flex-col text-[#333]">
      
      {/* 頂部導覽列：固定高度 */}
      <nav className="h-14 flex-shrink-0 border-b flex items-center justify-between px-6 bg-white z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-400"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 【第二層】滑動軌道：強制 LTR (由左往右)，這是為了讓 iOS 乖乖排隊 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden touch-pan-x" dir="ltr">
        
        {/* 【第三層】火車總體：w-max 確保它會橫向延伸，絕不換行 */}
        <div className="h-full flex flex-row flex-nowrap w-max items-stretch">
          
          {/* 第一節車廂 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 p-8 border-r border-gray-100 flex flex-col overflow-hidden">
            {/* 關鍵：只在這裡開啟直排 */}
            <div className={`flex-1 ${isVertical ? "vertical-engine" : ""}`}>
              <h2 className="text-4xl font-black mb-6">二〇二六．重啟</h2>
              <div className="text-xl leading-[2.8]">
                這是一場「佈局與靈魂」的戰鬥。
                現在車廂應該會乖乖橫排了。
                測試：iPhone SE2 向左滑動。
              </div>
              <div className="mt-8 shadow-xl border-[10px] border-white rotate-1 inline-block">
                <img src="https://picsum.photos/600/450?t=1" className="w-full h-auto max-h-[40vh] object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二節車廂 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 p-8 border-r border-gray-100 flex flex-col overflow-hidden bg-white/20">
            <div className={`flex-1 ${isVertical ? "vertical-engine" : ""}`}>
              <h2 className="text-4xl font-black mb-6">向左翻閱</h2>
              <div className="text-xl leading-[2.8]">
                這是第二節車廂。
                我們把直排限定在文字區塊，
                不讓它干擾外層的「火車軌道」。
              </div>
              <div className="mt-8 shadow-xl border-[10px] border-white -rotate-1 inline-block">
                <img src="https://picsum.photos/600/450?t=2" className="w-full h-auto max-h-[40vh] object-cover" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第三節車廂：確保結尾空間 */}
          <section className="h-full w-[85vw] md:w-[450px] flex-shrink-0 p-8 opacity-10">
            <h2 className="text-4xl font-black">...</h2>
          </section>

        </div>
      </main>

      {/* 底部年份飛梭 */}
      <footer className="h-16 flex-shrink-0 border-t bg-white flex items-center overflow-x-auto px-10 gap-10 no-scrollbar">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-20">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1.5 h-1.5 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      {/* 靈魂樣式：嚴格限定範圍 */}
      <style jsx global>{`
        .vertical-engine {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
        }
        /* 針對橫向排版模式下的圖片修正 */
        .vertical-engine img {
          writing-mode: horizontal-tb;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
