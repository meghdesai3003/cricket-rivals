import logo from "../assets/logo-placeholder.svg";

function Header() {
  return (
    <header className="mx-auto flex w-11/12 max-w-6xl items-center justify-between py-6">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Cricket Rivals Logo"
          className="h-14 w-14"
        />

        <div>
          <h1 className="text-4xl font-extrabold tracking-wide text-yellow-400">
            Cricket Rivals
          </h1>

          <p className="text-sm text-gray-400">
            Build • Collect • Compete
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-8">
        <div className="text-right">
          <p className="text-xs text-gray-400">Coins</p>
          <p className="text-lg font-bold text-yellow-400">5000</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Level</p>
          <p className="text-lg font-bold text-green-400">8</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Player</p>
          <p className="text-lg font-semibold">Megh</p>
        </div>
      </div>
    </header>
  );
}

export default Header;