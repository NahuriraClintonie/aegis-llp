import HeroSection from "@/components/organisms/HeroSection"
import IntroSection from "@/components/organisms/IntroSection"
import MemberCompaniesPreview from "@/components/organisms/MemberCompaniesPreview"
import NewsPreview from "@/components/organisms/NewsPreview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <MemberCompaniesPreview />
      <NewsPreview />
    </>
  )
}
