"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FDFBF7] text-[#333]">
      
      {/* 1. 導覽列 (橫向排列) */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white/90 z-50 shrink-0">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black text-xl text-amber-900 tracking-tighter">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主內容區：這是「水平捲軸」層 */}
      {/* 關鍵：這層絕對不可以用 vertical-rl，否則裡面的區塊會變上下排 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden">
        
        {/* 這層是「火車軌道」，強制橫向排列 */}
        <div className="flex flex-row flex-nowrap h-full w-max px-[5vw]">
          
          {/* 第一章：車廂 1 */}
          <section className="h-full w-[85vw] md:w-[450px] shrink-0 p-8 flex flex-col">
            {/* 只有這裡才開啟直式排版 */}
            <div className={`flex-1 ${isVertical ? "vertical-writing" : "block"}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春分</h2>
              <p className="text-xl leading-[2.5]">
                這是第一章。我們把直排限制在「區塊內」，
                這樣區塊與區塊之間就會乖乖地「左右排列」了。
                測試：iPhone SE2 現在應該可以左右滑動。
              </p>
              <div className="mt-6 shadow-xl border-8 border-white -rotate-1">
                <img src="https://picsum.photos/600/400?t=1" className="w-full h-auto" alt="Memory" />
              </div>
            </div>
          </section>

          {/* 第二章：車廂 2 */}
          <section className="h-full w-[85vw] md:w-[450px] shrink-0 p-8 flex flex-col bg-amber-50/20">
            <div className={`flex-1 ${isVertical ? "vertical-writing" : "block"}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4 text-amber-800">記憶之城</h2>
              <p className="text-xl leading-[2.5]">
                這是第二章。它現在應該出現在第一章的「左邊」或「右邊」。
                這就是我們要的「卷軸感」。
                當你滑到這裡，代表佈署完全正確！
              </p>
              <div className="mt-6 shadow-xl border-8 border-white rotate-1">
                <img src="https://picsum.photos/600/400?t=2" className="w-full h-auto" alt="Family" />
              </div>
            </div>
          </section>

          {/* 第三章：車廂 3 */}
          <section className="h-full w-[85vw] md:w-[450px] shrink-0 p-8 flex flex-col">
             <div className={`flex-1 ${isVertical ? "vertical-writing" : "block"}`}>
               <h2 className="text-4xl font-black mb-8 opacity-20">未完待續</h2>
             </div>
          </section>

        </div>
      </main>

      <style jsx global>{`
        /* 只針對文字內容區域 */
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
          height: 100%;
        }
        /* 隱藏捲軸 */
        main::-webkit-scrollbar { display: none; }
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
