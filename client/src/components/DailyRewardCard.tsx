import Card from "./ui/Card";
import Button from "./ui/Button";

function DailyRewardCard() {
  return (
    <Card className="mt-8">
      <h2 className="text-2xl font-bold">
        Daily Reward
      </h2>

      <p className="mt-3 text-gray-300">
        Come back every day to earn exciting rewards and grow your collection.
      </p>

      <Button
        variant="gold"
        className="mt-6 w-full"
      >
        Claim Reward
      </Button>
    </Card>
  );
}

export default DailyRewardCard;