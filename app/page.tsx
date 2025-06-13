import JapanHero from "@/components/organisms/JapanHero"
import IntroSection from "@/components/organisms/IntroSection"
import MemberCompaniesPreview from "@/components/organisms/MemberCompaniesPreview"
import NewsPreview from "@/components/organisms/NewsPreview"

export default function HomePage() {
  return (
    <>
      <JapanHero />
      <IntroSection />
      <MemberCompaniesPreview />
      <NewsPreview />
    </>
  )
}
