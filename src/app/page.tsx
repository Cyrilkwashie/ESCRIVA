import Countdown from "@/components/sections/Countdown";
import Hero from "@/components/sections/Hero";
import HerUniverse from "@/components/sections/HerUniverse";
import Letter from "@/components/sections/Letter";
import MomentsGallery from "@/components/sections/MomentsGallery";
import OurSongs from "@/components/sections/OurSongs";
import OurStory from "@/components/sections/OurStory";
import TheList from "@/components/sections/TheList";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HerUniverse />
      <OurStory />
      <MomentsGallery />
      <TheList />
      <OurSongs />
      <Letter />
      <Countdown />
    </main>
  );
}
