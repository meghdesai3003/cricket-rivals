type UserInfoProps = {
  username: string;
  coins: number;
  xp: number;
  level: number;
};

function UserInfo({ username, coins, xp, level }: UserInfoProps) {
  return (
    <section className="mx-auto mt-6 w-11/12 max-w-4xl rounded-2xl bg-slate-800 p-6 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Welcome back, {username}! 
      </h2>

      <div className="flex justify-around text-center">
        <div>
          <p className="text-3xl"></p>
          <p className="font-semibold">{coins}</p>
          <p className="text-sm text-gray-400">Coins</p>
        </div>

        <div>
          <p className="text-3xl"></p>
          <p className="font-semibold">{xp}</p>
          <p className="text-sm text-gray-400">XP</p>
        </div>

        <div>
          <p className="text-3xl"></p>
          <p className="font-semibold">{level}</p>
          <p className="text-sm text-gray-400">Level</p>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;