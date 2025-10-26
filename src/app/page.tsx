import { AnimatedBanner } from "@/components/animated-banner";
import { FeaturedCourses } from "@/components/featured-courses";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero";
import { InstructorSection } from "@/components/instructor-features";
import { LatestBlogs } from "@/components/latest-blogs";
import { Navbar } from "@/components/navbar";
import { PopularCategories } from "@/components/popular-categories";
import { ProfessionalMentors } from "@/components/professional-mentors";
import { TestimonialsSection } from "@/components/testimonials";
import { JoinCommunity } from "@/components/join-community";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col overflow-hidden">
        <HeroSection />
        <AnimatedBanner />
        <PopularCategories />
        <FeaturedCourses />
        <ProfessionalMentors />
        <InstructorSection />
        <TestimonialsSection />
        <LatestBlogs />
        <FaqSection />
        <JoinCommunity />
      </main>
      <Footer />
    </>
  );
}
