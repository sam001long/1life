"use client";
import React from "react";

export default function DebugPage() {
  return (
    <div className="w-screen h-screen bg-[#FDFBF7] overflow-hidden flex flex-col">
      
      {/* 頂部 */}
      <div className="h-16 border-b flex items-center px-6 bg-white shrink-0">
        <h1 className="font-bold text-xl">1life 測試中</h1>
      </div>

      {/* 捲軸主體：我們強制給它一個超大的寬度 3000px */}
      <div className="flex-1 overflow-x-scroll overflow-y-hidden bg-gray-100">
        
        <div style={{ width: '3000px', height: '100%', display: 'flex' }}>
          
          {/* 第一區塊 */}
          <div className="w-[100vw] h-full bg-white border-r-4 border-amber-900 p-10 shrink-0" 
               style={{ writingMode: 'vertical-rl' }}>
            <h2 className="text-5xl font-black mb-10">第一章：起點</h2>
            <p className="text-2xl leading-relaxed">
              如果你在電腦上看到這行字，請用滑鼠「橫向捲動」。
              如果在 iPhone SE2，請「從右往左」用力滑。
              我們現在強制把寬度設為 3000 像素。
            </p>
          </div>

          {/* 第二區塊 */}
          <div className="w-[100vw] h-full bg-amber-50 border-r-4 border-amber-900 p-10 shrink-0"
               style={{ writingMode: 'vertical-rl' }}>
            <h2 className="text-5xl font-black mb-10">第二章：滑動成功</h2>
            <p className="text-2xl leading-relaxed">
              如果你能看到這段米黃色的背景，代表滑動終於成功了！
              這是物理級的撐開，沒有任何縮放邏輯。
            </p>
          </div>

          {/* 第三區塊 */}
          <div className="w-[100vw] h-full bg-white p-10 shrink-0"
               style={{ writingMode: 'vertical-rl' }}>
            <h2 className="text-5xl font-black mb-10">第三章：極限測試</h2>
            <p className="text-2xl leading-relaxed">這是 3000 像素的末端。</p>
          </div>

        </div>
      </div>

      {/* 底部 */}
      <div className="h-10 bg-amber-900 text-white text-[10px] flex items-center justify-center shrink-0">
        1LIFE DEBUG MODE
      </div>

    </div>
  );
}
