'use client';

import * as styles from '@/styles/organisms/intro.css';

const values = [
  {
    name: '信頼 (Shinrai)',
    description: '透明性、信頼性、そして誠実さに基づく信頼関係の構築。',
    image: '/avatar 1.png', 
  },
  {
    name: '協力 (Kyōryoku)',
    description: 'メンバー企業同士が協力し、共に成長していくこと。',
    image: '/avatar 2.png', 
  },
  {
    name: '革新 (Kakushin)',
    description: '技術革新を取り入れ、新たな価値を創造する姿勢。',
    image: '/avatar 3.png', 
  },
];

export default function IntroSectionJapanese() {
  return (
    <section className={styles.section}>
      <div className="container-custom">
        <div className={styles.header}>
          <h2 className={styles.title}>私たちのパートナーシップ理念</h2>
          <p className={styles.subtitle}>
            AEGIS LLPは、柔軟性と信頼性を兼ね備えた、新しい形のプロフェッショナルパートナーシップを提供します。
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value) => (
            <div key={value.name} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.textSection}>
                  <h3 className={styles.cardTitle}>{value.name}</h3>
                  <p className={styles.cardText}>{value.description}</p>
                </div>
                <div className={styles.imageWrapper}>
                  <img src={value.image} alt={value.name} className={styles.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
