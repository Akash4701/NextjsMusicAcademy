import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeaturedCourses from "@/components/FeaturedCourses";
import Whychooseus from "@/components/Whychooseus";
import Testimonialcards from "@/components/Testimonialcards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04]">
   {/* <h1 className="text-4xl text-center">Hello guys,Welcome to nextJs</h1> */}
<HeroSection/>
<FeaturedCourses/>
<Whychooseus/>
<Testimonialcards/>

   </main>
  );
}
