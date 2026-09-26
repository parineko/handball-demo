'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. ヘッダー（戻るボタン） */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="inline-flex items-center text-sm font-bold tracking-widest text-white/70 hover:text-orange-500 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          BACK TO TOP
        </Link>
      </header>

      {/* 2. ページタイトルとイントロテキスト */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black italic tracking-wider mb-4"
        >
          CLASSES
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest mb-10"
        >
          クラス・月謝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base"
        >
          武雄ハンドボールクラブは、地域の子どもたちに気軽にスポーツを楽しんでもらいたいという思いから、通いやすい月謝設定を実現しています。
        </motion.p>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12 pb-32">
        
        {/* 3. スケジュール＆月謝カード */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 小学部カード */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-black tracking-wider mb-2 relative z-10">小学部</h3>
            <div className="text-orange-500 font-bold text-2xl mb-8 relative z-10">
              月謝: 1,000円
            </div>

            <div className="relative z-10">
              <h4 className="text-sm font-bold text-gray-400 tracking-widest border-b border-zinc-800 pb-2 mb-4">
                基本練習日
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold tracking-widest">火曜日</span>
                  <span className="text-gray-300 font-mono text-lg">18:30 〜 20:30</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold tracking-widest">土曜日</span>
                  <span className="text-gray-300 font-mono text-lg">15:30 〜 18:30</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 中学部カード */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-black tracking-wider mb-2 relative z-10">中学部</h3>
            <div className="text-orange-500 font-bold text-2xl mb-8 relative z-10">
              月謝: 1,500円
            </div>

            <div className="relative z-10">
              <h4 className="text-sm font-bold text-gray-400 tracking-widest border-b border-zinc-800 pb-2 mb-4">
                基本練習日
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold tracking-widest">水曜日</span>
                  <span className="text-gray-300 font-mono text-lg">18:30 〜 20:30</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold tracking-widest">土曜日</span>
                  <span className="text-gray-300 font-mono text-lg">15:30 〜 18:30</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold tracking-widest">日曜日</span>
                  <span className="text-gray-300 font-mono text-lg">09:00 〜 12:00</span>
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* 4. 練習場所（Googleマップ）セクション */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold tracking-wider mb-6">練習場所</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              メインの練習は<strong>「武雄市立橘小学校」</strong>の体育館で行っています。<br />
              見学や体験でお越しの際は、直接体育館までお越しください。
            </p>
            <div className="text-sm text-gray-400 mt-4 bg-black/50 p-4 rounded-lg border border-zinc-800">
              〒843-0021<br />
              佐賀県武雄市橘町大字大日２４７６<br />
              <span className="text-orange-500 font-bold mt-2 inline-block">※駐車場あり</span>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full h-64 md:h-80 rounded-lg overflow-hidden border border-zinc-700 shadow-2xl">
            {/* ピンが確実に表示される形式のURLに変更しました */}
            <iframe 
              src="https://maps.google.com/maps?q=武雄市立橘小学校&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.section>

        {/* 5. 保険カード ＆ 写真セクション */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* スポーツ安全保険カード */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col justify-center"
          >
            <h4 className="text-orange-500 font-bold text-xl tracking-widest mb-4">スポーツ安全保険について</h4>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
              安心して思い切りプレーできるよう、入部時にスポーツ安全保険にご加入いただきます。万が一のケガにもしっかり備える体制を整えています。
            </p>
            <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
              <span className="text-white font-bold tracking-wider block md:inline">【保険料】 年額: 1,000円</span>
              <span className="text-xs text-gray-500 block md:inline md:ml-2 mt-1 md:mt-0">（年度ごとの更新）</span>
            </div>
          </motion.div>

          {/* 追加写真 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto bg-zinc-900 border border-zinc-800"
          >
            <img 
              src="/classes2.jpg" 
              alt="練習風景" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>

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