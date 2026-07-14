type UserInfoProps = {
  username: string;
  coins: number;
  xp: number;
  level: number;
};

function UserInfo({ username, coins, xp, level }: UserInfoProps) {
  return (
    <section>
      <h2>Welcome back, {username}!</h2>

      <p>🪙 Coins: {coins}</p>

      <p>⭐ XP: {xp}</p>

      <p>🏆 Level: {level}</p>
    </section>
  );
}

export default UserInfo;