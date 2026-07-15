function NavigationMenu() {
  const menuItems = [
    { title: "Playing XI" },
    { title: "Collection" },
    { title: "Profile" },
    { title: "Settings" },
  ];

  return (
    <section className="mx-auto mt-8 grid w-11/12 max-w-4xl grid-cols-2 gap-6">
      {menuItems.map((item) => (
        <button
          key={item.title}
          className="
            rounded-2xl
            bg-slate-800
            p-6
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-slate-700
          "
        >
          <p className="text-xl font-semibold">
            {item.title}
          </p>
        </button>
      ))}
    </section>
  );
}

export default NavigationMenu;