'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContentsSection() {
  // LOCATIONを削除し、全3セクションにまとめました。テキストもご要望通り修正しています。
  const sections = [
    {
      id: 'about',
      title: 'ABOUT',
      subtitle: 'クラブについて',
      description: '未経験からでも安心して始められる環境。チームの想いや、監督についての紹介を掲載しています。',
      image: '/about.jpg',
      link: '/about' 
    },
    {
      id: 'classes',
      title: 'CLASSES',
      subtitle: 'クラス・月謝',
      description: '小学部・中学部の練習スケジュール、月謝などの詳細な情報はこちらからご確認ください。',
      image: '/classes.jpg',
      link: '/classes'
    },
    {
      id: 'contact',
      title: 'CONTACT',
      subtitle: '見学体験・SNS',
      description: '見学や体験参加のお申し込みはこちら。メインの練習場などのご案内や、日々の試合結果・活動風景はInstagramでも随時発信中です。',
      image: '/contact.jpg',
      link: '/contact'
    }
  ];

  return (
    <section className="w-full bg-black py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24 md:space-y-40">
        
        {sections.map((section, index) => {
          // 偶数番目と奇数番目で、写真とカードの左右配置を交互にします
          const isEven = index % 2 === 0;

          return (
            <div key={section.id} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              
              {/* 1. 写真エリア */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-2/3 h-[40vh] md:h-[60vh] relative overflow-hidden shadow-2xl group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              {/* 2. カードエリア */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative w-[90%] md:w-1/2 bg-zinc-900 border border-zinc-800 p-8 md:p-12 shadow-2xl z-10 -mt-16 md:mt-0 ${isEven ? 'md:-ml-24' : 'md:-mr-24'}`}
              >
                <h2 className="text-4xl md:text-6xl font-black italic tracking-wider text-white mb-2">
                  {section.title}
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-orange-500 tracking-widest mb-6">
                  {section.subtitle}
                </h3>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                  {section.description}
                </p>

                <Link href={section.link} className="inline-flex items-center gap-3 border border-white/30 px-8 py-3 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black group">
                  MORE 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>

            </div>
          );
        })}
        
      </div>
    </section>
  );
}