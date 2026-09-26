'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
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
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black italic tracking-wider mb-4"
        >
          CONTACT
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest mb-10"
        >
          見学・体験のお申し込み
        </motion.h2>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-24 pb-32">

        {/* 3. ハンドボールとクラブの魅力 */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-20">
            
            {/* 魅力1: 究極のボールスポーツ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 text-white border-l-4 border-orange-500 pl-4">
                  「走る・跳ぶ・投げる」<br className="md:hidden"/>究極のボールスポーツ！
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-6">
                  ハンドボールは、運動の基本となる要素がすべて詰まったダイナミックな競技です。チームワークや激しい体のぶつかり合いもあり、様々なスポーツに通じる高い運動能力の向上が期待できます。<br /><br />
                  奥が深く難しい面もありますが、その分できた時の面白さやシュートを決めた時の達成感は格別です！
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <img src="/contact2.jpg" alt="ハンドボールの魅力1" className="w-full h-full object-cover rounded-lg aspect-[4/5] shadow-2xl" />
                <img src="/contact3.jpg" alt="ハンドボールの魅力2" className="w-full h-full object-cover rounded-lg aspect-[4/5] mt-8 shadow-2xl" />
              </motion.div>
            </div>

            {/* 魅力2: チームの雰囲気 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1 grid grid-cols-2 gap-4"
              >
                <img src="/contact4.jpg" alt="チームの雰囲気1" className="w-full h-full object-cover rounded-lg aspect-[4/5] mt-8 shadow-2xl" />
                <img src="/contact5.jpg" alt="チームの雰囲気2" className="w-full h-full object-cover rounded-lg aspect-[4/5] shadow-2xl" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 text-white border-l-4 border-orange-500 pl-4">
                  初心者大歓迎！<br className="md:hidden"/>礼儀と思いやりの心も育てます
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-6">
                  「ルールが全く分からない」という未経験の子でも大丈夫！武雄ハンドボールクラブは、年上の子どもたちが非常にフレンドリーで、みんなで優しくサポートし合える温かい雰囲気が自慢です。<br /><br />
                  男女問わず、お友達同士での参加も大歓迎。技術の向上だけでなく、しっかりとした「礼儀」「挨拶」「思いやり」の心を大切に指導しています。
                </p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 4. 追加：体験参加の気軽さアピール（他のカードとデザインを統一 ＋ 画像追加） */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            {/* テキスト部分 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-wider text-white leading-relaxed">
                体験参加は<span className="text-orange-400 border-b-2 border-orange-500 mx-1 pb-1">とっても手軽</span>です！<br className="hidden md:block" />
                <span className="text-orange-400 border-b-2 border-orange-500 mx-1 pb-1 mt-2 inline-block">見学だけ</span>でも大歓迎！
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                ハンドボールは、最初から専用の道具を買い揃える必要がありません。まずは一度、遊びに来る感覚で気軽に体育館へお越しください！
              </p>
              
              <div className="bg-black/50 border border-zinc-800 rounded-xl p-6 shadow-inner">
                <h4 className="text-orange-500 font-bold mb-5 text-sm md:text-base tracking-widest border-b border-zinc-800 pb-3">
                  準備するものはこれだけ！
                </h4>
                <ul className="space-y-4 text-gray-200 font-bold text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>動きやすい服装</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      体育館シューズ<br/>
                      <span className="text-xs md:text-sm text-gray-400 font-normal mt-1 block">（学校で使っている<span className="text-orange-400 font-bold">上履きでOK！</span>）</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      水筒・タオル<br/>
                      <span className="text-xs md:text-sm text-gray-400 font-normal mt-1 block">（その他の道具は<span className="text-orange-400 font-bold underline decoration-orange-500 underline-offset-4">全く必要ありません</span>）</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 写真部分 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] h-full bg-zinc-900 border border-zinc-800"
            >
              <img 
                src="/contact6.jpg" 
                alt="体験参加の様子" 
                className="absolute inset-0 w-full h-full object-cover shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* 5. 連絡先セクション（電話 ＆ Instagram） */}
        <section className="space-y-8 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-widest"
          >
            お問い合わせはこちらから
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 電話ボタン */}
            <motion.a 
              href="tel:09019792424"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group"
            >
              <Phone className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-400 font-bold tracking-widest mb-2">お電話でのご連絡</div>
              <div className="text-2xl md:text-3xl font-black tracking-wider text-white">090-1979-2424</div>
              <div className="text-sm text-gray-400 mt-2">担当：西（にし）</div>
            </motion.a>

            {/* Instagramボタン */}
            <motion.a 
              href="https://www.instagram.com/takeohandballclub/?locale=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all group"
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
                className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <div className="text-sm text-gray-400 font-bold tracking-widest mb-2">InstagramのDM</div>
              <div className="text-xl font-black tracking-wider text-white mb-2">公式アカウントへ</div>
              <div className="text-sm text-gray-400 mt-2">お気軽にメッセージください！</div>
            </motion.a>
          </div>
        </section>

        {/* 6. 練習場所（Googleマップ）セクション */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center mt-12"
        >
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold tracking-wider">練習場所</h3>
            </div>
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