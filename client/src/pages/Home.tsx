import HeroSection from "../components/HeroSection";
import NavigationMenu from "../components/NavigationMenu";
import DailyRewardCard from "../components/DailyRewardCard";
import CricketFactCard from "../components/CricketFactCard";
import PlayerDashboard from "../components/PlayerDashboard";

function Home() {
  return (
    <>
      <HeroSection />

      <PlayerDashboard />

      <NavigationMenu />

      <section className="mx-auto mt-12 grid w-11/12 max-w-6xl gap-6 md:grid-cols-2">
        <DailyRewardCard />
        <CricketFactCard />
      </section>
    </>
  );
}

export default Home;