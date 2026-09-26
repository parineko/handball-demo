'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// エラーの原因だった Instagram のインポートを削除しました
import { ChevronLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. ヘッダー（戻るボタン） */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="inline-flex items-center text-sm font-bold tracking-widest text-white/70 hover:text-orange-500 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          BACK TO TOP
        </Link>
      </header>

      {/* 2. ページタイトル */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black italic tracking-wider mb-4"
        >
          ABOUT
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest"
        >
          クラブについて
        </motion.h2>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-32 pb-32">
        
        {/* 3. チーム紹介セクション */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold tracking-wider border-b border-zinc-800 pb-4">
              仲間とともに、限界を超えろ！
            </h3>
            <p className="text-gray-300 leading-relaxed">
              武雄市だけでなく、近隣の鹿島市、嬉野市、白石町、多久市、伊万里市などからも多くの部員が集まり、元気に活動しています！
            </p>
            <p className="text-gray-300 leading-relaxed">
              小学生から中学生まで幅広く在籍しており、もちろん女の子も大活躍中。ハンドボールのルールを知らなくても、全くの初心者でも安心して始められる環境が整っています。
            </p>
          </motion.div>
          {/* 練習風景の写真 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="/practice-1.jpg" alt="練習風景1" className="w-full h-full object-cover rounded-lg aspect-[4/5]" />
            <img src="/practice-2.jpg" alt="練習風景2" className="w-full h-full object-cover rounded-lg aspect-[4/5] mt-8 shadow-2xl" />
          </motion.div>
        </section>

        {/* 4. イベント紹介セクション */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* イベントの写真 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 order-2 md:order-1"
          >
            <img src="/event-1.jpg" alt="イベント風景1" className="w-full h-full object-cover rounded-lg aspect-[4/5] mt-8 shadow-2xl" />
            <img src="/event-2.jpg" alt="イベント風景2" className="w-full h-full object-cover rounded-lg aspect-[4/5]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-3xl font-bold tracking-wider border-b border-zinc-800 pb-4">
              練習だけじゃない、最高の思い出を。
            </h3>
            <p className="text-gray-300 leading-relaxed">
              日々の練習や試合だけでなく、チームの絆を深めるイベントも盛りだくさん！夏合宿をはじめ、クラブでのBBQ大会や、親子で一緒に汗を流す交流イベントなども定期的に開催しています。
            </p>
            <p className="text-gray-300 leading-relaxed">
              ハンドボールを通じて、一生モノの仲間と出会える場所です。
            </p>
          </motion.div>
        </section>

        {/* 5. 監督プロフィールセクション */}
        <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            {/* 監督の写真 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4"
            >
              <div className="aspect-[3/4] bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden shadow-2xl">
                <img src="/coach.jpg" alt="西 剛志 監督" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* 監督の経歴 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-black tracking-wider mb-2">監督プロフィール</h3>
              <p className="text-orange-500 font-bold tracking-widest mb-8">西 剛志</p>

              <div className="space-y-6 text-sm md:text-base text-gray-300">
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="font-bold text-white mb-1">高校からハンドボールを始める</p>
                  <p className="leading-relaxed">久留米工業大学附属高等学校（現.祐誠高校）主将</p>
                  <p className="text-orange-400 font-bold mt-1">👑 全国高等学校選抜大会 優勝 / インターハイ 第3位</p>
                </div>
                
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="font-bold text-white mb-1">国士舘大学 主将</p>
                  <p className="leading-relaxed">関東学生秋リーグ 準優勝</p>
                  <p className="text-orange-400 font-bold mt-1">👑 全日本学生ハンドボール選手権 第3位・優秀選手賞受賞</p>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="font-bold text-white mb-1">指導歴</p>
                  <p className="leading-relaxed">東和大学、福岡大学 コーチ</p>
                  <p className="leading-relaxed mt-1">現在 武雄ハンドボールクラブ 監督</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

{/* 共通フッター（ここから） */}
      <footer className="w-full bg-zinc-950 py-16 px-6 border-t border-zinc-900 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-orange-500/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          
          <img 
            src="/slogan.png" 
            alt="堅守猛攻 武雄ハンドボールクラブ" 
            className="w-[180px] md:w-[240px] h-auto object-contain mb-8 opacity-90 drop-shadow-xl"
          />

          <h2 className="text-sm md:text-xl font-black italic text-orange-500 tracking-widest md:tracking-[0.3em] mb-8 whitespace-nowrap">
            TAKEO HANDBALL CLUB
          </h2>

          <div className="flex flex-wrap justify-center gap-5 md:gap-12 mb-10 text-xs md:text-sm font-bold tracking-widest text-gray-400">
            {/* ▼ TOPのみ、再読み込み（アニメーション再再生）をさせるために通常の <a> タグに変更しています ▼ */}
            <a href="/" className="hover:text-white transition-colors">TOP</a>
            <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="/classes" className="hover:text-white transition-colors">CLASSES</Link>
            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </div>

          <a 
            href="https://www.instagram.com/takeohandballclub/?locale=ja_JP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-xs md:text-sm text-white font-bold tracking-widest transition-all mb-12 group bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-105 shadow-lg shadow-pink-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>OFFICIAL INSTAGRAM</span>
          </a>

          <div className="text-[10px] md:text-xs text-gray-600 tracking-wider text-center">
            &copy; {new Date().getFullYear()} Takeo Handball Club. All Rights Reserved.
          </div>
          
        </div>
      </footer>
      {/* 共通フッター（ここまで） */}
    </main>
  );
}