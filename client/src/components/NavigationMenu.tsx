import { Link } from "react-router-dom";

function NavigationMenu() {
  const menuItems = [
    {
      title: "Playing XI",
      subtitle: "Build your strongest team",
      path: "/playing-xi",
    },
    {
      title: "Collection",
      subtitle: "15 / 200 Players",
      path: "/collection",
    },
    {
      title: "Profile",
      subtitle: "View your progress",
      path: "/profile",
    },
    {
      title: "Settings",
      subtitle: "Game preferences",
      path: "/settings",
    },
  ];

  return (
    <section className="mx-auto mt-8 grid w-11/12 max-w-5xl grid-cols-2 gap-6">
      {menuItems.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          className="
            rounded-2xl
            bg-slate-800
            p-6
            text-left
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-slate-700
            block
          "
        >
          <h3 className="text-xl font-bold">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.subtitle}
          </p>
        </Link>
      ))}
    </section>
  );
}

export default NavigationMenu;