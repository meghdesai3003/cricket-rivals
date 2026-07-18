import { NavLink } from "react-router-dom";
import logo from "../assets/logo-placeholder.svg";
import { useCoins } from "../context/CoinContext";

function Header() {
  const { coins } = useCoins();

  const navLink =
    "transition-all duration-300 hover:text-yellow-400";

  const active =
    "text-yellow-400 font-bold";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-5">

        {/* Left */}

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Cricket Rivals"
            className="h-14 w-14"
          />

          <div>
            <h1 className="text-3xl font-black text-yellow-400">
              Cricket Rivals
            </h1>

            <p className="text-sm text-slate-400">
              Build • Collect • Compete
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="flex items-center gap-8 text-white font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/playing-xi"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Playing XI
          </NavLink>

          <NavLink
            to="/packs"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Packs
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? active : navLink
            }
          >
            Settings
          </NavLink>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-8">

          <div className="text-right">
            <p className="text-xs text-slate-400">
              Coins
            </p>

            <p className="text-lg font-bold text-yellow-400">
              {coins.toLocaleString()}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">
              Level
            </p>

            <p className="text-lg font-bold text-green-400">
              8
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">
              Player
            </p>

            <p className="text-lg font-bold">
              Megh
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;