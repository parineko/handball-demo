'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContentsSection() {
  // 情報をごくシンプルに削ぎ落とし、ご用意いただいた画像ファイル名に紐付けました
  const sections = [
    {
      id: 'about',
      title: 'ABOUT',
      subtitle: 'クラブについて',
      image: '/about.jpg',
      link: '/about' 
    },
    {
      id: 'classes',
      title: 'CLASSES',
      subtitle: 'クラス・月謝',
      image: '/classes.jpg',
      link: '/classes'
    },
    {
      id: 'location',
      title: 'LOCATION',
      subtitle: '練習場所',
      image: '/location.jpg',
      link: '/location'
    },
    {
      id: 'contact',
      title: 'CONTACT',
      subtitle: '見学体験・SNS',
      image: '/contact.jpg',
      link: '/contact'
    }
  ];

  return (
    // パソコン版では2列(grid-cols-2)、スマホ版では1列(grid-cols-1)
    <section className="w-full bg-black grid grid-cols-1 md:grid-cols-2">
      {sections.map((section, index) => (
        // Link全体がクリック可能な大きなボタンになります
        <Link href={section.link} key={section.id} className="block relative h-[40vh] md:h-[50vh] group overflow-hidden cursor-pointer">
          
          {/* 背景画像（スクロールでフワッと表示） */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="absolute inset-0"
          >
            {/* 用意していただいた画像を背景に設定し、マウスホバーでゆっくりズーム */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${section.image})` }}
            />
          </motion.div>

          {/* 画像を少し暗くして文字を際立たせるフィルター（ホバーで少し明るくなります） */}
          <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30 z-10" />

          {/* テキストコンテンツ（究極にシンプル化） */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
            {/* メインタイトル（ABOUTなど）：ホバー時に少しだけ手前に迫ってくる動き */}
            <h2 className="text-5xl md:text-7xl font-black italic tracking-wider text-white drop-shadow-lg mb-2 transition-transform duration-500 group-hover:scale-110">
              {section.title}
            </h2>
            {/* サブタイトル（クラブについてなど） */}
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest drop-shadow-md">
              {section.subtitle}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
}