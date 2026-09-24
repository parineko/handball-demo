'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';

export default function InfoSection() {
  // アニメーションの共通設定
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* セクションタイトル */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CLUB INFO</h2>
          <p className="text-slate-500">活動情報</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* 左側：テキスト情報 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">練習日時</h3>
                <p className="text-slate-600 mt-1">毎週 火・木・土曜日<br />17:00 〜 19:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">対象</h3>
                <p className="text-slate-600 mt-1">小学1年生 〜 6年生<br />（男女・未経験問わず大歓迎！）</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">活動場所</h3>
                <p className="text-slate-600 mt-1">武雄市立橘小学校 体育館</p>
              </div>
            </div>
          </motion.div>

          {/* 右側：Googleマップ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="rounded-xl overflow-hidden shadow-lg h-64 md:h-full min-h-[300px]"
          >
            <iframe 
              src="https://maps.google.co.jp/maps?output=embed&q=武雄市立橘小学校" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}