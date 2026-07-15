import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlayingXI from "./pages/PlayingXI";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playing-xi" element={<PlayingXI />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;