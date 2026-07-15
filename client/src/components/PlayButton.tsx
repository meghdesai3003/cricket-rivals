function PlayButton() {
  return (
    <section className="mt-8 flex justify-center">
      <button
        className="
          rounded-2xl
          bg-green-600
          px-16
          py-5
          text-2xl
          font-bold
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-green-500
        "
      >
         PLAY
      </button>
    </section>
  );
}

export default PlayButton;