import Button from "./ui/Button";

function PlayButton() {
  return (
    <section className="mt-8 flex justify-center">
      <Button
        variant="primary"
        className="px-16 py-5 text-2xl"
      >
        PLAY
      </Button>
    </section>
  );
}

export default PlayButton;