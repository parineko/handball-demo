'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  // 登場のディレイを大幅に短縮し、サクサク表示されるように変更しました
  const players = [
    { id: 1, src: '/player1.png', className: 'absolute bottom-[41%] left-[49%] h-[54vh] md:bottom-[10%] md:left-[48%] md:h-[85vh] z-40', delay: 0.1, yOffset: 40 },
    { id: 2, src: '/player2.png', className: 'absolute bottom-[16%] left-[66%] h-[59vh] md:bottom-[-7%] md:left-[68%] md:h-[83vh] z-40', delay: 0.2, yOffset: 40 },
    { id: 3, src: '/player3.png', className: 'absolute bottom-[34%] left-[38%] h-[48vh] md:bottom-[9%] md:left-[33%] md:h-[75vh] z-40', delay: 0.3, yOffset: 40 },
    { id: 4, src: '/player4.png', className: 'absolute bottom-[10%] left-[29%] h-[48vh] md:bottom-[-16%] md:left-[36%] md:h-[62vh] z-50', delay: 0.4, yOffset: 40 },
    { id: 5, src: '/player5.png', className: 'absolute bottom-[8%] left-[85%] h-[52vh] md:bottom-[-22%] md:left-[64%] md:h-[69vh] z-40', delay: 0.5, yOffset: 40 },
    { id: 6, src: '/player6.png', className: 'absolute bottom-[-17%] left-[53%] h-[66vh] md:bottom-[-38%] md:left-[50%] md:h-[87vh] z-50', delay: 0.6, yOffset: 40 },
  ];

  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-black overflow-hidden font-sans">
      
      {/* 選手たちの登場アニメーション（durationも短縮） */}
      {players.map((player) => (
        <motion.img
          key={player.id}
          src={player.src}
          alt={`Player ${player.id}`}
          className={`${player.className} w-auto object-contain -translate-x-1/2 drop-shadow-2xl`}
          initial={{ opacity: 0, y: player.yOffset, scale: 1.05 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: player.delay, ease: "easeOut" }}
        />
      ))}

      {/* 背景を少し暗くするフィルタ（選手が出揃うタイミングに合わせる） */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.2 }}
        className="absolute inset-0 bg-black/40 z-[60] pointer-events-none"
      />

      {/* 中央の英語ロゴ（スローガンと同時表示） */}
      <div className="absolute inset-0 z-[70] flex flex-col items-center justify-center pointer-events-none mt-[-5vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-4 flex justify-center"
        >
          <img 
            src="/logo.png" 
            alt="Takeo Handball Club Logo" 
            className="w-[60%] md:w-[380px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] object-contain"
          />
        </motion.div>
      </div>

      {/* 右下の日本語スローガン（英語ロゴと完全に同じタイミングで表示） */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
        className="absolute bottom-20 right-4 md:bottom-12 md:right-12 z-[80] pointer-events-none"
      >
        <img 
          src="/slogan.png" 
          alt="堅守猛攻 武雄ハンドボールクラブ" 
          className="w-[130px] md:w-[280px] h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] opacity-90 object-contain"
        />
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center text-white/70"
      >
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] mb-2">SCROLL</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 opacity-80" />
        </motion.div>
      </motion.div>
      
    </section>
  );
}