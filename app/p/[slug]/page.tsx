"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2 } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FDFBF7] text-[#333]">
      {/* 1. 頂部導覽 (固定高度) */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white/90 backdrop-blur-sm z-50 flex-shrink-0">
        <button onClick={() => setIsVertical(!isVertical)} className="text-[10px] border border-black px-2 py-1 rounded-sm font-bold">
          {isVertical ? "切換橫式" : "切換直式"}
        </button>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Music size={18} /><Shield size={18} /></div>
      </nav>

      {/* 2. 主內容區：暴力橫向捲軸層 */}
      <main className="flex-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth h-full">
        {/* 使用 inline-block 讓每個 section 像單字一樣橫向排列，絕不換行 */}
        <div className={`h-full p-6 ${isVertical ? "vertical-writing" : "inline-block w-full whitespace-normal"}`}>
          
          {/* 第一章 */}
          <div className="inline-block h-full w-[90vw] md:w-[500px] align-top px-4 whitespace-normal">
            <div className="h-full border-r border-amber-900/5 pr-10">
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">二〇二六．春</h2>
              <p className="text-xl leading-[2.8]">
                如果這次還不能滑動，代表是父層容器鎖死了寬度。
                我們用了最原始的 white-space: nowrap。
                現在內容會強制橫向排開。
                測試文字：iPhone SE2 與電腦同步測試。
                時間：2026-03-31 16:00.
              </p>
              <div className="mt-6 shadow-2xl border-[10px] border-white rotate-1 max-w-full">
                <img src="https://picsum.photos/600/400?t=1" className="w-full h-auto block" alt="Memory" />
              </div>
            </div>
          </div>

          {/* 第二章 */}
          <div className="inline-block h-full w-[90vw] md:w-[500px] align-top px-4 whitespace-normal">
            <div className="h-full border-r border-amber-900/5 pr-10">
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/10 pb-4">向左撥動</h2>
              <p className="text-xl leading-[2.8]">
                這一段應該在螢幕外面。
                在電腦上，你應該會看到下方的捲軸（Scrollbar）。
                在手機上，請用力往左推。
                直排的美，就在於這種無窮無盡的卷軸感。
              </p>
              <div className="mt-6 shadow-2xl border-[10px] border-white -rotate-1 max-w-full">
                <img src="https://picsum.photos/600/400?t=2" className="w-full h-auto block" alt="Memory" />
              </div>
            </div>
          </div>

          {/* 第三章 */}
          <div className="inline-block h-full w-[90vw] md:w-[500px] align-top px-4 whitespace-normal opacity-20">
            <h2 className="text-4xl font-black mb-8">未完待續</h2>
            <p className="text-xl leading-[2.8]">這裡是卷軸的終點。</p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: "Noto Serif TC", serif;
          display: inline-block;
          height: 100%;
        }
        /* 強制顯示電腦版捲軸，方便除錯 */
        main::-webkit-scrollbar {
          height: 4px;
        }
        main::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        /* 針對 iOS 的手感 */
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
