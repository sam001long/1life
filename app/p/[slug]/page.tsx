"use client";
import React, { useState } from "react";
import { Music, Shield, Trash2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function LifePage() {
  const [isVertical, setIsVertical] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);

  return (
    <div className="fixed inset-0 flex flex-col">
      {/* 1. 工具列 */}
      <nav className="h-14 border-b flex items-center justify-between px-6 bg-white/80 backdrop-blur-md z-50">
        <div className="flex gap-6">
          <button onClick={() => setIsVertical(!isVertical)} className="text-xs border px-2 py-1 rounded">
            {isVertical ? "橫排" : "直排"}
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className={isPlaying ? "text-amber-700" : "text-gray-300"}>
            <Music size={20} className={isPlaying ? "animate-spin-slow" : ""} />
          </button>
        </div>
        <h1 className="font-serif font-black tracking-tighter text-xl text-amber-900">1life</h1>
        <div className="flex gap-4 text-gray-300"><Shield size={18} /><Trash2 size={18} /></div>
      </nav>

      {/* 2. 直排故事區 */}
      <main className="flex-1 overflow-x-auto no-scrollbar">
        <div className={`h-full p-10 flex gap-16 items-start ${isVertical ? "vertical-writing" : "block"}`}>
          <section className="h-full min-w-[80vw] md:min-w-[450px]">
            <h2 className="text-5xl font-bold mb-10">二〇二六．重啟</h2>
            <p className="text-xl">
              這是 1life 的起點。
              我們在 GitHub 雲端重新架構了這本人生故事書。
              測試英文轉向：iPhone SE2, GitHub Web, 2026.
              測試數字：0331, 1450.
            </p>
            <div className="mt-12 border-[15px] border-white shadow-2xl">
              <img src="https://picsum.photos/600/400" className="w-full" alt="Memory" />
            </div>
          </section>
        </div>
      </main>

      {/* 3. 年份飛梭導覽 */}
      <footer className="h-20 border-t bg-white flex items-center overflow-x-auto no-scrollbar px-[45vw] gap-12">
        {years.map(y => (
          <div key={y} className="flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity">
            <span className="rotate-90 text-[10px] font-bold mb-1">{y}</span>
            <div className="w-1.5 h-1.5 bg-amber-800 rounded-full" />
          </div>
        ))}
      </footer>

      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 5s linear infinite; }
      `}</style>
    </div>
  );
}
