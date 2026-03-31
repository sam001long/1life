"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2, Milestone } from "lucide-react";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 產生 2026 到 2000 的年份
  const years = Array.from({ length: 27 }, (_, i) => 2026 - i);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FDFBF7] text-[#333] font-serif">
      
      {/* 1. 頂部工具列：優雅透明感 */}
      <nav className="h-14 border-b border-amber-900/10 flex items-center justify-between px-6 bg-white/60 backdrop-blur-md z-50 shrink-0">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsVertical(!isVertical)} 
            className="text-[10px] border border-amber-900 px-2 py-1 rounded-sm font-bold hover:bg-amber-900 hover:text-white transition-all"
          >
            {isVertical ? "切換橫式" : "切換直式"}
          </button>
          
          {/* 留聲機按鈕 */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`transition-all ${isPlaying ? "text-amber-700 animate-spin" : "text-gray-300"}`}
            style={{ animationDuration: '8s' }}
          >
            <Music size={20} />
          </button>
        </div>

        <h1 className="font-black tracking-tighter text-2xl text-amber-900">1life</h1>

        <div className="flex gap-4 text-gray-400">
          <Shield size={18} className="hover:text-amber-700 cursor-pointer" />
          <Trash2 size={18} className="hover:text-red-500 cursor-pointer" />
        </div>
      </nav>

      {/* 2. 主內容區：保留物理滑動，注入直排靈魂 */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden select-none">
        {/* 這裡就是那條 3000px 的「長卷」，我們用 flex-nowrap 確保它不換行 */}
        <div className="h-full flex flex-nowrap w-max px-[10vw]">
          
          {/* 第一章 */}
          <section className="h-full w-[85vw] md:w-[450px] shrink-0 px-8 py-12 border-r border-amber-900/5">
            <div className={`h-full ${isVertical ? "vertical-writing" : "block text-left"}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/20 pb-4">二〇二六．春分</h2>
              <p className="text-xl leading-[2.6] opacity-90">
                滑動成功了！這是在 iPhone SE2 上完美呈現的「1life」。
                當文字隨著手指撥動而緩緩移入視線，這份紀錄才有了生命。
                AI 識別：2026-03-31 16:00, 台北, 晴。
              </p>
              <div className="mt-10 shadow-2xl border-[12px] border-white -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/600/800?t=1" className="w-full h-auto" alt="Memory" />
              </div>
              <p className="mt-6 text-sm italic opacity-50 text-right">「有些記憶，值得用直排去細讀。」</p>
            </div>
          </section>

          {/* 第二章 */}
          <section className="h-full w-[85vw] md:w-[450px] shrink-0 px-8 py-12 border-r border-amber-900/5 bg-amber-50/30">
            <div className={`h-full ${isVertical ? "vertical-writing" : "block"}`}>
              <h2 className="text-4xl font-black mb-8 border-b-2 border-amber-900/20 pb-4">關於「傳承」</h2>
              <p className="text-xl leading-[2.6]">
                這裡將會存放你的族譜與朋友故事。
                當數位遺囑觸發時，這些文字將會成為後人眼中的光。
                我們不只是在寫 App，我們在修復時間。
              </p>
              <div className="mt-10 shadow-2xl border-[12px] border-white rotate-1">
                <img src="https://picsum.photos/600/800?t=2" className="w-full h-auto" alt="Family" />
              </div>
            </div>
          </section>

          {/* 更多章節可以在這裡繼續添加... */}

        </div>
      </main>

      {/* 3. 底部年份飛梭：與物理滑動連動 */}
      <footer className="h-20 border-t border-amber-900/10 bg-white/80 flex items-center overflow-x-auto no-scrollbar px-[40vw] gap-10 shrink-0">
        {years.map(y => (
          <div key={y} className="flex-shrink-0 flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
            <span className="rotate-90 text-[10px] font-bold mb-1 tracking-tighter">{y}</span>
            <div className="w-1.5 h-1.5 bg-amber-900 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        .vertical-writing {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        main { -webkit-overflow-scrolling: touch; }
      `}</style>
    </div>
  );
}
