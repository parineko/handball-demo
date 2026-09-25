import HeroSection from './components/HeroSection';
import ContentsSection from './components/ContentsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. オープニングのHeroセクション */}
      <HeroSection />

      {/* 2. 下にスクロールして現れる3つのコンテンツ */}
      <ContentsSection />

      {/* 3. ページを締めるフッター */}
      <footer className="w-full bg-zinc-950 py-16 px-6 border-t border-zinc-900 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-orange-500/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          
          <img 
            src="/slogan.png" 
            alt="堅守猛攻 武雄ハンドボールクラブ" 
            className="w-[180px] md:w-[240px] h-auto object-contain mb-8 opacity-90 drop-shadow-xl"
          />

          {/* ▼ ここを修正しました ▼
              スマホでは text-sm と tracking-widest にし、whitespace-nowrap で改行を禁止しています */}
          <h2 className="text-sm md:text-xl font-black italic text-orange-500 tracking-widest md:tracking-[0.3em] mb-8 whitespace-nowrap">
            TAKEO HANDBALL CLUB
          </h2>

          <div className="flex gap-6 md:gap-12 mb-10 text-xs md:text-sm font-bold tracking-widest text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="/classes" className="hover:text-white transition-colors">CLASSES</Link>
            <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </div>

          <a 
            href="https://www.instagram.com/takeohandballclub/?locale=ja_JP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-full text-xs md:text-sm text-gray-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all mb-12 group"
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
              className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="tracking-widest font-bold">OFFICIAL INSTAGRAM</span>
          </a>

          <div className="text-[10px] md:text-xs text-gray-600 tracking-wider text-center">
            &copy; {new Date().getFullYear()} Takeo Handball Club. All Rights Reserved.
          </div>
          
        </div>
      </footer>
    </main>
  );
}