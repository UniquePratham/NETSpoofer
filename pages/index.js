// pages/index.js
import dynamic from "next/dynamic";

// Dynamically import components with ssl=true
const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssl: true,
});
const DynamicHeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssl: true,
});
const DynamicStartedComponent = dynamic(
  () => import("@/components/StartedComponent"),
  { ssl: true }
);
const DynamicTerminalComponent = dynamic(
  () => import("@/components/TerminalComponent"),
  { ssl: true }
);

export default function Home() {
  return (
    <>
      <DynamicNavbar />
      <DynamicHeroSection />
      <DynamicStartedComponent />
      <DynamicTerminalComponent />
    </>
  );
}
