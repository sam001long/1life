"use client";
import React, { useState } from "react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <div className="fixed inset-0 h-full w-full bg-[#FDFBF7] overflow-hidden flex flex-col">
      {/* 導覽列 */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white z-50">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black text-xl text-amber-900">1life</h1>
        <div></div>
      </nav>

      {/* 核心區：使用 block + white-space: nowrap 強制橫排 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden whitespace-nowrap pt-10">
        
        {/* 第一章 */}
        <section className="inline-block h-full w-[85vw] align-top px-6 whitespace-normal">
          <div className={`h-full ${isVertical ? "vertical-mode" : ""}`}>
            <h2 className="text-4xl font-black mb-6">二〇二六．春</h2>
            <p className="text-xl leading-[2.5]">
              這是使用「膠捲模式」排版的 1life。
              如果這次能滑動了，請告訴我！
            </p>
            <div className="mt-6 shadow-xl border-[10px] border-white rotate-1">
              <img src="https://picsum.photos/500/400?t=1" className="w-full h-auto" alt="Memory" />
            </div>
          </div>
        </section>

        {/* 第二章 */}
        <section className="inline-block h-full w-[85vw] align-top px-6 whitespace-normal">
          <div className={`h-full ${isVertical ? "vertical-mode" : ""}`}>
            <h2 className="text-4xl font-black mb-6">記憶之城</h2>
            <p className="text-xl leading-[2.5]">
              如果滑到了這裡，代表膠捲模式成功！
              這是第二章。
            </p>
            <div className="mt-6 shadow-xl border-[10px] border-white -rotate-1">
              <img src="https://picsum.photos/500/400?t=2" className="w-full h-auto" alt="Memory" />
            </div>
          </section>

      </main>

      <style jsx global>{`
        .vertical-mode {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: serif;
        }
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
