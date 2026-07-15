import logo from "../assets/logo-placeholder.svg";

function Header() {
  return (
    <header className="mx-auto flex w-11/12 max-w-6xl items-center justify-between py-6">
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

      <div className="text-right">
        <p className="text-sm text-gray-400">
          Version
        </p>

        <p className="font-semibold">
          v0.1
        </p>
      </div>
    </header>
  );
}

export default Header;