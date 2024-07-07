// pages/index.js
import dynamic from "next/dynamic";

// Dynamically import StartedComponent
const StartedComponent = dynamic(() => import("@/components/StartedComponent"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Additional content can go here */}
      <StartedComponent />
    </>
  );
}
