import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import PlayingXI from "./pages/PlayingXI";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Packs from "./pages/Packs";

import MatchSetup from "./pages/MatchSetup";

import CoinToss from "./pages/CoinToss";

import Match from "./pages/Match";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playing-xi" element={<PlayingXI />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/match-setup" element={<MatchSetup />} />
        <Route path="/coin-toss" element={<CoinToss />} />
        <Route path="/match" element={<Match />} />
      </Route>
    </Routes>
  );
}

export default App;