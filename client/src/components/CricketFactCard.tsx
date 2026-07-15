import Card from "./ui/Card";

function CricketFactCard() {
  return (
    <Card className="mt-8 mb-10">
      <h2 className="text-2xl font-bold">
        Cricket Fact of the Day
      </h2>

      <p className="mt-4 leading-relaxed text-gray-300">
        Sachin Tendulkar is the only player in international cricket
        to score 100 international centuries across Tests and ODIs.
      </p>
    </Card>
  );
}

export default CricketFactCard;