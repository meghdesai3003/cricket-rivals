import Card from "./ui/Card";

type UserInfoProps = {
  username: string;
  coins: number;
  xp: number;
  level: number;
};

function UserInfo({ username, coins, xp, level }: UserInfoProps) {
  return (
    <Card className="mt-6">
      <h2 className="mb-6 text-2xl font-bold">
        Welcome back, {username}!
      </h2>

      <div className="flex justify-around text-center">
        <div>
          <p className="font-semibold">{coins}</p>
          <p className="text-sm text-gray-400">Coins</p>
        </div>

        <div>
          <p className="font-semibold">{xp}</p>
          <p className="text-sm text-gray-400">XP</p>
        </div>

        <div>
          <p className="font-semibold">{level}</p>
          <p className="text-sm text-gray-400">Level</p>
        </div>
      </div>
    </Card>
  );
}

export default UserInfo;