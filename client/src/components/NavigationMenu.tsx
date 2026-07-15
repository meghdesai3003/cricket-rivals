import { Link } from "react-router-dom";
import {
  Shield,
  Trophy,
  User,
  Settings,
} from "lucide-react";

function NavigationMenu() {
  const menuItems = [
    {
      title: "Playing XI",
      subtitle: "Build your strongest team",
      path: "/playing-xi",
      color: "bg-green-500",
      icon: Shield,
    },
    {
      title: "Collection",
      subtitle: "15 / 200 Players",
      path: "/collection",
      color: "bg-yellow-400",
      icon: Trophy,
    },
    {
      title: "Profile",
      subtitle: "View your progress",
      path: "/profile",
      color: "bg-blue-500",
      icon: User,
    },
    {
      title: "Settings",
      subtitle: "Game preferences",
      path: "/settings",
      color: "bg-red-500",
      icon: Settings,
    },
  ];

  return (
    <section className="mx-auto mt-12 grid w-11/12 max-w-6xl gap-6 md:grid-cols-2">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            to={item.path}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-slate-800
              p-8
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-slate-700
              hover:shadow-2xl
            "
          >
            {/* Top Accent Bar */}
            <div
              className={`absolute left-0 top-0 h-2 w-full ${item.color}`}
            />

            {/* Icon + Title */}
            <div className="flex items-center gap-4">
              <Icon
                size={34}
                className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-3xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
                {item.title}
              </h3>
            </div>

            {/* Subtitle */}
            <p className="mt-3 text-slate-400">
              {item.subtitle}
            </p>

            {/* Arrow */}
            <div className="mt-8 flex justify-end">
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default NavigationMenu;