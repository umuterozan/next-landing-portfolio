import LoadingSpin from "@/components/common/LoadingSpin";
import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Suspense fallback={(
        <div className="container mx-auto h-screen flex items-center justify-center">
          <LoadingSpin className="w-10 h-10 text-white" />
        </div>
      )}>
        <ProjectsSection />
        <BlogSection />
      </Suspense>
      <ContactSection />
    </>
  )
}