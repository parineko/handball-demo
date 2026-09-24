import HeroSection from './components/HeroSection';
import ContentsSection from './components/ContentsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. オープニングのHeroセクション */}
      <HeroSection />
      
      {/* 2. 下にスクロールして現れる4つのコンテンツ */}
      <ContentsSection />

      {/* 3. ページを締めるフッター */}
      <footer className="w-full bg-zinc-950 py-12 px-6 border-t border-zinc-900 text-center flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest mb-4">
          TAKEO HANDBALL CLUB
        </h2>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          佐賀県武雄市を拠点に活動するハンドボールクラブ。<br />
          初心者から経験者まで、楽しく、そして強く！
        </p>
        <div className="text-xs text-gray-600 tracking-wider">
          &copy; {new Date().getFullYear()} Takeo Handball Club. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}