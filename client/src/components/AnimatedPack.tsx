interface AnimatedPackProps {
  image: string;
  name: string;
  ring: string;
  opening: boolean;
}

function AnimatedPack({
  image,
  name,
  ring,
  opening,
}: AnimatedPackProps) {
  return (
    <div
      className={`
        rounded-3xl
        p-4
        ring-4
        ${ring}
        transition-all
        duration-700
        ${
          opening
            ? "scale-125 animate-packShake"
            : "hover:-translate-y-2 hover:scale-105"
        }
      `}
    >
      <img
        src={image}
        alt={name}
        className={`
          h-96
          object-contain
          ${
            opening
              ? ""
              : "animate-bounce"
          }
        `}
        style={{
          animationDuration: "3s",
        }}
      />
    </div>
  );
}

export default AnimatedPack;