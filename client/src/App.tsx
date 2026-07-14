import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import PlayButton from "./components/PlayButton";
import NavigationMenu from "./components/NavigationMenu";
import DailyRewardCard from "./components/DailyRewardCard";
import CricketFactCard from "./components/CricketFactCard";

function App() {
  return (
    <>
      <Header />
      <UserInfo
  username="Megh"
  coins={5000}
  xp={1200}
  level={8}
/>
      <PlayButton />
      <NavigationMenu />
      <DailyRewardCard />
      <CricketFactCard />
      
    </>
  );
}

export default App;