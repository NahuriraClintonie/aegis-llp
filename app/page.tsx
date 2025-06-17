import JapanHero from "@/components/organisms/JapanHero";
import IntroSection from "@/components/organisms/IntroSection";
import MemberCompaniesPreview from "@/components/organisms/MemberCompaniesPreview";
import NewsPreview from "@/components/organisms/NewsPreview";
import * as styles from "@/styles/layouts/layout.css";

export default function HomePage() {
  return (
    <div className={styles.homeBackground}>
      <JapanHero />
      <IntroSection />
      <MemberCompaniesPreview />
      <NewsPreview />
    </div>
  );
}
